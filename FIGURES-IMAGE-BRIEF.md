# Figure Regeneration Brief — Salah Posture Set

Hand this to an image AI (or illustrator) to regenerate the 12 posture figures.
The **one thing being fixed** versus the current set: the head is over-rotated
relative to the torso. New rule — **the head faces the same direction the chest
faces (forward), with the gaze dropped slightly downward** — except the two
`salam` frames, which keep their turn because the turning *is* the tasleem.

After you have the new line art, the project maintainer converts it to the
alpha-mask format the app uses (white → transparent, line → opaque); you do **not**
need to do that — just deliver clean black-on-white line art.

---

## Master style (applies to every figure)

> Clean black line art of a single adult man in Islamic prayer posture. The same
> character in every image: ankle-length plain thobe (no patterns), a rounded
> kufi prayer cap, neat short beard optional but identical across the set.
> Uniform medium-thin stroke weight, pure black lines on a pure white background.
> No shading, no fills, no grey, no color, no shadows, no background scenery, no
> prayer mat, no labels, no numbers, no borders, no frame. One centered figure
> per image, portrait orientation, generous even margins. Must stay legible as a
> small thumbnail. Same body proportions, same line weight, same scale and
> framing in all images so they read as a matched set.

**Head rule (the correction):** the head is aligned with the torso and faces
**forward**, in the same direction the chest faces, with the **gaze lowered
slightly toward the floor / place of prostration**. The neck is **not** twisted
to the side. (Exceptions: `salam_r`, `salam_l` only — see below.)

**Generate as a set, not one-by-one:** keep the *same character* across all
images (same face, thobe, cap, line weight). If your tool supports it, use one
seed / one reference image so the man is identical in every frame — character
consistency is the hardest part of a posture set and the most important.

---

## The 12 figures (filename → posture → head/gaze)

| File | Posture | Head / gaze |
|------|---------|-------------|
| `takbir.png` | **Opening takbir** — standing, both hands raised to the ears, palms forward | Forward, gaze slightly down |
| `qiyam.png` | **Standing**, hands folded on the body (right over left) | Forward, gaze down toward place of sujud |
| `ruku.png` | **Bowing** — back bent to horizontal, hands gripping the knees, back flat | Head in line with the flat back, looking down at the feet (not lifted, not turned) |
| `itidal.png` | **Standing upright** after bowing, arms relaxed at the sides | Forward, gaze down |
| `sujud.png` | **First prostration** — forehead and nose on the ground, palms flat by the head, forearms off the floor, toes tucked | Head down on the ground (natural to the posture); not turned to the side |
| `jalsa.png` | **Sitting between prostrations** — sitting back on the legs, both hands resting flat on the thighs | Forward, gaze down (THIS is a key fix figure) |
| `sujud2.png` | **Second prostration** — identical to `sujud` | Same as `sujud` |
| `stand.png` | **Rising to stand** for the next rak'ah — upright standing, hands at the sides or beginning to fold | Forward, gaze down |
| `tashahhud.png` | **Sitting, testimony** — sitting back on the legs, **right index finger raised** in pointing gesture, right hand otherwise resting on the right thigh, left hand flat on the left thigh | Forward, gaze toward the finger / forward-down (NOT turned) |
| `final.png` | **Final sitting** — sitting, both hands resting flat on the thighs, **no raised finger** | Forward, gaze down (THIS is a key fix figure) |
| `salam_r.png` | **Tasleem, right** — seated as in the final sitting, **head turned to the man's right**, looking over the right shoulder | **Turned right (exception)** |
| `salam_l.png` | **Tasleem, left** — seated as in the final sitting, **head turned to the man's left**, looking over the left shoulder | **Turned left (exception)** |

Notes on specific postures:
- `tashahhud` vs `final`: the **only** difference is the raised right index finger.
  `tashahhud` has it; `final` does not. Keep everything else (posture, gaze)
  identical between the two.
- `salam_r` / `salam_l`: keep the *seated body* the same as `final`; **only the
  head turns.** These are the sole figures with a turned head, and the turn
  should be a clear ~45–90° look over the shoulder so the gesture is unmistakable
  at thumbnail size. Ideally `salam_l` is the mirror of `salam_r`.
- `sujud` / `sujud2`: should be identical (two separate files for the two
  prostrations in a rak'ah).

---

## Output format

- **Prefer SVG** (crisp at any size; the app can switch to inline `<svg>` later).
- Otherwise **PNG, at least 1024 px tall**, portrait, the figure centered with
  even margins.
- Background: **transparent or pure white** (the maintainer maps white →
  transparent). Lines must be **pure black**, solid, no anti-alias grey fills
  beyond normal edge smoothing.
- Deliver all 12 as a matched set with the **exact filenames above**.

---

## One-line prompt (if your tool wants a single string)

> Clean black line art, one adult man in a plain ankle-length thobe and rounded
> kufi cap, [POSTURE HERE], head facing forward with gaze lowered slightly toward
> the floor, neck not twisted; uniform medium-thin black strokes on pure white,
> no shading no color no shadow no background no mat no text, single centered
> figure, portrait, even margins, thumbnail-legible, consistent character and
> line weight across the set.

Replace `[POSTURE HERE]` with the posture column above for each of the 12. For
`salam_r` / `salam_l`, swap the head clause to "head turned to look over the
right (or left) shoulder."
