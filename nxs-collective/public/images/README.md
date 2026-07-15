# Images folder — how this works

Every image on the NXS Collective website is served from this folder, as
optimized WebP files (originals unedited and preserved in `/image-sources`
at the project root — see that folder's README for details).

## Real photography and approved imagery

These are your actual approved assets — not placeholders:

| File | Used on |
|---|---|
| `homepage/hero-home.webp` | Homepage hero; also reused on the Contact page hero and the Physiotherapy service card |
| `physiotherapy/physio-hero-samuel.webp` | Physiotherapy page hero (real photo — never regenerate or replace) |
| `physiotherapy/manual-therapy-1.webp` | Physiotherapy "Manual Therapy" card; also reused on the Why NXS page |
| `physiotherapy/manual-therapy-2.webp` | Spare/unused — an alternative manual therapy shot, not currently placed anywhere |
| `physiotherapy/therapeutic-ultrasound.webp` | Physiotherapy "Therapeutic Ultrasound" card |
| `physiotherapy/shockwave-therapy.webp` | Physiotherapy "Shockwave Therapy" card |
| `sports-therapy/sports-therapy-hero.webp` | Sports Therapy page hero; also reused on the homepage service card |
| `sports-therapy/iastm.webp` | Sports Therapy "IASTM" card |
| `sports-therapy/dry-cupping.webp` | Sports Therapy "Clinical Dry Cupping" card |
| `movement-health/strength-analysis.webp` | Movement Healthcheck "Strength Analysis" card |
| `movement-health/movement-analysis.webp` | Movement Healthcheck "Movement Analysis" card |
| `movement-health/complete-healthcheck-consultation.webp` | Movement Healthcheck "Complete Healthcheck" card; also reused on the Why NXS page |
| `personal-training/personal-training-female.webp` | Personal Training page hero; also reused on the homepage service card and the Why NXS page |
| `logo-mark.jpg` | Navigation bar + footer |
| `logo-full.jpg` | Social share preview image |

## Replacing an image

You do not need to touch any code. Get your new file ready, and either:

- **Keep the same file name** and drop it straight into the matching
  folder above (simplest — no code changes at all), or
- Use a new file name, in which case open the component/page listed above
  and update the `src="/images/..."` path to match.

Match the original's approximate aspect ratio where you can, so the crop
looks intentional rather than stretched or oddly cropped.
