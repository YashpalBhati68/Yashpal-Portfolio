/* ============ LOADER (pehle register hota hai, taaki koi error aaye tab bhi page khul jaye) ============ */
(() => {
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    document.getElementById("loader")?.classList.add("done");
    document.body.classList.add("ready");
  };
  addEventListener("load", () => setTimeout(finish, 900));
  setTimeout(finish, 3500); // load event atak jaye to bhi 3.5s mein khul jaye
})();

/* ============ EDIT YOUR CONTENT HERE ============ */
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzFxNeNF6QJME9NozPZg4bhpVIKS-JC2NMN3pfJvnpwA-ecTCFIVTuZYZ9hnvp4pH0CWQ/exec";
const INTRO_VIDEO = "assets/intro.mp4"; // loads only when the intro button is clicked
const ROLES = [
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "Software Engineer",
];
const CERT_LIMIT = 6; // pehle itne certificates dikhenge, baaki "Show more" ke baad

const SKILLS = {
  Backend: [
    ["devicon-java-plain colored", "Java"],
    ["devicon-spring-original colored", "Spring Boot"],
    ["fa-solid fa-layer-group", "Spring MVC"],
    ["fa-solid fa-shield-halved", "Spring Security"],
    ["devicon-hibernate-plain colored", "Hibernate / JPA"],
    ["devicon-nodejs-plain colored", "Node.js"],
    ["devicon-express-original", "Express.js"],
    ["fa-solid fa-plug", "REST APIs"],
    ["fa-solid fa-key", "JWT Auth"],
  ],
  Frontend: [
    ["devicon-react-original colored", "React.js"],
    ["devicon-redux-original colored", "Redux Toolkit"],
    ["devicon-javascript-plain colored", "JavaScript ES6+"],
    ["devicon-html5-plain colored", "HTML5"],
    ["devicon-css3-plain colored", "CSS3"],
    ["devicon-tailwindcss-original colored", "Tailwind CSS"],
    ["devicon-bootstrap-plain colored", "Bootstrap"],
  ],
  Databases: [
    ["devicon-mysql-original colored", "MySQL"],
    ["devicon-mongodb-plain colored", "MongoDB"],
  ],
  Tools: [
    ["devicon-git-plain colored", "Git"],
    ["devicon-github-original", "GitHub"],
    ["devicon-postman-plain colored", "Postman"],
    ["devicon-maven-plain colored", "Maven"],
  ],
};

const JOURNEY = [
  {
    when: "12/2025 to 10/2026",
    kind: "Experience",
    title: "Java Developer Intern",
    where: "Grass Solutions Private Limited",
    pts: [
      "Completed a Java full stack internship covering Spring Boot, Spring MVC, Spring Security, Hibernate/JPA, Microservices, React.js, MySQL, and MongoDB, and delivered 2+ full-stack projects.",
      "Built a layered Spring Boot backend (controller, service, repository) secured with JWT and role-based access control in Spring Security, protecting 15+ REST endpoints across 3 roles",
      "Designed relational schemas with JPA/Hibernate covering 8+ entities, and tested the APIs with Postman collections to keep HTTP status codes consistent and the API design clean",
      "Handled the full development lifecycle of both projects: designed a database schema with 20+ entities/tables, developed the APIs, integrated React.js, tested with Postman, debugged, and managed code with Git/GitHub.",
    ],
  },
  {
    when: "06/2025 to 07/2025",
    kind: "Experience",
    title: "React Developer Intern",
    where: "Grass Solutions Private Limited",
    pts: [
      "Completed a hands-on internship with React.js. During the internship we used Hooks, Context API, React Router and Redux Toolkit to build 4+ fully functional web applications.",
      "Built 18+ reusable components with Hooks and custom hooks, with routing across 7 pages.",
      "Centralized state with Redux Toolkit across 5 modules and added form validation.",
    ],
  },
  {
    when: "2025",
    kind: "Training",
    title: "MERN Stack Web Development",
    where: "Apna College",
    pts: [
      "Completed hands-on training in MongoDB, Express.js, React.js, and Node.js, building 3+ full-stack projects with React.js for frontend and Node.js, Express.js, and MongoDB for backend/database development.",
      "Built and integrated 10+ REST API endpoints for CRUD operations, authentication, database integration, and API integration, while developing responsive UIs, debugging applications, and strengthening end-to-end development skills.",
      "Managed Git/GitHub version control across 3+ projects and worked on debugging, API integration, and application deployment, maintaining an efficient development workflow.",
    ],
  },
  {
    when: "2024",
    kind: "Experience",
    title: "Web Development Intern",
    where: "SingleTap, Jaipur",
    pts: [
      "Worked with HTML, CSS and JavaScript and received the Intern of the Batch award.",
    ],
  },
  {
    when: "2023 to 2027",
    kind: "Education",
    title: "B.Tech, Computer Science & Engineering",
    where: "Global Institute of Technology (RTU, Kota)",
    pts: ["CGPA: 8.29"],
  },
];

const PROJECTS = [
  {
    name: "QuickBuy",
    sub: "Multi-vendor e-commerce",
    icon: "fa-cart-shopping",
    c: ["#7c3aed", "#2563eb"],
    repo: "QuickBuy",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "React + TypeScript",
      "Redux Toolkit",
      "MySQL",
    ],
    desc: "A multi-vendor marketplace with Customer, Seller and Admin roles.",
    pts: [
      "Built a multi-vendor marketplace with Customer, Seller, and Admin roles, JWT security, and email OTP verification, using a JPA/Hibernate data model with 15+ entities.",
      "Developed 15+ REST APIs for product search (with filters, sorting, and pagination), cart, wishlist, coupons, orders, and reviews. Also built seller dashboards with daily, weekly, and 12-month earnings charts, and admin controls for approving sellers",
      "Integrated two payment gateways, Razorpay and Stripe, to support domestic and international checkout. Also added an AI chatbot that answers order, cart, and product questions in real time.",
    ],
  },
  {
    name: "FinTrust",
    sub: "Smart banking and payments",
    icon: "fa-building-columns",
    c: ["#0f766e", "#0ea5e9"],
    repo: "Smart-Banking-Payment-Platform",
    tags: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "React",
      "MySQL",
      "Swagger",
    ],
    desc: "A full-stack banking platform with account and beneficiary management.",
    pts: [
      "Built a full-stack banking platform with JWT authentication, account and beneficiary management, and 12 Swagger documented REST APIs using a 5-table MySQL schema",
      "Developed 2 transfer modes, RTGS (instant) and NEFT (scheduler-driven batch), with ACID transactions, idempotency checks to prevent double debits, and fraud rules for daily limits and duplicate detection.",
      "Added audit logging, centralized exception handling with proper HTTP status codes, and paginated transaction history with status tracking across 4+ states.",
    ],
  },
  {
    name: "Fenvo",
    sub: "Stock trading platform",
    icon: "fa-chart-line",
    c: ["#b45309", "#dc2626"],
    repo: "Fenvo-Stock-Trading-platform",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    desc: "A stock trading platform built with JavaScript.",
    pts: [
      "Built a full-stack stock trading platform with 2 interfaces (Landing Page, Dashboard) using React.js, Node.js, Express.js, MongoDB, covering 6+ modules: Watchlist, Holdings, Orders, Funds, Trading, and Portfolio/P&L",
      "Load-tested REST APIs with 100 concurrent VUs using k6, processing 3,930 requests at 129.33 req/s over 30s, achieving 766 ms avg latency, 1.03 s P95 latency, 0% failures, and 100% successful checks.",
      "Achieved 87/100 Lighthouse Performance (0.6 s FCP, 1.5 s LCP, 80 ms TBT) and secured user-specific trading, portfolio, and orders using JWT authentication/authorization, protected routes, session state, and MongoDB/Mongoose persistence.",
    ],
  },
  {
    name: "Airbnb Project",
    sub: "Property listing app",
    icon: "fa-house",
    c: ["#be185d", "#f97316"],
    repo: "AirBnb-Project",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Mapbox",
    ],
    desc: "An Airbnb-style property listing application built with JavaScript.",
    pts: [
      "Built a full-stack rental marketplace using Node.js, Express.js, MongoDB/Mongoose, EJS, JavaScript, with listing CRUD, authentication, reviews, image uploads, and location-based features.",
      "Load-tested APIs with 50 concurrent VUs using k6, handling 686 requests at 21.59 req/s over 30s, with 2.27s avg latency, 4.20s P95 latency, and 0% failures; managed 1,780+ MongoDB documents via Atlas/Mongoose, indexed access, and persistent sessions.",
      "Achieved 90/100 Lighthouse Performance (1.1s FCP, 1.4s LCP, 0ms TBT, 0 CLS, 2.1s Speed Index), secured listings/reviews with Passport.js, session authentication, login & ownership checks, and integrated Cloudinary, Mapbox, middleware validation, and error handling",
    ],
  },
  {
    name: "Institute Management",
    sub: "Spring MVC application",
    icon: "fa-school",
    c: ["#1d4ed8", "#4f46e5"],
    repo: "Institute-Management-System-using-Spring-MVC",
    tags: ["Java", "Spring MVC", "Hibernate", "MySQL"],
    desc: "An institute management system built with Spring MVC.",
    pts: [
      "Developed the application using the Spring MVC architecture, separating request handling, application logic and presentation.",
      "Used Spring MVC controllers to handle HTTP requests and process user-submitted data.",
      "Managed application data through model objects and integrated views for dynamic web-page rendering.",
      "Structured the application to support centralized management of institute-related records.",
      "Used Maven for project configuration and dependency management.",
    ],
  },
  {
    name: "Online Course Management",
    sub: "Hibernate based",
    icon: "fa-graduation-cap",
    c: ["#15803d", "#65a30d"],
    repo: "Online-Course-Management-System",
    tags: ["Java", "Hibernate"],
    desc: "An online course management system built on Hibernate.",
    pts: [
      "Developed a Java-based Online Course Management System for organizing course-related information.",
      "Integrated Hibernate ORM to manage interactions between Java objects and MySQL database tables.",
      "Configured database connectivity and ORM mapping for structured data management.",
      "Used Maven for dependency management and SLF4J for application logging.",
    ],
  },
];

// Certificate images: "certificate" folder index.html ke saath rakho.
// Path ke shuru mein "/" nahi lagana (nahi to file:// ya subfolder par image nahi milegi).
// Image na mile to neeche wala icon dikhega.
const CERTS = [
  {
    title: "AI Tools & Claude Workshop",
    by: "Be10x",
    date: "October 2026",
    img: "certificate/AI_Tools%26Claude_Workshop.png", // %26 = & (file name mein & hai)
    icon: "fa-solid fa-robot",
  },
  {
    title: "Frontend Developer (React)",
    by: "HackerRank",
    date: "June 2026",
    img: "certificate/HackerRank_Certificate.jpeg",
    icon: "fa-brands fa-react",
  },
  {
    title: "SQL and Relational Databases",
    by: "Cognitive Class",
    date: "June 2026",
    img: "certificate/SQL_and_Relational_Databases_101.jpeg",
    icon: "fa-solid fa-database",
  },
  {
    title: "MERN Certificate",
    by: "Apna College",
    date: "May 2025",
    img: "certificate/MERN_Certificate.png",
    icon: "fa-solid fa-code",
  },
  {
    title: "Web Development",
    by: "SingleTap",
    date: "August 2024",
    img: "certificate/Web_Development_Certificate_SingleTap.png",
    icon: "fa-solid fa-globe",
  },
  {
    title: "Intern of the Batch Award",
    by: "SingleTap",
    date: "August 2024",
    img: "certificate/Intern_Of_Batch_Certificate.png",
    icon: "fa-solid fa-award",
  },
  {
    title: "Java Certificate",
    by: "GyanTeerth",
    date: "July 2024",
    img: "certificate/Java_Certificate.png",
    icon: "fa-brands fa-java",
  },
];

/* ============ HELPERS ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const GH = "https://github.com/YashpalBhati68/";

/* ============ RENDER ============ */
$("#skillGrid").innerHTML = Object.entries(SKILLS)
  .map(
    ([g, items]) =>
      `<div class="card rv"><h3>${g}</h3><div class="chips">${items.map(([i, n]) => `<span class="chip"><i class="${i}"></i>${n}</span>`).join("")}</div></div>`,
  )
  .join("");

$("#timeline").insertAdjacentHTML(
  "beforeend",
  JOURNEY.map(
    (j) =>
      `<div class="tl-item rv"><div class="card"><small>${j.when} · ${j.kind}</small><h3>${j.title}</h3><h4>${j.where}</h4><ul>${j.pts.map((p) => `<li>${p}</li>`).join("")}</ul></div></div>`,
  ).join(""),
);

$("#projGrid").innerHTML = PROJECTS.map(
  (p, i) =>
    `<article class="card proj rv" data-i="${i}" tabindex="0" role="button" aria-label="Open ${p.name}">
    <div class="proj-art-w"><div class="proj-art" style="--c1:${p.c[0]};--c2:${p.c[1]}"><i class="fa-solid ${p.icon}"></i></div></div>
    <div class="proj-body"><h3>${p.name}</h3><p>${p.sub}</p><div class="tags">${p.tags
      .slice(0, 4)
      .map((t) => `<span>${t}</span>`)
      .join("")}</div></div></article>`,
).join("");

$("#certGrid").innerHTML = CERTS.map(
  (c, i) =>
    `<article class="card cert rv${i >= CERT_LIMIT ? " cert-extra" : ""}" data-i="${i}" tabindex="0" role="button" aria-label="View ${c.title}">
    <div class="cert-img"><img src="${c.img}" alt="${c.title} certificate" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('i'),{className:'${c.icon}'}))"></div>
    <div class="cert-body"><h3>${c.title}</h3><p>${c.by} · ${c.date}</p></div></article>`,
).join("");

/* ---- Certificates: Show more / Show less ---- */
const certMore = $("#certMore"),
  certExtras = $$(".cert-extra");
if (certMore && certExtras.length) {
  certMore.hidden = false;
  certMore.onclick = () => {
    const open = certMore.classList.toggle("open");
    certExtras.forEach((c, k) =>
      open
        ? (c.classList.add("show"),
          setTimeout(() => c.classList.add("in"), 80 * k))
        : c.classList.remove("show", "in"),
    );
    certMore.textContent = open ? "Show less" : "Show more";
    if (!open) $("#certificates").scrollIntoView({ behavior: "smooth" });
  };
} else {
  // button HTML mein nahi hai to saare certificates dikha do (page na toote)
  certExtras.forEach((c) => c.classList.remove("cert-extra"));
}

/* ============ MODAL ============ */
const modal = $("#modal"),
  box = $("#modalBox");
function openModal(html, afterOpen) {
  box.innerHTML = html;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  afterOpen && afterOpen();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  setTimeout(() => {
    box.innerHTML = "";
  }, 350); // removing the <video> also stops its download
}
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
$("#modalX").onclick = closeModal;
addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Intro video: nothing is downloaded until this click
$("#introBtn").onclick = () =>
  openModal(
    `<video id="introVideo" controls playsinline preload="none"></video>`,
    () => {
      const v = $("#introVideo");
      v.src = INTRO_VIDEO;
      v.play().catch(() => {});
    },
  );

const openProject = (i) => {
  const p = PROJECTS[i];
  openModal(`<div class="proj-art" style="--c1:${p.c[0]};--c2:${p.c[1]};height:200px"><i class="fa-solid ${p.icon}"></i></div>
  <div class="m-info"><h3>${p.name}</h3><p>${p.desc}</p>${p.pts.length ? `<ul>${p.pts.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}
  <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
  <div class="btns"><a class="btn gold" href="${GH + p.repo}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> View code</a></div></div>`);
};
const openCert = (i) => {
  const c = CERTS[i];
  openModal(
    `<img src="${c.img}" alt="${c.title}" onerror="this.outerHTML='<div class=m-info><h3>${c.title}</h3><p>${c.by} · ${c.date}</p><p>Add the certificate image at ${c.img} to show it here.</p></div>'">`,
  );
};
const bindOpen = (sel, fn) =>
  $$(sel).forEach((el) => {
    const go = () => fn(+el.dataset.i);
    el.onclick = go;
    el.onkeydown = (e) =>
      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), go());
  });
bindOpen(".proj", openProject);
bindOpen(".cert", openCert);

/* ============ TYPED ROLES ============ */
(() => {
  const el = $("#typed");
  let r = 0,
    c = 0,
    del = false;
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  if (reduce) {
    el.textContent = ROLES[0];
    return;
  }
  (function tick() {
    const w = ROLES[r];
    el.textContent = w.slice(0, (c += del ? -1 : 1));
    let d = del ? 40 : 90;
    if (!del && c === w.length) {
      del = true;
      d = 1400;
    } else if (del && c === 0) {
      del = false;
      r = (r + 1) % ROLES.length;
      d = 350;
    }
    setTimeout(tick, d);
  })();
})();

/* ============ REVEAL, COUNTERS, TIMELINE ============ */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
      if (e.target.querySelector("[data-n]"))
        $$("[data-n]", e.target).forEach(countUp);
    }),
  { threshold: 0.15 },
);
$$(".rv").forEach((el) => io.observe(el));

function countUp(el) {
  const to = +el.dataset.n,
    d = +el.dataset.d || 0,
    t0 = performance.now();
  (function f(t) {
    const k = Math.min((t - t0) / 1200, 1);
    el.textContent =
      (to * (1 - Math.pow(1 - k, 3))).toFixed(d) + (el.dataset.s || "");
    k < 1 && requestAnimationFrame(f);
  })(t0);
}

/* ============ SCROLL: progress, nav, timeline line ============ */
const tl = $("#timeline"),
  fill = $("#tlFill"),
  navEl = $("nav");
function onScroll() {
  const h = document.documentElement,
    y = scrollY;
  $("#progress").style.width = (y / (h.scrollHeight - innerHeight)) * 100 + "%";
  navEl.classList.toggle("solid", y > 40);
  const r = tl.getBoundingClientRect();
  fill.style.height =
    Math.max(0, Math.min(r.height, innerHeight * 0.6 - r.top)) + "px";
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

const navIo = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        $$("#navLinks a").forEach((a) =>
          a.classList.toggle(
            "on",
            a.getAttribute("href") === "#" + e.target.id,
          ),
        );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
$$("section").forEach((s) => navIo.observe(s));

$("#burger").onclick = () => $("#navLinks").classList.toggle("open");
$$("#navLinks a").forEach(
  (a) => (a.onclick = () => $("#navLinks").classList.remove("open")),
);

/* ============ CARD SPOTLIGHT + MAGNETIC BUTTONS ============ */
$$(".card").forEach((c) =>
  c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  }),
);
if (matchMedia("(pointer:fine)").matches)
  $$(".magnetic").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener("pointerleave", () => (b.style.transform = ""));
  });

/* ============ SMOOTH CIRCLE CURSOR ============ */
if (matchMedia("(pointer:fine)").matches) {
  const ring = $(".cur-ring"),
    dot = $(".cur-dot");
  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;
  document.body.classList.add("cur-on");
  addEventListener("pointermove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
  });
  (function loop() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("pointerover", (e) =>
    ring.classList.toggle(
      "hov",
      !!e.target.closest("a,button,.proj,.cert,input,textarea"),
    ),
  );
  addEventListener("pointerdown", (e) => {
    ring.classList.add("press");
    const r = document.createElement("span");
    r.className = "ripple";
    r.style.left = e.clientX + "px";
    r.style.top = e.clientY + "px";
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 600);
  });
  addEventListener("pointerup", () => ring.classList.remove("press"));
}

/* ============ HERO VIDEO: pause on low-data / reduced motion / when off-screen ============ */
(() => {
  const v = $("#heroVideo"),
    save = navigator.connection && navigator.connection.saveData;
  if (save || matchMedia("(prefers-reduced-motion:reduce)").matches) {
    v.removeAttribute("autoplay");
    v.pause();
    v.removeAttribute("src");
    v.load();
    return;
  }
  new IntersectionObserver(([e]) =>
    e.isIntersecting ? v.play().catch(() => {}) : v.pause(),
  ).observe(v);
})();

/* ============ CONTACT FORM ============ */
$("#contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = e.target,
    b = $("button", f),
    s = $("#formStatus"),
    label = b.textContent;
  b.disabled = true;
  b.textContent = "Sending...";
  s.textContent = "";
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name: f.name.value,
        email: f.email.value,
        subject: f.subject.value,
        message: f.message.value,
        date: new Date().toLocaleString(),
      }),
    });
    s.textContent = "Message sent. I'll reply soon.";
    f.reset();
  } catch {
    s.textContent = "Could not send. Please email me directly.";
  }
  b.disabled = false;
  b.textContent = label;
});
