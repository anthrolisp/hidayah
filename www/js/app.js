// ============================================================
//  app.js — renders content.js into the DOM and wires up
//  theme (OS-aware + remembered), font size (remembered),
//  and the translit/arabic/english tabs.
// ============================================================
import { meta, sections } from "./content.js";

const FIG = (name) => `assets/figures/${name}.png`;

// ---------- tiny DOM helper ----------
function el(tag, attrs = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v;
    else if (k === "html") n.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined) n.setAttribute(k, v);
  }
  for (const kid of kids) if (kid != null) n.append(kid);
  return n;
}

// ---------- render: header + nav ----------
function renderChrome() {
  document.getElementById("kicker").textContent = meta.kicker;
  document.getElementById("title").textContent = meta.title;
  document.getElementById("tagline").textContent = meta.tagline;
  document.getElementById("footer-text").innerHTML = meta.footer;

  const nav = document.getElementById("nav");
  sections.forEach((s) => nav.append(el("a", { href: `#${s.id}` }, s.nav)));
}

// ---------- render: note blocks ----------
function note(n) {
  return el("div", { class: `note ${n.kind === "warn" ? "warn" : ""}`, html: n.html });
}

// ---------- render: a figure (single or pair) ----------
function figureEl(move) {
  if (move.figurePair) {
    const pair = el("div", { class: "figure pair" });
    move.figurePair.forEach((f) => {
      const pose = el("div", { class: "pose" });
      pose.style.webkitMaskImage = `url(${FIG(f.src)})`;
      pose.style.maskImage = `url(${FIG(f.src)})`;
      pair.append(el("div", { class: "fwrap" },
        el("div", { class: "figure" }, pose),
        el("figcaption", {}, f.caption)
      ));
    });
    return pair;
  }
  const box = el("div", { class: "figure" });
  if (move.figure) {
    const pose = el("div", { class: "pose" });
    pose.style.webkitMaskImage = `url(${FIG(move.figure)})`;
    pose.style.maskImage = `url(${FIG(move.figure)})`;
    box.append(pose);
  }
  return box;
}

// ---------- render: one move card ----------
function moveCard(move) {
  const head = el("div", { class: "move-head" },
    el("h4", {}, `${move.n} · ${move.title}`),
    el("div", { class: "pos" }, move.pos),
    move.reps ? el("span", { class: "reps" }, move.reps) : null
  );
  const top = el("div", { class: "move-top" }, figureEl(move), head);

  const card = el("div", { class: "move" }, top);

  // language tabs/panes only when the step has something recited
  if (move.translit || move.arabic || move.english) {
    const panes = {
      translit: el("div", { class: "pane translit show", html: move.translit }),
      arabic: el("div", { class: "pane arabic", lang: "ar", dir: "rtl", html: move.arabic }),
      english: el("div", { class: "pane english", html: move.english })
    };

    const tabs = el("div", { class: "tabs" });
    const labels = { translit: "Translit", arabic: "العربية", english: "English" };
    Object.keys(labels).forEach((key, i) => {
      const btn = el("button", {
        class: i === 0 ? "active" : "",
        type: "button",
        "aria-pressed": i === 0 ? "true" : "false",
        onclick: () => {
          tabs.querySelectorAll("button").forEach((b) => {
            b.classList.remove("active"); b.setAttribute("aria-pressed", "false");
          });
          btn.classList.add("active"); btn.setAttribute("aria-pressed", "true");
          Object.values(panes).forEach((p) => p.classList.remove("show"));
          panes[key].classList.add("show");
        }
      }, labels[key]);
      tabs.append(btn);
    });

    card.append(tabs, panes.translit, panes.arabic, panes.english);
  }

  if (move.doing) card.append(el("div", { class: "doing", html: move.doing }));
  return card;
}

// ---------- render: sections by type ----------
function renderSections() {
  const main = document.getElementById("main");

  sections.forEach((s) => {
    const sec = el("section", { id: s.id });
    sec.append(el("div", { class: "section-head" },
      el("span", { class: "num" }, s.num),
      el("div", {},
        el("h2", {}, s.title),
        el("span", { class: "sub" }, s.sub)
      )
    ));
    if (s.lede) sec.append(el("p", { class: "lede", html: s.lede }));

    if (s.type === "steps") {
      const wrap = el("div", { class: "steps" });
      s.steps.forEach((st) => {
        const tag = st.tag ? el("span", { class: `tag ${st.tag.kind}` }, st.tag.text) : null;
        wrap.append(el("div", { class: "step" },
          el("div", { class: "dot" }, String(st.n)),
          el("div", { class: "body" },
            el("h4", {}, st.title, tag),
            el("p", { html: st.body })
          )
        ));
      });
      sec.append(wrap);
    }

    if (s.type === "prayers") {
      const grid = el("div", { class: "rakah-grid" });
      s.prayers.forEach((p) => {
        grid.append(el("div", { class: "prayer-card" },
          el("div", { class: "name" }, p.name, el("span", {}, p.arabicLabel)),
          el("div", { class: "when" }, p.when),
          el("div", { class: "rakah-num", html: `${p.rakah}<br><small>rak'ah</small>` })
        ));
      });
      sec.append(grid);
    }

    if (s.type === "moves") {
      s.moves.forEach((m) => sec.append(moveCard(m)));
    }

    (s.notes || []).forEach((n) => sec.append(note(n)));
    if (s.closingNote) sec.append(note(s.closingNote));

    main.append(sec);
  });
}

// ============================================================
//  Settings: theme + font size, persisted via localStorage,
//  theme falls back to the OS preference on first run.
// ============================================================
const root = document.documentElement;
const STORE = { theme: "salat.theme", fs: "salat.fontSize" };

// ---------- theme ----------
const sunIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19"/></svg>';
const moonIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.3 6.3 0 0 0 10.5 10.5z"/></svg>';

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const icon = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabel");
  if (theme === "dark") { icon.innerHTML = sunIcon; label.textContent = "Light"; }
  else { icon.innerHTML = moonIcon; label.textContent = "Dark"; }
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(STORE.theme); } catch (e) {}
  if (saved !== "light" && saved !== "dark") {
    // first run: follow the OS
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    saved = prefersDark ? "dark" : "light";
  }
  applyTheme(saved);

  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(STORE.theme, next); } catch (e) {}
  });

  // if the user hasn't chosen manually, keep tracking OS changes live
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      let hasManual = null;
      try { hasManual = localStorage.getItem(STORE.theme); } catch (err) {}
      if (hasManual !== "light" && hasManual !== "dark") applyTheme(e.matches ? "dark" : "light");
    });
  }
}

// ---------- font size ----------
const MIN = 0.85, MAX = 1.6, STEP = 0.1;
let fs = 1;

function applyFS() {
  root.style.setProperty("--fs", fs.toFixed(2));
  try { localStorage.setItem(STORE.fs, fs.toFixed(2)); } catch (e) {}
}

function initFontSize() {
  let saved = null;
  try { saved = parseFloat(localStorage.getItem(STORE.fs)); } catch (e) {}
  if (saved && saved >= MIN && saved <= MAX) fs = saved;
  root.style.setProperty("--fs", fs.toFixed(2));

  document.getElementById("fsUp").addEventListener("click", () => { fs = Math.min(MAX, +(fs + STEP).toFixed(2)); applyFS(); });
  document.getElementById("fsDown").addEventListener("click", () => { fs = Math.max(MIN, +(fs - STEP).toFixed(2)); applyFS(); });
  document.getElementById("fsReset").addEventListener("click", () => { fs = 1; applyFS(); });
}

// ---------- boot ----------
renderChrome();
renderSections();
initTheme();
initFontSize();

// ---------- offline service worker (web/PWA only; harmless in Capacitor) ----------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
