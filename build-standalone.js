// build-standalone.js
// Generates www/hidayah.html — a single, fully self-contained, offline-capable
// copy of the app, with CSS, JS, fonts, and the 12 figures all inlined as
// data URIs. The toolbar "Save a local copy" button downloads this file.
//
// Run: node build-standalone.js  (also wired into the GitHub Pages deploy)

const fs = require("fs");
const path = require("path");

const WWW = path.join(__dirname, "www");
const CSS = path.join(WWW, "css");
const FIGDIR = path.join(WWW, "assets", "figures");
const b64 = (file) => fs.readFileSync(file).toString("base64");

// --- fonts: inline each woff2 as a data URI ---
let fontsCss = fs.readFileSync(path.join(CSS, "fonts.css"), "utf8");
fontsCss = fontsCss.replace(/url\('fonts\/([^']+)'\)/g,
  (_m, file) => `url(data:font/woff2;base64,${b64(path.join(CSS, "fonts", file))})`);

// --- styles: drop the @import (fonts are inlined above) ---
let styles = fs.readFileSync(path.join(CSS, "styles.css"), "utf8");
styles = styles.replace(/@import\s+'fonts\.css';\s*/, "");
const inlinedCss = fontsCss + "\n" + styles;

// --- figures: inline all 12 masks as data URIs ---
const figNames = ["takbir", "qiyam", "ruku", "itidal", "sujud", "jalsa",
  "sujud2", "stand", "tashahhud", "final", "salam_r", "salam_l"];
const figData = {};
figNames.forEach((n) => { figData[n] = `data:image/png;base64,${b64(path.join(FIGDIR, n + ".png"))}`; });
const figDataJs = "const FIG_DATA = " + JSON.stringify(figData) + ";\n";

// --- JS: content.js + app.js, rewired for a single classic <script> ---
let content = fs.readFileSync(path.join(WWW, "js", "content.js"), "utf8")
  .replace(/export const /g, "const ");
let app = fs.readFileSync(path.join(WWW, "js", "app.js"), "utf8")
  .replace(/^\s*import\s+\{[^}]*\}\s+from\s+"\.\/content\.js";\s*$/m, "")           // drop the import
  .replace(/const FIG = \(name\) =>[^;]*;/, "const FIG = (name) => FIG_DATA[name];") // figures -> data URIs
  .replace(/\/\/ ---------- offline service worker[\s\S]*$/, "// (service worker omitted in the standalone copy)\n");
const inlinedJs = figDataJs + "\n" + content + "\n" + app;

// --- assemble index.html into one file ---
let html = fs.readFileSync(path.join(WWW, "index.html"), "utf8")
  .replace(/\s*<link rel="manifest"[^>]*>/, "")
  .replace(/\s*<link rel="apple-touch-icon"[^>]*>/, "")
  .replace(/<link rel="stylesheet" href="css\/styles\.css">/, `<style>\n${inlinedCss}\n</style>`)
  .replace(/<script type="module" src="js\/app\.js"><\/script>/, `<script>\n${inlinedJs}\n</script>`);

fs.writeFileSync(path.join(WWW, "hidayah.html"), html);
const kb = Math.round(fs.statSync(path.join(WWW, "hidayah.html")).size / 1024);
console.log(`Wrote www/hidayah.html (${kb} KB)`);
