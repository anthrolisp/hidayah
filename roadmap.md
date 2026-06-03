# Hidayah — Roadmap

A lightweight, dev-facing note of where this could go. Not a spec — just so future
directions are documented and intentionally-deferred items aren't quietly forgotten.

## Vision
Hidayah is a growing **companion for new Muslims**. Wudu & Salat is module one: the
most essential, most-asked "how do I actually do this?" content. The same `www/`
folder powers the website, the PWA, and the Android app.

## Planned content (prioritized)
1. **Shahada / becoming Muslim / minimum belief** — *the top planned addition.*
   The doorway to everything else. Intentionally deferred to keep the first release
   focused on the prayer mechanics, **not** dropped.
2. **Prayer times, deeper** — how the five windows are determined (sun positions),
   and how to read a prayer timetable. (The Five Prayers section currently gives the
   rough windows + "use an app or your local mosque.")
3. **Core du'as / adhkar** — beyond the prayer itself (entering/leaving the home,
   morning/evening, basic dhikr).
4. **Clothing & cleanliness, expanded** — a simple male/female "dressed properly for
   prayer" note, and clarifying clean body / clothes / place.
5. **Tayammum (dry ablution)** — what to do when there's no water. A new Muslim hits
   this question sooner than expected.

## Deferred / optional
- **Witr & qunut** — intentionally omitted for now to avoid overwhelming a beginner.

## Pre-launch checklist (before Play Store submission)
- [ ] **Human/native review of the Arabic text and harakat** (diacritics). Non-negotiable
      for a devotional text — an AI can't stand in for this.
- [ ] **Transliteration consistency** pass (we use a beginner-friendly register).
- [ ] **Citation review** by a knowledgeable person (verse + hadith references).
- [ ] `privacy.html` page hosted (clean public URL for the store listing).
- [ ] Android: `npx cap add android` → signed `.aab` (keep the keystore safe).
- [ ] iOS deferred (Apple Developer cost) — the web + Android cover the audience.

## Working principles (lessons from the build)
- **Separate "stale" from "remaining" before acting on any audit** — don't redo
  already-fixed items.
- **Verify every hadith number against sunnah.com** before embedding it; cite the
  collection without a number rather than guess.
- **Keep fiqh caveats recessive** — small, dim, "ask a teacher." Ask of every sentence:
  *does this help someone pray tonight, or answer a question they haven't asked yet?*
- Permanent things (Play Store app ID `com.justinshaffner.hidayah`) don't change;
  display name, repo name, and content can.
