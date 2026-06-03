# Hidayah — Build & Publish Guide

This is a single web-app codebase that runs three ways:

1. **A website** — upload the `www/` folder to any static host.
2. **An Android app** — wrapped with Capacitor, submitted to Google Play.
3. **An iOS app** — wrapped with Capacitor, submitted to the App Store.

The same `www/` folder powers all three. You never duplicate content.

---

## Project layout

```
hidayah/
├── capacitor.config.json     # app id, name, splash/status-bar config
├── package.json              # dependencies + helper scripts
├── PRIVACY.md                # privacy policy (host this publicly)
├── www/                      # THE APP — all three targets use this
│   ├── index.html            # shell (no content baked in)
│   ├── css/styles.css        # theme tokens + layout
│   ├── js/
│   │   ├── content.js        # ALL text/content lives here — edit this to add material
│   │   └── app.js            # renders content.js, handles theme + font + tabs
│   ├── assets/
│   │   ├── figures/*.png     # the 12 posture masks (recolored via CSS)
│   │   └── icons/*.png       # app icons
│   ├── manifest.webmanifest  # PWA manifest
│   └── sw.js                 # offline service worker (web only)
```

### How to add new content later
Open `www/js/content.js`. It's a plain data file. Add a new object to the
`sections` array (copy an existing one as a template). The UI renders whatever
is there — no other file needs editing. Three section `type`s exist today:
`"steps"` (numbered list), `"prayers"` (count cards), `"moves"` (posture cards).
Add new figure images to `www/assets/figures/` and reference them by filename.

---

## 1. Run it locally first

You need **Node.js 18+** installed.

```bash
cd hidayah
npm install
npm run serve        # opens a local server, usually http://localhost:8080
```

Open that URL. Confirm everything looks right. This is also exactly what the
website will be.

---

## 2. Publish as a website (easiest, do this first)

Upload the **contents of `www/`** to any static host:
- **Cloudflare Pages**, **Netlify**, **Vercel**, or **GitHub Pages** — all free.
- Point the host at the `www` folder as the publish directory.

That's the whole website. It already works offline (service worker) and installs
as a PWA on phones via the browser's "Add to Home Screen."

Host `PRIVACY.md` somewhere public too (e.g. `yoursite.com/privacy`) — both app
stores require a public privacy-policy URL. You can paste its text into any page.

---

## 3. Wrap for the app stores with Capacitor

### One-time setup

```bash
cd hidayah
npm install

# 1. Pick your real app id (reverse-domain, lowercase, no dashes).
#    Already set to "com.justinshaffner.hidayah" in capacitor.config.json
#    (also update package.json scripts if you use them)

# 2. Initialize native platforms
npx cap add android
npx cap add ios          # macOS only

# 3. Copy the web app into the native shells
npx cap sync
```

Re-run `npx cap sync` any time you change anything in `www/`.

### Android (Google Play)

Requirements: **Android Studio** installed.

```bash
npx cap open android     # opens the project in Android Studio
```

In Android Studio:
1. Set the app icons: use `www/assets/icons/icon-512.png` (and the maskable one)
   via **Res > New > Image Asset**, or drop them into the mipmap folders.
2. Build a signed release: **Build > Generate Signed Bundle / APK > Android App
   Bundle (.aab)**. Create a keystore when prompted and **keep it safe** — you
   need the same key for every future update.
3. At [play.google.com/console](https://play.google.com/console) (one-time $25
   account fee): create the app, upload the `.aab`, fill in the store listing
   (title, description, screenshots, the privacy-policy URL), set content
   rating, and submit for review.

Note: Google Play also accepts PWAs directly via Bubblewrap/TWA, but since you
want iOS too, Capacitor keeps both on one path.

### iOS (App Store)

Requirements: a **Mac** with **Xcode**, and an **Apple Developer account**
($99/yr).

```bash
npx cap open ios         # opens the project in Xcode
```

In Xcode:
1. Select the project > **Signing & Capabilities** > choose your Apple
   Developer team. Set the bundle identifier to match your `appId`.
2. Add app icons: drop `icon-1024.png` (and sizes) into
   **Assets.xcassets > AppIcon**. Xcode can generate the rest from 1024.
3. Set a launch screen background to `#0d1117` to match the splash.
4. **Product > Archive**, then **Distribute App > App Store Connect > Upload**.
5. At [appstoreconnect.apple.com](https://appstoreconnect.apple.com): create the
   app record, fill the listing (description, keywords, screenshots, the
   privacy-policy URL), complete the **App Privacy** questionnaire — answer
   **"Data Not Collected"** (true for this app) — and submit for review.

**Apple guideline 4.2 ("minimum functionality"):** a plain website in a wrapper
can be rejected. This app is fine because it's a self-contained, offline,
genuinely useful reference with native theming/status-bar integration — but
present it that way in review notes if asked.

---

## Store assets checklist

You'll need to produce these (sizes are current as of writing — verify in each
console, as they change):

- **App icon**: 1024×1024 (provided: `www/assets/icons/icon-1024.png`).
- **Screenshots**: take them from the running app on a simulator/device.
  - iOS: 6.7" and 6.5" iPhone sizes at minimum.
  - Android: phone screenshots, plus a 1024×500 feature graphic.
- **Descriptions**: short + full. (Draft below.)
- **Privacy-policy URL**: host `PRIVACY.md` and link it.
- **Content rating / age**: this app = everyone / no objectionable content.

### Draft store description

> **Hidayah — A Companion for New Muslims**
>
> A clear, beautiful guide to the ablution (wudu) and the prayer (salat),
> built for beginners and reverts. Every passage is shown three ways —
> transliteration, Arabic, and English — so you can read it the way that helps
> you most.
>
> • Step-by-step wudu, with what's obligatory vs. recommended
> • The five daily prayers and their rak'ah counts
> • One full rak'ah, posture by posture, with figures to copy
> • Adjustable text size and light/dark themes
> • Works fully offline — no account, no ads, no tracking
>
> Valid across the four Sunni schools.

---

## Updating the app later

1. Edit content in `www/js/content.js` (or add figures/sections).
2. `npx cap sync`
3. Bump the version (in `capacitor.config.json` is informational; the real
   version/build numbers are set in Android Studio and Xcode).
4. Re-archive / re-bundle and upload to each store.
5. Re-deploy `www/` to your website host.

Bump `CACHE` in `www/sw.js` whenever you change cached files, so returning web
users get the update instead of a stale cache.

---

## Figure images — source & mapping

The 12 posture images in `www/assets/figures/` are **alpha masks** (transparent
PNG; the line art is the opaque part). The app fills them with the theme's
line color via CSS `mask`, so the *same file* renders gold on dark and
charcoal-bronze on light — no separate light/dark image sets.

If you regenerate the artwork, keep this mapping (filename → posture):

| File           | Posture                          |
|----------------|----------------------------------|
| takbir.png     | Opening takbir (hands to ears)   |
| qiyam.png      | Standing, hands folded           |
| ruku.png       | Bowing                           |
| itidal.png     | Standing after ruku              |
| sujud.png      | First prostration                |
| jalsa.png      | Sitting between prostrations     |
| sujud2.png     | Second prostration               |
| stand.png      | Stand for next rak'ah            |
| tashahhud.png  | Sitting, right index raised      |
| final.png      | Final sitting                    |
| salam_r.png    | Tasleem, head to worshipper's R  |
| salam_l.png    | Tasleem, head to worshipper's L  |

To turn a new black-on-white line drawing into a mask: keep the lines pure
black on pure white, then map white→transparent / black→opaque and crop to the
figure. (Any image editor's "color to alpha" on white does this.) Drop the
result into `www/assets/figures/` with the matching filename — no code change
needed. If you ever get clean **SVG** line art instead, you can replace the
`<div class="pose">` mask technique with inline `<svg>` using
`fill: var(--icon-stroke)` for even crisper scaling.

### Image-generation brief (hand this to an image AI)
> Produce 12 separate images, one per salah posture, as a matched set (same
> character, same thobe + kufi, same line weight and scale). Clean black line
> art only — uniform stroke, pure black on pure white, no shading, no fills, no
> color, no shadows. One centered figure per image, even margins, no labels or
> numbers or borders. Postures must be legible as small thumbnails. Prefer SVG
> output; otherwise PNG 1024px+ tall, transparent or pure-white background.
