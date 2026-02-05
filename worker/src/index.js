const jsonResponse = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  });

const getAllowedOrigins = (env) => {
  const raw = env.ALLOWED_ORIGINS || "";
  const list = raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return list.length ? list : ["*"];
};

const getCorsHeaders = (request, env) => {
  const origin = request.headers.get("Origin") || "";
  const allowed = getAllowedOrigins(env);
  const allowOrigin = allowed.includes("*")
    ? "*"
    : allowed.includes(origin)
      ? origin
      : "null";

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  };
};

const withCors = (response, corsHeaders) => {
  const headers = new Headers(response.headers);
  Object.entries(corsHeaders).forEach(([key, value]) => {
    headers.set(key, value);
  });
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
};

const unauthorized = (corsHeaders) =>
  jsonResponse({ error: "Unauthorized" }, 401, corsHeaders);

const badRequest = (message, corsHeaders) =>
  jsonResponse({ error: message }, 400, corsHeaders);

const isAuthorized = (request, env) => {
  const auth = request.headers.get("Authorization") || "";
  if (!auth.startsWith("Basic ")) return false;

  const decoded = atob(auth.slice(6));
  const [user, pass] = decoded.split(":");

  if (!env.ADMIN_USER || !env.ADMIN_PASS) return false;
  if (user !== env.ADMIN_USER) return false;
  return pass === env.ADMIN_PASS;
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const corsHeaders = getCorsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }

    if (url.pathname === "/api/health") {
      return withCors(jsonResponse({ ok: true }), corsHeaders);
    }

    if (url.pathname === "/api/fs" && request.method === "GET") {
      const row = await env.DB.prepare(
        "SELECT data, updated_at FROM portfolio_current WHERE id = 1"
      ).first();

      if (!row) {
        return withCors(
          jsonResponse({ error: "No data found" }, 404),
          corsHeaders
        );
      }

      const data = JSON.parse(row.data);
      return withCors(
        jsonResponse({ data, updated_at: row.updated_at }),
        corsHeaders
      );
    }

    if (url.pathname.startsWith("/api/admin")) {
      if (!isAuthorized(request, env)) {
        return withCors(unauthorized(corsHeaders), corsHeaders);
      }

      if (url.pathname === "/api/admin/whoami" && request.method === "GET") {
        return withCors(
          jsonResponse({ user: env.ADMIN_USER }),
          corsHeaders
        );
      }

      if (url.pathname === "/api/admin/history" && request.method === "GET") {
        const result = await env.DB.prepare(
          "SELECT id, message, created_at FROM portfolio_versions ORDER BY id DESC LIMIT 10"
        ).all();
        return withCors(jsonResponse({ items: result.results }), corsHeaders);
      }

      if (url.pathname === "/api/admin/save" && request.method === "POST") {
        const body = await request.json().catch(() => null);
        if (!body?.data || body.data.type !== "dir") {
          return withCors(badRequest("Invalid data", corsHeaders), corsHeaders);
        }

        const now = new Date().toISOString();
        const message = body.message || "Saved";
        const payload = JSON.stringify(body.data);

        await env.DB.prepare(
          "INSERT INTO portfolio_versions (data, message, created_at) VALUES (?, ?, ?)"
        )
          .bind(payload, message, now)
          .run();

        await env.DB.prepare(
          "INSERT INTO portfolio_current (id, data, updated_at) VALUES (1, ?, ?)"
        )
          .bind(payload, now)
          .run()
          .catch(async () => {
            await env.DB.prepare(
              "UPDATE portfolio_current SET data = ?, updated_at = ? WHERE id = 1"
            )
              .bind(payload, now)
              .run();
          });

        return withCors(jsonResponse({ ok: true }), corsHeaders);
      }

      if (url.pathname === "/api/admin/rollback" && request.method === "POST") {
        const body = await request.json().catch(() => null);
        const id = Number(body?.id);
        if (!Number.isInteger(id)) {
          return withCors(badRequest("Invalid version id", corsHeaders), corsHeaders);
        }

        const version = await env.DB.prepare(
          "SELECT data FROM portfolio_versions WHERE id = ?"
        )
          .bind(id)
          .first();

        if (!version) {
          return withCors(
            jsonResponse({ error: "Version not found" }, 404),
            corsHeaders
          );
        }

        const now = new Date().toISOString();
        const message = `Rollback to #${id}`;
        const payload = version.data;

        await env.DB.prepare(
          "INSERT INTO portfolio_versions (data, message, created_at) VALUES (?, ?, ?)"
        )
          .bind(payload, message, now)
          .run();

        await env.DB.prepare(
          "UPDATE portfolio_current SET data = ?, updated_at = ? WHERE id = 1"
        )
          .bind(payload, now)
          .run();

        return withCors(
          jsonResponse({ ok: true, data: JSON.parse(payload) }),
          corsHeaders
        );
      }
    }

    return withCors(jsonResponse({ error: "Not found" }, 404), corsHeaders);
  }
};
