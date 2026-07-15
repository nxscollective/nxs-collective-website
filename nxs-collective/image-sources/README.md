# Image Sources (originals — not served on the live site)

This folder holds the **original, unoptimized** approved image library exactly
as supplied (PNG/JPEG, ~2MB each). It is kept for archival purposes only —
nothing in this folder is imported or linked by the website.

The actual images used on the site are the optimized WebP derivatives in
`public/images/`, generated from these originals (resized to a sensible max
width for their usage and re-encoded as WebP, ~97% smaller with no visible
quality loss).

If you ever need to regenerate a derivative (e.g. at a different size or
crop), start from the matching original here rather than the compressed
`public/images` version, to avoid compounding quality loss.

Do not delete this folder — see IMAGE_MANIFEST.md for what each file is.
