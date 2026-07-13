# Images folder — how this works

Every image on the NXS Collective website lives in this folder
(`public/images`). None of them are loaded from the internet, so nothing
will ever break or go blank if a remote link changes.

Right now these are **premium abstract placeholder graphics** (clinical
line-art, not real photographs) built in the brand's black / graphite /
silver / sand palette, standing in for photography you don't have yet.

## Replacing a placeholder with a real photo

You do **not** need to touch any code to swap an image. Just:

1. Get your real photo ready (landscape/4:3 works best for these spots).
2. Rename your new photo to **exactly** the same file name as the
   placeholder it's replacing (e.g. `physio-assessment.jpg`).
   - If your file is a `.jpg` or `.png` instead of `.svg`, that's fine —
     open the matching page component (see the table below) and change
     the file extension in the `src=".../images/xxx.svg"` line to match
     (e.g. `.jpg`).
3. Drag your new file into this folder, replacing the old one.
4. Save. The website layout, cropping and sizing stay exactly the same —
   only the picture changes.

## Where each image is used

| File                                | Used on                                            |
|--------------------------------------|-----------------------------------------------------|
| `hero-movement-assessment.svg`       | Homepage hero section                               |
| `physio-assessment.svg`              | Homepage services card + Physiotherapy page         |
| `sports-therapy-manual.svg`          | Homepage services card + Sports Therapy page        |
| `personal-training-session.svg`      | Homepage services card + Personal Training page     |
| `dynamometer-strength-test.svg`      | Complete Movement Healthcheck section (homepage)    |
| `digital-movement-assessment.svg`    | Complete Movement Healthcheck section (homepage)    |
| `anatomical-line-art.svg`            | Why NXS page                                        |
| `rehab-performance-setting.svg`      | Contact page                                        |
| `logo-mark.jpg`                      | Navigation bar + footer (your real logo)            |
| `logo-full.jpg`                      | Social share preview image (your real logo, with tagline) |

`logo-mark.jpg` and `logo-full.jpg` are your **actual NXS Collective logo**
(cropped from the artwork you supplied) — not placeholders. Everything
else in this folder is a placeholder graphic standing in for photography.

If you ever get an updated version of the logo, replace `logo-mark.jpg`
(and `logo-full.jpg` if it also includes the tagline) with the new file,
keeping the same file name — the site will pick it up automatically.

## Recommended real photography (for later)

- Physiotherapist assessing a client (seated or on a plinth)
- Sports therapist performing manual/soft-tissue therapy
- Strength coach supervising a client during resistance training
- Strength testing using a hand-held or fixed dynamometer
- A digital movement assessment (camera/markers, tablet showing results)
- A wide shot of the clinical / training space

Keep photography clinical and calm — natural light, muted tones, no
bright gym colours — to match the rest of the site's visual direction.
