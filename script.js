(() => {
  const USER = "vishwavijay";
  const HOST = "portfolio";

  const file = (content) => ({ type: "file", content });
  const link = (url) => ({ type: "link", url });

  const STORAGE_KEY = "terminalPortfolioFS";
  const ADMIN_KEY = "terminalPortfolioAdminHash";
  const API_KEY = "terminalPortfolioApiBase";
  const DEFAULT_API_BASE = "https://terminal-portfolio-api.vishwavijayinisolation.workers.dev";
  const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

  const createDefaultFS = () => ({
    type: "dir",
    children: {
      intro: {
        type: "dir",
        children: {
          "README.md": file(
            [
              "Vishwavijay",
              "Backend Software Engineer",
              "Bhopal, Madhya Pradesh | +91 9789960421 | vishwavijayshanker@gmail.com",
              "LinkedIn: linkedin.com/in/vishwavijayshankar",
              "GitHub: github.com/vishwavijay1",
              "",
              "Professional Summary",
              "Backend Software Engineer with 1+ year of experience designing and deploying scalable server-side systems, RESTful APIs,",
              "and data pipelines. Proficient in Java, Spring Boot, Python, PostgreSQL, and Redis. Proven expertise in authentication",
              "(OAuth2, JWT, RBAC), microservices architecture, and performance optimization. Strong communicator and collaborative",
              "team player with demonstrated leadership in delivering production-ready solutions in fast-paced agile environments.",
              "Adaptable problem-solver committed to continuous learning and technical excellence.",
              "",
              "Education",
              "B.Tech in Electronics and Communications",
              "Puducherry Technological University | Sep 2020 – May 2024",
              "12th (PCM)",
              "Macro Vision Academy, Burhanpur | 2020 | 86.8%",
              "",
              "Quick Links",
              "Resume: resume.pdf",
              "LinkedIn: linkedin.url",
              "GitHub: github.url",
              "Email: email",
              "Phone: phone"
            ].join("\n")
          ),
          "resume.pdf": link(
            "https://drive.google.com/file/d/1zlSI9HAhYntYNO8nd581EsjHQ_4LoIkn/view?usp=sharing"
          ),
          "linkedin.url": link("https://www.linkedin.com/in/vishwavijayshankar"),
          "github.url": link("https://github.com/vishwavijay1"),
          "email": link("mailto:vishwavijayshanker@gmail.com"),
          "phone": link("tel:+919789960421"),
          "location.txt": file("Bhopal, Madhya Pradesh"),
          "education.txt": file(
            [
              "B.Tech in Electronics and Communications",
              "Puducherry Technological University | Sep 2020 – May 2024",
              "",
              "12th (PCM)",
              "Macro Vision Academy, Burhanpur | 2020 | 86.8%"
            ].join("\n")
          ),
          "skills.txt": file(
            [
              "Languages: Java, Python, JavaScript, SQL, Dart",
              "Backend: Spring Boot, Spring Security, Hibernate, FastAPI, Flask, Node.js",
              "Frontend: React, Next.js, Flutter",
              "Databases: PostgreSQL, MongoDB, Redis, MySQL",
              "DevOps & Cloud: Docker, Kubernetes, AWS, Vercel, CI/CD Pipelines",
              "Tools: Git, Postman, IntelliJ IDEA, VS Code, Maven, Gradle"
            ].join("\n")
          ),
          "experience.txt": file(
            [
              "Backend Engineer (Contract) | EdTech Platform Development | Remote",
              "Jan 2025 – Oct 2025",
              "- Built RESTful services with Spring Boot, JPA, and Hibernate for evaluation workflows and analytics (10,000+ users).",
              "- Implemented RBAC with JWT, OAuth2, and Spring Security filters; secured endpoints with BCrypt.",
              "- Optimized PostgreSQL performance by 40% using indexing, pagination, and cursor-based navigation.",
              "- Added async job queuing to reduce API latency by 35% and improve throughput.",
              "- Collaborated in agile sprints with Git/GitHub Projects on weekly releases.",
              "",
              "Software Engineering Intern | Coapps | Chennai, Tamil Nadu",
              "May 2024 – Dec 2024",
              "- Built ETL pipelines with Python, Pandas, and NumPy processing 1M+ interactions daily.",
              "- Created features for ML models to improve recommendation accuracy by 25%.",
              "- Exposed Flask APIs with sub-50ms latency for downstream microservices.",
              "- Containerized services with Docker and added health monitoring for production stability."
            ].join("\n")
          )
        }
      },
      projects: {
        type: "dir",
        children: {
          "enterprise-ticket-support-system": {
            type: "dir",
            children: {
              "intro.txt": file("Issue tracking platform for registering, creating, and managing support tickets."),
              "github.url": link(
                "https://github.com/Vishwavijay1/ticket-support-backend"
              ),
              "README.md": file(
                [
                  "Enterprise Ticket Support System",
                  "",
                  "Technologies:",
                  "Java, Spring Boot, Spring Security, PostgreSQL, Spring Data JPA, Hibernate, BCrypt, CSRF Protection, JavaScript, HTML5, CSS3, AJAX",
                  "",
                  "Highlights:",
                  "- Led full-stack development of an issue tracking platform for user support tickets.",
                  "- Built a custom Spring Security filter chain with BCrypt password hashing and CSRF protection.",
                  "- Designed a normalized PostgreSQL schema with foreign key constraints.",
                  "- Developed a responsive frontend using AJAX for live updates without reloads."
                ].join("\n")
              )
            }
          },
          "panic-fix": {
            type: "dir",
            children: {
              "intro.txt": file("Cross-platform mental health support app with grounding tools."),
              "github.url": link("https://github.com/Vishwavijay1/Panic_fix"),
              "README.md": file(
                [
                  "Panic Fix – Mental Health Support App",
                  "",
                  "Technologies:",
                  "Flutter, Dart, Mobile UI/UX, Cross-Platform Development, iOS, Android, Offline Storage",
                  "",
                  "Highlights:",
                  "- Built a Flutter app for grounding techniques and real-time support during panic episodes.",
                  "- Designed calming UI with interactive breathing exercises.",
                  "- Added emergency contact features and quick-access coping tools.",
                  "- Ensured offline availability and responsive UI across iOS and Android."
                ].join("\n")
              )
            }
          },
          "gem-tracker": {
            type: "dir",
            children: {
              "intro.txt": file("Automates GeM bid tracking, document generation, and alerts."),
              "live.url": link("https://gem-ashen.vercel.app/"),
              "github.url": link("https://github.com/vishwavijay1"),
              "README.md": file(
                [
                  "GeM Tracker – e-Marketplace Bid Automation Platform",
                  "",
                  "Technologies:",
                  "Next.js, React, Node.js, Vercel, Web Scraping, RESTful APIs, Real-time Notifications, Document Generation, Form Automation, JWT, SaaS Architecture",
                  "",
                  "Highlights:",
                  "- Built a full-stack app to automate bid document generation and tender tracking for GeM.",
                  "- Created auto-document generation in under 2 minutes with 99.9% accuracy.",
                  "- Implemented real-time tender alerts via web scraping and automation workflows.",
                  "- Shipped a bid management dashboard with won/lost tracking and auto-apply flows.",
                  "",
                  "Live demo: gem-ashen.vercel.app"
                ].join("\n")
              )
            }
          }
        }
      }
    }
  });

  const loadFS = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || data.type !== "dir") return null;
      return data;
    } catch (error) {
      return null;
    }
  };

  const saveFS = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fs));
    } catch (error) {
      // Ignore storage errors (private mode / storage disabled).
    }
  };

  const resetFS = () => {
    fs = createDefaultFS();
    saveFS();
  };

  const isLocalHost = () => LOCAL_HOSTS.has(window.location.hostname);

  let fs = loadFS() || createDefaultFS();

  const loadApiBase = () => {
    try {
      return localStorage.getItem(API_KEY);
    } catch (error) {
      return null;
    }
  };

  const setApiBase = (value) => {
    apiBase = value;
    try {
      if (value) {
        localStorage.setItem(API_KEY, value);
      } else {
        localStorage.removeItem(API_KEY);
      }
    } catch (error) {
      // Ignore storage errors.
    }
  };

  const loadAdminHash = () => {
    try {
      return localStorage.getItem(ADMIN_KEY);
    } catch (error) {
      return null;
    }
  };

  const setAdminHash = (hash) => {
    adminHash = hash;
    try {
      if (hash) {
        localStorage.setItem(ADMIN_KEY, hash);
      } else {
        localStorage.removeItem(ADMIN_KEY);
      }
    } catch (error) {
      // Ignore storage errors.
    }
  };

  const outputEl = document.getElementById("terminal-output");
  const inputEl = document.getElementById("prompt-input");
  const promptLabel = document.getElementById("prompt-label");
  const terminalTitle = document.getElementById("terminal-title");
  const terminalBody = document.getElementById("terminal-body");
  const suggestionEl = document.getElementById("prompt-suggestions");
  const antsLayer = document.getElementById("ants-layer");
  const birdsLayer = document.getElementById("birds-layer");
  const fireOverlay = document.getElementById("fire-overlay");
  const minimizeButton = document.getElementById("minimize-btn");
  const closeButton = document.getElementById("close-btn");
  const maximizeButton = document.getElementById("maximize-btn");
  const terminalEl = document.querySelector(".terminal");

  let cwd = [];
  const history = [];
  let historyIndex = 0;
  let adminHash = null;
  let apiBase = loadApiBase() || DEFAULT_API_BASE;
  const adminState = {
    unlocked: false,
    awaiting: null,
    temp: null
  };
  const remoteAuth = {
    user: null,
    token: null
  };

  adminHash = isLocalHost() ? loadAdminHash() : null;

  const commandList = [
    "admin",
    "help",
    "ls",
    "cd",
    "cat",
    "open",
    "resume",
    "mkdir",
    "touch",
    "write",
    "link",
    "rm",
    "rmdir",
    "mkproject",
    "clear",
    "pwd",
    "whoami"
  ];

  const aliases = {
    readme: { cmd: "cat", args: ["README.md"] }
  };

  const pathToString = (path) => (path.length ? `~/${path.join("/")}` : "~");

  const updatePrompt = () => {
    const label = `${USER}@${HOST}:${pathToString(cwd)}$`;
    promptLabel.textContent = label;
    terminalTitle.textContent = `${USER}@${HOST}:${pathToString(cwd)}`;
  };

  const scrollToBottom = () => {
    outputEl.scrollTop = outputEl.scrollHeight;
  };

  const appendLine = (text, className = "") => {
    const line = document.createElement("div");
    line.className = ["output-line", className].filter(Boolean).join(" ");
    line.textContent = text;
    outputEl.appendChild(line);
    scrollToBottom();
  };

  const appendBlock = (text, className = "") => {
    const block = document.createElement("pre");
    block.className = ["output-block", className].filter(Boolean).join(" ");
    block.textContent = text;
    outputEl.appendChild(block);
    scrollToBottom();
  };

  const appendCommand = (commandText) => {
    const line = document.createElement("div");
    line.className = "output-line output-command";

    const label = document.createElement("span");
    label.className = "prompt__label";
    label.textContent = `${USER}@${HOST}:${pathToString(cwd)}$`;

    const command = document.createElement("span");
    command.className = "output-command__text";
    command.textContent = ` ${commandText}`;

    line.appendChild(label);
    line.appendChild(command);
    outputEl.appendChild(line);
    scrollToBottom();
  };

  const appendList = (items) => {
    if (!items.length) {
      appendLine("");
      return;
    }
    const line = document.createElement("div");
    line.className = "output-line output-list";
    items.forEach((item) => {
      const span = document.createElement("span");
      span.className = `item item--${item.type}`;
      span.textContent = item.type === "dir" ? `${item.name}/` : item.name;
      line.appendChild(span);
    });
    outputEl.appendChild(line);
    scrollToBottom();
  };

  const printError = (text) => appendLine(text, "output-error");

  const getApiBase = () => (apiBase || DEFAULT_API_BASE || "").trim();
  const hasRemote = () => getApiBase().startsWith("http");

  const setRemoteAuth = (user, pass) => {
    remoteAuth.user = user;
    remoteAuth.token = btoa(`${user}:${pass}`);
  };

  const clearRemoteAuth = () => {
    remoteAuth.user = null;
    remoteAuth.token = null;
  };

  const apiFetch = async (path, options = {}) => {
    const base = getApiBase();
    if (!base) {
      throw new Error("API base not set");
    }

    const {
      method = "GET",
      body,
      authRequired = false
    } = options;

    const headers = {
      "Content-Type": "application/json"
    };

    if (authRequired) {
      if (!remoteAuth.token) {
        throw new Error("Not logged in");
      }
      headers.Authorization = `Basic ${remoteAuth.token}`;
    }

    const response = await fetch(`${base}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      throw new Error(data?.error || `Request failed (${response.status})`);
    }

    return data;
  };

  const syncFromRemote = async () => {
    if (!hasRemote()) return;
    try {
      const response = await apiFetch("/api/fs");
      if (response?.data) {
        fs = response.data;
        saveFS();
      }
    } catch (error) {
      // Silent fail; use local data if remote is unavailable.
    }
  };

  let antsData = [];
  let antsActive = false;
  let antsFrame = null;

  const buildAnt = () => {
    const ant = document.createElement("span");
    ant.className = "ant";
    ant.innerHTML = [
      '<span class="ant__segment ant__segment--head"></span>',
      '<span class="ant__segment ant__segment--thorax"></span>',
      '<span class="ant__segment ant__segment--abdomen"></span>'
    ].join("");
    return ant;
  };

  const createAnts = (count = 18) => {
    if (!antsLayer) return;
    antsLayer.innerHTML = "";
    antsData = [];

    const bounds = antsLayer.getBoundingClientRect();
    const width = bounds.width || 600;
    const height = bounds.height || 400;

    for (let i = 0; i < count; i += 1) {
      const ant = buildAnt();
      const x = Math.random() * width;
      const y = Math.random() * height;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.25 + Math.random() * 0.7;
      const turnRate = 0.02 + Math.random() * 0.06;
      antsLayer.appendChild(ant);
      antsData.push({
        el: ant,
        x,
        y,
        angle,
        speed,
        turnRate,
        pauseUntil: 0
      });
    }
  };

  const animateAnts = (time) => {
    if (!antsActive || !antsLayer) {
      antsFrame = null;
      return;
    }

    const bounds = antsLayer.getBoundingClientRect();
    const width = bounds.width || 600;
    const height = bounds.height || 400;

    antsData.forEach((ant) => {
      if (ant.pauseUntil && time < ant.pauseUntil) {
        return;
      }

      if (Math.random() < 0.005) {
        ant.pauseUntil = time + 500 + Math.random() * 900;
        return;
      }

      ant.angle += (Math.random() - 0.5) * ant.turnRate;
      ant.x += Math.cos(ant.angle) * ant.speed;
      ant.y += Math.sin(ant.angle) * ant.speed;

      if (ant.x < 0 || ant.x > width) {
        ant.angle = Math.PI - ant.angle;
      }
      if (ant.y < 0 || ant.y > height) {
        ant.angle = -ant.angle;
      }

      ant.x = Math.max(0, Math.min(width, ant.x));
      ant.y = Math.max(0, Math.min(height, ant.y));
      ant.el.style.transform = `translate(${ant.x}px, ${ant.y}px) rotate(${ant.angle}rad)`;
    });

    antsFrame = window.requestAnimationFrame(animateAnts);
  };

  const toggleAnts = () => {
    if (!antsLayer) return;

    if (!antsActive) {
      createAnts();
      antsActive = true;
      antsLayer.classList.add("is-active");
      if (!antsFrame) {
        antsFrame = window.requestAnimationFrame(animateAnts);
      }
      return;
    }

    antsActive = false;
    antsLayer.classList.remove("is-active");
  };

  const spawnBirds = () => {
    if (!birdsLayer) return;
    birdsLayer.innerHTML = "";
    birdsLayer.classList.add("is-active");

    const count = 12;
    for (let i = 0; i < count; i += 1) {
      const bird = document.createElement("span");
      bird.className = "bird";
      const startY = `${Math.random() * 70 + 5}%`;
      const endY = `${Math.random() * 70 + 5}%`;
      const startX = `${-10 - Math.random() * 20}%`;
      const endX = `${110 + Math.random() * 20}%`;
      const duration = `${5 + Math.random() * 3}s`;
      const delay = `${Math.random() * 0.8}s`;
      const scale = (0.7 + Math.random() * 0.8).toFixed(2);

      bird.style.setProperty("--x1", startX);
      bird.style.setProperty("--y1", startY);
      bird.style.setProperty("--x2", endX);
      bird.style.setProperty("--y2", endY);
      bird.style.setProperty("--duration", duration);
      bird.style.setProperty("--delay", delay);
      bird.style.setProperty("--scale", scale);
      birdsLayer.appendChild(bird);
    }

    window.setTimeout(() => {
      birdsLayer.classList.remove("is-active");
      birdsLayer.innerHTML = "";
    }, 7000);
  };

  const triggerFire = () => {
    if (!fireOverlay) return;
    fireOverlay.innerHTML = "";
    fireOverlay.classList.add("is-active");

    const emberCount = 24;
    for (let i = 0; i < emberCount; i += 1) {
      const ember = document.createElement("span");
      ember.className = "fire-ember";
      const x = `${Math.random() * 100}%`;
      const duration = `${2.5 + Math.random() * 2.5}s`;
      const delay = `${Math.random() * 1.2}s`;
      ember.style.setProperty("--x", x);
      ember.style.setProperty("--duration", duration);
      ember.style.setProperty("--delay", delay);
      fireOverlay.appendChild(ember);
    }

    window.setTimeout(() => {
      fireOverlay.classList.remove("is-active");
      fireOverlay.innerHTML = "";
    }, 4500);
  };

  const triggerHarlemShake = () => {
    if (!terminalEl) return;
    terminalEl.classList.remove("harlem");
    void terminalEl.offsetWidth;
    terminalEl.classList.add("harlem");
    window.setTimeout(() => {
      terminalEl.classList.remove("harlem");
    }, 3000);
  };

  const triggerBarrelRoll = () => {
    if (!terminalEl) return;
    terminalEl.classList.remove("terminal--barrel");
    void terminalEl.offsetWidth;
    terminalEl.classList.add("terminal--barrel");
    window.setTimeout(() => {
      terminalEl.classList.remove("terminal--barrel");
    }, 1000);
  };

  const triggerBonk = () => {
    if (!terminalEl) return;
    terminalEl.classList.remove("terminal--bonk");
    void terminalEl.offsetWidth;
    terminalEl.classList.add("terminal--bonk");
    window.setTimeout(() => {
      terminalEl.classList.remove("terminal--bonk");
    }, 800);
  };

  const triggerYeet = () => {
    if (!terminalEl) return;
    terminalEl.classList.remove("terminal--yeet");
    void terminalEl.offsetWidth;
    terminalEl.classList.add("terminal--yeet");
    window.setTimeout(() => {
      terminalEl.classList.remove("terminal--yeet");
    }, 900);
  };

  const toggleVibe = () => {
    if (!terminalEl) return;
    const enabled = terminalEl.classList.toggle("terminal--vibe");
    appendLine(`vibe mode: ${enabled ? "on" : "off"}`);
  };

  const memeBlock = (lines) => {
    appendBlock(lines.join("\n"));
  };

  let alertActive = false;
  const triggerAlert = () => {
    if (!terminalEl || alertActive) return;
    alertActive = true;
    terminalEl.classList.add("terminal--alert");
    appendLine("system alert: signal lost...");
    window.setTimeout(() => {
      terminalEl.classList.remove("terminal--alert");
      appendLine("system alert: signal restored.");
      alertActive = false;
    }, 1400);
  };

  const toggleFocusMode = () => {
    if (!terminalEl) return;
    const enabled = terminalEl.classList.toggle("terminal--focus");
    appendLine(`focus mode: ${enabled ? "on" : "off"}`);
  };

  const simpleHash = (value) => {
    let hash = 0;
    for (let i = 0; i < value.length; i += 1) {
      hash = (hash << 5) - hash + value.charCodeAt(i);
      hash |= 0;
    }
    return `simple:${Math.abs(hash)}`;
  };

  const hashText = async (value) => {
    if (window.crypto && window.crypto.subtle) {
      const data = new TextEncoder().encode(value);
      const digest = await window.crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(digest))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
    }
    return simpleHash(value);
  };

  const requireAdmin = () => {
    if (!adminState.unlocked) {
      printError(
        isLocalHost()
          ? "admin: access denied (run `admin` to unlock)"
          : "admin: access denied (run `admin login <user>` to unlock)"
      );
      return false;
    }
    return true;
  };

  const startSecretPrompt = (message, mode) => {
    adminState.awaiting = mode;
    inputEl.value = "";
    inputEl.type = "password";
    appendLine(message);
    renderSuggestions([]);
  };

  const stopSecretPrompt = () => {
    adminState.awaiting = null;
    adminState.temp = null;
    inputEl.type = "text";
  };

  const handleSecretInput = async (value) => {
    const secret = value.trim();
    const mode = adminState.awaiting;

    if (!mode) return;

    if (!secret) {
      stopSecretPrompt();
      appendLine("Admin prompt cancelled.");
      return;
    }

    if (mode === "enter-passphrase") {
      const hash = await hashText(secret);
      stopSecretPrompt();
      if (adminHash && hash === adminHash) {
        adminState.unlocked = true;
        appendLine("Admin mode enabled.");
      } else {
        printError("admin: invalid passphrase");
      }
      return;
    }

    if (mode === "set-passphrase" || mode === "change-passphrase") {
      adminState.temp = secret;
      adminState.awaiting = "confirm-passphrase";
      inputEl.value = "";
      inputEl.type = "password";
      appendLine("Confirm admin passphrase:");
      return;
    }

    if (mode === "confirm-passphrase") {
      const temp = adminState.temp || "";
      stopSecretPrompt();
      if (secret !== temp) {
        printError("admin: passphrases do not match");
        return;
      }
      const hash = await hashText(secret);
      setAdminHash(hash);
      adminState.unlocked = true;
      appendLine("Admin passphrase set. Admin mode enabled.");
      return;
    }

    if (mode === "login-password") {
      const user = adminState.temp || "";
      stopSecretPrompt();
      if (!user) {
        printError("admin: missing user");
        return;
      }
      try {
        setRemoteAuth(user, secret);
        if (hasRemote()) {
          await apiFetch("/api/admin/whoami", { authRequired: true });
        }
        adminState.unlocked = true;
        appendLine("Remote admin authenticated.");
      } catch (error) {
        clearRemoteAuth();
        printError(`admin: ${error.message}`);
      }
    }
  };

  const tokenize = (input) => {
    const matches = input.match(/(?:[^\s"]+|"[^"]*")+/g);
    if (!matches) return [];
    return matches.map((token) => token.replace(/^"|"$/g, ""));
  };

  const resolvePath = (input) => {
    if (!input || input === "~") return [];

    let parts = [];
    if (input.startsWith("~/")) {
      parts = input.slice(2).split("/");
    } else if (input.startsWith("/")) {
      parts = input.slice(1).split("/");
    } else {
      parts = [...cwd, ...input.split("/")];
    }

    const normalized = [];
    parts.filter(Boolean).forEach((part) => {
      if (part === ".") return;
      if (part === "..") {
        normalized.pop();
        return;
      }
      normalized.push(part);
    });

    return normalized;
  };

  const getNode = (path) => {
    let node = fs;
    for (const segment of path) {
      if (!node.children || !node.children[segment]) return null;
      node = node.children[segment];
    }
    return node;
  };

  const getParentNode = (path) => {
    if (!path.length) return null;
    const name = path[path.length - 1];
    const parent = getNode(path.slice(0, -1));
    if (!parent || parent.type !== "dir") return null;
    return { parent, name };
  };

  const resolveFriendlyName = (name) => {
    const node = getNode(cwd);
    if (!node || !node.children) return name;
    if (name === "live" && node.children["live.url"]) return "live.url";
    if (name === "github" && node.children["github.url"]) return "github.url";
    if (name === "resume" && node.children["resume.pdf"]) return "resume.pdf";
    if (name === "email" && node.children["email"]) return "email";
    if (name === "phone" && node.children["phone"]) return "phone";
    if (name === "readme" && node.children["README.md"]) return "README.md";
    return name;
  };

  const commandHandlers = {
    help() {
      const base = [
        "Available commands:",
        "help                 Show this help message",
        "ls [path]            List files and folders",
        "cd [path]            Change directory",
        "cat <file>           Show file content",
        "open <file|url>      Open a link in a new tab",
        "resume               Open resume link",
        "clear                Clear the terminal output",
        "pwd                  Show current path",
        "whoami               Print the user name",
        isLocalHost()
          ? "admin                Enter admin mode (hidden passphrase)"
          : "admin                Enter admin mode (backend login)"
      ];

      const tips = [
        "Tips:",
        "- Use Tab to autocomplete commands and paths.",
        "- Try: cd projects, ls, cat intro.txt, open live"
      ];

      if (adminState.unlocked) {
        const adminLines = [
          "Admin commands:",
          "mkdir <dir>          Create a directory",
          "touch <file>         Create an empty file",
          "write <file> <text>  Overwrite a file with text",
          "link <file> <url>    Create or update a link",
          "rm <file>            Remove a file or link",
          "rmdir <dir>          Remove an empty directory",
          "mkproject <name>     Create a project folder scaffold",
          "admin login <user>   Login for remote sync",
          "admin logout         Clear remote login",
          "admin api [set|clear] Configure API base URL",
          "admin pull           Pull filesystem from backend",
          "admin save [note]    Save filesystem to backend",
          "admin history        List recent backend versions",
          "admin rollback <id>  Roll back to a version",
          "admin export         Print current filesystem as JSON",
          "admin reset          Reset filesystem to defaults"
        ];

        if (isLocalHost()) {
          adminLines.push("admin set            Create or change local passphrase");
        }

        appendBlock(
          [
            ...base,
            "",
            ...adminLines,
            "",
            ...tips
          ].join("\n")
        );
        return;
      }

      appendBlock(
        [
          ...base,
          "",
          isLocalHost()
            ? "Admin mode unlocks extra commands. Run `admin` to unlock."
            : "Admin mode unlocks extra commands. Run `admin login <user>` to unlock.",
          "",
          ...tips
        ].join("\n")
      );
    },

    async admin(args) {
      const action = (args[0] || "").toLowerCase();

      if (action === "help") {
        const lines = [
          "Admin commands:",
          "admin                Unlock admin mode",
          "admin off            Disable admin mode",
          "admin status         Show admin status",
          "admin login <user>   Login for remote sync",
          "admin logout         Clear remote login",
          "admin api [set|clear] Configure API base URL",
          "admin pull           Pull filesystem from backend",
          "admin save [note]    Save filesystem to backend",
          "admin history        List recent backend versions",
          "admin rollback <id>  Roll back to a version",
          "admin export         Print filesystem JSON",
          "admin reset          Reset filesystem to defaults"
        ];
        if (isLocalHost()) {
          lines.splice(2, 0, "admin set            Create or change local passphrase");
        }
        appendBlock(lines.join("\n"));
        return;
      }

      if (action === "status") {
        appendLine(adminState.unlocked ? "Admin mode: ON" : "Admin mode: OFF");
        appendLine(
          isLocalHost()
            ? adminHash
              ? "Passphrase: set"
              : "Passphrase: not set"
            : "Local passphrase: disabled"
        );
        appendLine(
          hasRemote()
            ? `API base: ${getApiBase()}`
            : "API base: not set"
        );
        appendLine(
          remoteAuth.user
            ? `Remote login: ${remoteAuth.user}`
            : "Remote login: not set"
        );
        return;
      }

      if (action === "off") {
        adminState.unlocked = false;
        clearRemoteAuth();
        appendLine("Admin mode disabled.");
        return;
      }

      if (action === "logout") {
        clearRemoteAuth();
        adminState.unlocked = false;
        appendLine("Remote login cleared.");
        return;
      }

      if (action === "api") {
        if (!requireAdmin()) return;
        const sub = (args[1] || "").toLowerCase();
        if (sub === "set") {
          const url = args[2];
          if (!url) {
            printError("admin api set: missing URL");
            return;
          }
          setApiBase(url);
          appendLine(`API base set to ${url}`);
          return;
        }
        if (sub === "clear") {
          setApiBase("");
          appendLine("API base cleared.");
          return;
        }
        appendLine(hasRemote() ? `API base: ${getApiBase()}` : "API base: not set");
        return;
      }

      if (action === "login") {
        if (!hasRemote()) {
          printError("admin login: API base not set");
          return;
        }
        const user = args[1];
        if (!user) {
          printError("admin login: missing user");
          return;
        }
        adminState.temp = user;
        startSecretPrompt("Enter admin password:", "login-password");
        return;
      }

      if (action === "pull") {
        if (!requireAdmin()) return;
        if (!hasRemote()) {
          printError("admin pull: API base not set");
          return;
        }
        try {
          const response = await apiFetch("/api/fs");
          if (!response?.data) {
            printError("admin pull: no data returned");
            return;
          }
          fs = response.data;
          saveFS();
          appendLine("Pulled filesystem from backend.");
        } catch (error) {
          printError(`admin pull: ${error.message}`);
        }
        return;
      }

      if (action === "save") {
        if (!requireAdmin()) return;
        if (!hasRemote()) {
          printError("admin save: API base not set");
          return;
        }
        try {
          const note = args.slice(1).join(" ");
          await apiFetch("/api/admin/save", {
            method: "POST",
            authRequired: true,
            body: {
              data: fs,
              message: note || "Saved from terminal"
            }
          });
          appendLine("Saved filesystem to backend.");
        } catch (error) {
          printError(`admin save: ${error.message}`);
        }
        return;
      }

      if (action === "history") {
        if (!requireAdmin()) return;
        if (!hasRemote()) {
          printError("admin history: API base not set");
          return;
        }
        try {
          const response = await apiFetch("/api/admin/history", {
            authRequired: true
          });
          const items = response?.items || [];
          if (!items.length) {
            appendLine("No history available.");
            return;
          }
          appendBlock(
            items
              .map(
                (item) =>
                  `#${item.id} | ${item.created_at} | ${item.message || "Saved"}`
              )
              .join("\n")
          );
        } catch (error) {
          printError(`admin history: ${error.message}`);
        }
        return;
      }

      if (action === "rollback") {
        if (!requireAdmin()) return;
        if (!hasRemote()) {
          printError("admin rollback: API base not set");
          return;
        }
        const versionId = Number(args[1]);
        if (!Number.isInteger(versionId)) {
          printError("admin rollback: missing version id");
          return;
        }
        try {
          const response = await apiFetch("/api/admin/rollback", {
            method: "POST",
            authRequired: true,
            body: { id: versionId }
          });
          if (response?.data) {
            fs = response.data;
            saveFS();
          }
          appendLine(`Rolled back to version #${versionId}.`);
        } catch (error) {
          printError(`admin rollback: ${error.message}`);
        }
        return;
      }

      if (action === "export") {
        if (!requireAdmin()) return;
        appendBlock(JSON.stringify(fs, null, 2));
        return;
      }

      if (action === "reset") {
        if (!requireAdmin()) return;
        resetFS();
        appendLine("Filesystem reset to defaults.");
        return;
      }

      if (action === "set") {
        if (!isLocalHost()) {
          printError("admin: local passphrase disabled on production");
          return;
        }
        if (adminHash && !adminState.unlocked) {
          printError("admin: unlock first to change passphrase");
          return;
        }
        const mode = adminHash ? "change-passphrase" : "set-passphrase";
        const message = adminHash
          ? "Enter new admin passphrase:"
          : "Create admin passphrase:";
        startSecretPrompt(message, mode);
        return;
      }

      if (!adminHash) {
        appendLine(
          isLocalHost()
            ? "No admin passphrase set. Run `admin set` to create one."
            : "Run `admin login <user>` to unlock admin mode."
        );
        return;
      }

      if (adminState.unlocked) {
        appendLine("Admin mode already enabled.");
        return;
      }

      startSecretPrompt("Enter admin passphrase:", "enter-passphrase");
    },

    ls(args) {
      const target = args[0] ? resolvePath(args[0]) : [...cwd];
      const node = getNode(target);
      if (!node) {
        printError(`ls: no such file or directory: ${args[0]}`);
        return;
      }

      if (node.type !== "dir") {
        appendList([{ name: args[0], type: node.type }]);
        return;
      }

      const items = Object.entries(node.children).map(([name, child]) => ({
        name,
        type: child.type
      }));

      appendList(items);
    },

    cd(args) {
      const target = args[0] ? resolvePath(args[0]) : [];
      const node = getNode(target);
      if (!node) {
        printError(`cd: no such file or directory: ${args[0]}`);
        return;
      }
      if (node.type !== "dir") {
        printError(`cd: not a directory: ${args[0]}`);
        return;
      }
      cwd = target;
      updatePrompt();
    },

    cat(args) {
      if (!args[0]) {
        printError("cat: missing file name");
        return;
      }
      const name = resolveFriendlyName(args[0]);
      const target = resolvePath(name);
      const node = getNode(target);
      if (!node) {
        printError(`cat: no such file: ${args[0]}`);
        return;
      }
      if (node.type === "dir") {
        printError(`cat: ${args[0]}: is a directory`);
        return;
      }
      if (node.type === "link") {
        appendLine(`cat: ${args[0]}: is a link (use open ${args[0]})`);
        return;
      }
      appendBlock(node.content);
    },

    open(args) {
      if (!args[0]) {
        printError("open: missing target");
        return;
      }

      if (/^https?:\/\//.test(args[0])) {
        window.open(args[0], "_blank", "noopener");
        appendLine(`opened ${args[0]}`);
        return;
      }

      const name = resolveFriendlyName(args[0]);
      const target = resolvePath(name);
      const node = getNode(target);

      if (!node) {
        printError(`open: no such file: ${args[0]}`);
        return;
      }

      if (node.type !== "link") {
        printError(`open: ${args[0]} is not a link`);
        return;
      }

      if (!node.url) {
        printError(`open: ${args[0]} has no URL yet`);
        return;
      }

      window.open(node.url, "_blank", "noopener");
      appendLine(`opened ${node.url}`);
    },

    resume() {
      const target = ["intro", "resume.pdf"];
      const node = getNode(target);
      if (!node || node.type !== "link" || !node.url) {
        printError("resume: link not found");
        return;
      }
      window.open(node.url, "_blank", "noopener");
      appendLine("opened resume");
    },

    sudo(args) {
      const phrase = args.join(" ").toLowerCase();
      if (!phrase) {
        appendBlock(
          [
            "sudo commands:",
            "sudo do the harlem shake",
            "sudo spawn birds",
            "sudo rickroll",
            "sudo do a barrel roll",
            "sudo yeet",
            "sudo bonk",
            "sudo this is fine",
            "sudo nyan cat",
            "sudo doge",
            "sudo vibe",
            "sudo sus",
            "sudo shrek"
          ].join("\n")
        );
        return;
      }

    if (phrase === "do the harlem shake" || phrase === "harlem shake" || phrase === "do harlem shake") {
      appendLine("sudo: initiating harlem shake...");
      triggerHarlemShake();
      return;
    }

    if (phrase === "spawn birds") {
      appendLine("sudo: summoning birds...");
      spawnBirds();
      return;
    }

    if (phrase === "rickroll") {
      appendLine("sudo: never gonna give you up...");
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank", "noopener");
      return;
    }

    if (phrase === "do a barrel roll") {
      appendLine("sudo: barrel roll!");
      triggerBarrelRoll();
      return;
    }

    if (phrase === "yeet") {
      appendLine("sudo: yeet!");
      triggerYeet();
      return;
    }

    if (phrase === "bonk") {
      appendLine("sudo: bonk. go to horny jail.");
      triggerBonk();
      return;
    }

    if (phrase === "this is fine") {
      memeBlock([
        "this is fine.",
        " ( )  ( )",
        "(  ) (  )",
        "  fire everywhere"
      ]);
      triggerFire();
      return;
    }

    if (phrase === "nyan cat") {
      memeBlock([
        "nyan nyan nyan",
        " /\\_/\\\\",
        "( o.o )",
        " > ^ <"
      ]);
      return;
    }

    if (phrase === "doge") {
      memeBlock([
        "such code",
        "much terminal",
        "very portfolio",
        "wow"
      ]);
      return;
    }

    if (phrase === "vibe") {
      appendLine("sudo: entering vibe mode...");
      toggleVibe();
      return;
    }

    if (phrase === "sus") {
      memeBlock([
        "red is sus",
        "emergency meeting!"
      ]);
      return;
    }

    if (phrase === "shrek") {
      memeBlock([
        "someBODY once told me...",
        "the world is gonna roll me"
      ]);
      return;
    }

    printError("sudo: command not recognized");
  },

    mkdir(args) {
      if (!requireAdmin()) return;
      if (!args[0]) {
        printError("mkdir: missing directory name");
        return;
      }

      const target = resolvePath(args[0]);
      const data = getParentNode(target);
      if (!data) {
        printError(`mkdir: invalid path: ${args[0]}`);
        return;
      }

      const { parent, name } = data;
      if (parent.children[name]) {
        printError(`mkdir: ${args[0]} already exists`);
        return;
      }

      parent.children[name] = { type: "dir", children: {} };
      saveFS();
      appendLine(`created ${name}/`);
    },

    touch(args) {
      if (!requireAdmin()) return;
      if (!args[0]) {
        printError("touch: missing file name");
        return;
      }

      const target = resolvePath(args[0]);
      const data = getParentNode(target);
      if (!data) {
        printError(`touch: invalid path: ${args[0]}`);
        return;
      }

      const { parent, name } = data;
      if (parent.children[name] && parent.children[name].type === "dir") {
        printError(`touch: ${args[0]} is a directory`);
        return;
      }

      parent.children[name] = file(parent.children[name]?.content || "");
      saveFS();
      appendLine(`updated ${name}`);
    },

    write(args) {
      if (!requireAdmin()) return;
      if (!args[0]) {
        printError("write: missing file name");
        return;
      }

      const content = args.slice(1).join(" ").replace(/\\n/g, "\n");
      if (!content) {
        printError("write: missing content");
        return;
      }

      const target = resolvePath(args[0]);
      const data = getParentNode(target);
      if (!data) {
        printError(`write: invalid path: ${args[0]}`);
        return;
      }

      const { parent, name } = data;
      if (parent.children[name] && parent.children[name].type === "dir") {
        printError(`write: ${args[0]} is a directory`);
        return;
      }

      parent.children[name] = file(content);
      saveFS();
      appendLine(`wrote ${name}`);
    },

    link(args) {
      if (!requireAdmin()) return;
      if (!args[0] || !args[1]) {
        printError("link: usage: link <file> <url>");
        return;
      }

      const target = resolvePath(args[0]);
      const data = getParentNode(target);
      if (!data) {
        printError(`link: invalid path: ${args[0]}`);
        return;
      }

      const { parent, name } = data;
      parent.children[name] = link(args[1]);
      saveFS();
      appendLine(`linked ${name} -> ${args[1]}`);
    },

    rm(args) {
      if (!requireAdmin()) return;
      if (!args[0]) {
        printError("rm: missing target");
        return;
      }

      const target = resolvePath(args[0]);
      const data = getParentNode(target);
      if (!data) {
        printError(`rm: invalid path: ${args[0]}`);
        return;
      }

      const { parent, name } = data;
      const node = parent.children[name];
      if (!node) {
        printError(`rm: no such file: ${args[0]}`);
        return;
      }

      if (node.type === "dir") {
        printError(`rm: ${args[0]} is a directory (use rmdir)`);
        return;
      }

      delete parent.children[name];
      saveFS();
      appendLine(`removed ${name}`);
    },

    rmdir(args) {
      if (!requireAdmin()) return;
      if (!args[0]) {
        printError("rmdir: missing directory name");
        return;
      }

      const target = resolvePath(args[0]);
      const data = getParentNode(target);
      if (!data) {
        printError(`rmdir: invalid path: ${args[0]}`);
        return;
      }

      const { parent, name } = data;
      const node = parent.children[name];
      if (!node) {
        printError(`rmdir: no such directory: ${args[0]}`);
        return;
      }

      if (node.type !== "dir") {
        printError(`rmdir: ${args[0]} is not a directory`);
        return;
      }

      if (Object.keys(node.children || {}).length > 0) {
        printError(`rmdir: ${args[0]} is not empty`);
        return;
      }

      delete parent.children[name];
      saveFS();
      appendLine(`removed ${name}/`);
    },

    mkproject(args) {
      if (!requireAdmin()) return;
      if (!args[0]) {
        printError("mkproject: missing project name");
        return;
      }

      const slug = args[0];
      const parent = getNode(cwd);
      if (!parent || parent.type !== "dir") {
        printError("mkproject: invalid working directory");
        return;
      }

      if (parent.children[slug]) {
        printError(`mkproject: ${slug} already exists`);
        return;
      }

      parent.children[slug] = {
        type: "dir",
        children: {
          "intro.txt": file(""),
          "live.url": link(""),
          "github.url": link(""),
          "README.md": file("")
        }
      };

      saveFS();
      appendLine(`created ${slug}/`);
      if (pathToString(cwd) !== "~/projects") {
        appendLine("note: mkproject is usually used inside ~/projects");
      }
    },

    clear() {
      outputEl.innerHTML = "";
    },

    pwd() {
      appendLine(pathToString(cwd));
    },

    whoami() {
      appendLine(USER);
    }
  };

  const executeCommand = async (rawInput) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    appendCommand(trimmed);

    const tokens = tokenize(trimmed);
    const cmd = tokens[0].toLowerCase();
    const args = tokens.slice(1);

    if (aliases[cmd]) {
      const alias = aliases[cmd];
      await commandHandlers[alias.cmd](alias.args);
      return;
    }

    const handler = commandHandlers[cmd];
    if (!handler) {
      printError(`${cmd}: command not found`);
      return;
    }

    await handler(args);
  };

  const getCompletionContext = (fragment) => {
    let basePath = "";
    let prefix = fragment;

    if (fragment.includes("/")) {
      const parts = fragment.split("/");
      prefix = parts.pop() || "";
      basePath = parts.join("/");
    }

    const resolvedBase = basePath ? resolvePath(basePath) : [...cwd];
    const baseNode = getNode(resolvedBase);
    if (!baseNode || baseNode.type !== "dir") return null;

    const matches = Object.keys(baseNode.children).filter((name) =>
      name.startsWith(prefix)
    );

    return { basePath, prefix, matches, baseNode };
  };

  const renderSuggestions = (items) => {
    suggestionEl.innerHTML = "";
    if (!items.length) {
      suggestionEl.classList.add("is-hidden");
      return;
    }

    const maxItems = 8;
    items.slice(0, maxItems).forEach((item) => {
      const span = document.createElement("span");
      span.className = `item item--${item.type}`;
      span.textContent = item.type === "dir" ? `${item.name}/` : item.name;
      suggestionEl.appendChild(span);
    });

    suggestionEl.classList.remove("is-hidden");
  };

  const updateSuggestions = () => {
    if (adminState.awaiting) {
      renderSuggestions([]);
      return;
    }

    const value = inputEl.value;
    if (!value.trim()) {
      renderSuggestions([]);
      return;
    }

    const tokens = tokenize(value);
    const hasTrailingSpace = value.endsWith(" ");

    if (tokens.length === 1 && !value.includes(" ")) {
      const matches = commandList.filter((command) =>
        command.startsWith(tokens[0])
      );
      renderSuggestions(matches.map((name) => ({ name, type: "file" })));
      return;
    }

    const fragment = hasTrailingSpace ? "" : tokens[tokens.length - 1];
    const context = getCompletionContext(fragment);
    if (!context) {
      renderSuggestions([]);
      return;
    }

    const { matches, baseNode } = context;
    const items = matches.map((name) => ({
      name,
      type: baseNode.children[name].type
    }));
    renderSuggestions(items);
  };

  const completeInput = () => {
    if (adminState.awaiting) {
      renderSuggestions([]);
      return;
    }

    const value = inputEl.value;
    const tokens = tokenize(value);
    const hasTrailingSpace = value.endsWith(" ");

    if (tokens.length === 0) {
      appendList(commandList.map((name) => ({ name, type: "file" })));
      return;
    }

    if (tokens.length === 1 && !hasTrailingSpace) {
      const matches = commandList.filter((command) => command.startsWith(tokens[0]));
      if (matches.length === 1) {
        inputEl.value = matches[0];
        return;
      }
      appendList(matches.map((name) => ({ name, type: "file" })));
      return;
    }

    const fragment = hasTrailingSpace ? "" : tokens[tokens.length - 1];
    const context = getCompletionContext(fragment);
    if (!context) return;

    const { basePath, matches, baseNode } = context;

    if (matches.length === 1) {
      const completed = basePath ? `${basePath}/${matches[0]}` : matches[0];
      if (hasTrailingSpace) {
        inputEl.value = `${tokens.join(" ")}${completed}`;
      } else {
        tokens[tokens.length - 1] = completed;
        inputEl.value = tokens.join(" ");
      }
      return;
    }

    if (matches.length > 1) {
      appendList(
        matches.map((name) => ({
          name,
          type: baseNode.children[name].type
        }))
      );
    }
  };

  inputEl.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      const value = inputEl.value;

      if (adminState.awaiting) {
        inputEl.value = "";
        await handleSecretInput(value);
        updateSuggestions();
        return;
      }

      if (value.trim().length > 0) {
        history.push(value);
        historyIndex = history.length;
      }
      await executeCommand(value);
      inputEl.value = "";
      updateSuggestions();
      return;
    }

    if (event.key === "ArrowUp") {
      if (history.length === 0) return;
      historyIndex = Math.max(0, historyIndex - 1);
      inputEl.value = history[historyIndex] || "";
      event.preventDefault();
      return;
    }

    if (event.key === "ArrowDown") {
      if (history.length === 0) return;
      historyIndex = Math.min(history.length, historyIndex + 1);
      inputEl.value = history[historyIndex] || "";
      event.preventDefault();
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      completeInput();
      return;
    }

    if (event.key.toLowerCase() === "l" && event.ctrlKey) {
      event.preventDefault();
      commandHandlers.clear();
      return;
    }
  });

  inputEl.addEventListener("input", () => {
    updateSuggestions();
  });

  terminalBody.addEventListener("click", () => {
    inputEl.focus();
  });

  if (minimizeButton) {
    minimizeButton.addEventListener("click", () => {
      toggleAnts();
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      triggerAlert();
    });
  }

  if (maximizeButton) {
    maximizeButton.addEventListener("click", () => {
      toggleFocusMode();
    });
  }

  updatePrompt();
  updateSuggestions();
  syncFromRemote();
  inputEl.focus();
})();
