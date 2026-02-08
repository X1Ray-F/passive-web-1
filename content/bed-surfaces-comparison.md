---
title: "Bed Surfaces Comparison: PEI vs Glass vs Textured"
description: Pros and cons of PEI, glass, and textured plates for Ender 3 adhesion and finish.
slug: bed-surfaces-comparison
section: 3d-printing
---

Choosing the right build surface affects adhesion, bottom finish, and part removal. Here’s how PEI (smooth/textured), glass, and other plates compare for PLA, PETG, and ABS.

## Quick comparison table

| Surface | Best for | Adhesion strength | Bottom finish | Notes |
| --- | --- | --- | --- | --- |
| Smooth PEI | PLA, PETG | High | Glossy/satin | Needs IPA; glue stick for PETG release |
| Textured PEI | PLA, PETG, ASA | Medium-High | Textured matte | Great release; slightly larger Z-offset |
| Glass (borosilicate) | PLA | Medium | Mirror gloss | Add glue for PETG; wait to cool for release |
| Carborundum/ultrabase | PLA, PETG | High when hot | Matte | Can chip with PETG; avoid sharp tools |
| Garolite | Nylon, PC blends | Medium | Matte | Good for engineering filaments |

## Picking the right surface
- **Max gloss:** smooth PEI or glass; lower first-layer temp to avoid elephant’s foot.
- **Easy release:** textured PEI; parts pop off when cool.
- **High-temp/ABS:** textured PEI inside enclosure; avoid glass if prone to warping.
- **Flexible removal:** use spring-steel plates; bend to release instead of scraping.

## Setup tips by surface
- Smooth PEI: clean with IPA; every few weeks, lightly scuff with 2000-grit.
- Textured PEI: rarely needs scuffing; keep oil-free; increase Z-offset 0.02–0.04 mm vs smooth.
- Glass: ensure clips are tight; re-level after heating; use glue stick as release agent for PETG/ABS.
- Carborundum: avoid metal scrapers; use plastic wedge; monitor for chips.

## First-layer numbers that work
- Smooth PEI PLA: 205/60°C; line width 110%; fan on after layer 2.
- Textured PEI PETG: 235/80°C; fan 40–50%; no glue needed if Z-offset is right.
- Glass PLA: 205/60°C with a thin glue film if you need stronger hold.

## Maintenance cadence
- Wipe before each print; deep clean weekly.
- Replace PEI sheet when gouged or if adhesion drops after repeated cleaning.
- Keep spare textured and smooth plates; swap based on finish you want.

## Troubleshooting by surface
- **Parts welding to smooth PEI (PETG):** add glue stick as release; drop bed to 75–80°C; raise Z-offset 0.02 mm.\n- **Glass releases mid-print:** increase bed to 65°C PLA/85°C PETG; add light glue film; check level at temp.\n- **Corners lifting on textured PEI:** add brim and bump bed +3°C; ensure fan not blasting first layers.\n- **Surface bubbles:** clean with warm water and mild soap, then IPA; replace sheet if damage persists.\n\n## When to switch surfaces\n- Use textured PEI for fast functional parts (great grip + easy pop-off).\n- Use smooth PEI or glass for cosmetic bottoms (display pieces, enclosures).\n- Use garolite for nylons; it grips without needing aggressive adhesives.\n*** End Patch

---

### You might also like
- [First Layer Adhesion Guide](/first-layer-adhesion-guide/)
- [Warp and Curling Fixes](/warp-curling-fixes/)
- [Ender 3 Bed Leveling Guide](/ender3-bed-leveling-guide/)
