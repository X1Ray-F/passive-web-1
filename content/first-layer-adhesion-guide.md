---
title: "First Layer Adhesion Guide"
description: How to lock in Ender 3 first-layer adhesion with bed prep, temps, and Z-offset.
slug: first-layer-adhesion-guide
section: 3d-printing
---

A perfect first layer decides whether a print succeeds. This guide covers surface prep, Z-offset, temperatures, and slicer tweaks that stop lifts and elephant’s foot without messy glue.

## Surface prep checklist
- Clean the bed with 90–99% IPA while cold; avoid fingerprints after cleaning.
- For glass: a thin glue stick film improves release after cooling.
- For PEI: no glue needed; if adhesion fades, lightly scuff with 2000-grit and clean.
- Remove old hairspray/glue buildup—thick layers cause waves.

## Temperature and Z-offset
- PLA: 205°C nozzle, 60°C bed; PETG: 235°C nozzle, 80°C bed.
- Start Z-offset so a 0.2 mm feeler drags slightly; adjust by ±0.02 mm after a live test square.
- Lower the first-layer speed to 20–25 mm/s; flow at 105–108% to help squish.

### Suggested first-layer settings

| Setting | PLA | PETG | Notes |
| --- | --- | --- | --- |
| First-layer height | 0.2 mm | 0.24 mm | Slightly thicker helps forgiveness |
| First-layer speed | 20–25 mm/s | 18–22 mm/s | Keep accel under 500 mm/s² |
| First-layer fan | 0–20% | 0–10% | Too much fan causes warping |
| Initial line width | 110–120% | 110–120% | More contact area |

## Z-offset tuning in one print
1) Slice a 0.2 mm single-layer square (60×60 mm) with 3 perimeters.
2) Start print; watch the first perimeter: if gaps → lower nozzle; if ridges → raise.
3) Adjust baby-step Z by ±0.02 mm at a time.
4) Stop once the lines are smooth, slightly squished, and corners stay down.

## If edges lift (warping starts)
- Raise bed temp 3–5°C and add a 5 mm brim for tall or wide parts.
- Block drafts; a cardboard shield around the printer helps.
- For PETG/ABS: keep fan low in first 5 layers; increase gradually.

## If you get elephant’s foot
- Reduce first-layer bed temp by 3–5°C.
- Add Initial Layer Horizontal Expansion = -0.15 to -0.25 mm.
- Keep first-layer height ≤ 0.24 mm on a 0.4 nozzle.

## Adhesion aids (use sparingly)
- Glue stick on glass for PETG to prevent chips—wipe off and refresh each print.
- Blue tape for PLA quick prototypes; replace worn strips.
- Hairspray only if nothing else works; it can contaminate bearings and fans.

## Troubleshooting cheat table

| Symptom | Cause | What to change first |
| --- | --- | --- |
| Lines not touching | Z too high or bed low | Lower Z-offset 0.02 mm; re-level corner |
| Ridges/elephant’s foot | Z too low or bed too hot | Raise Z 0.02 mm; drop bed 3°C after layer 1 |
| Corners lifting | Drafts or low squish | Add brim; block drafts; increase bed 3°C |
| First layer glossy/rough mix | Dirty surface | Clean with IPA; remove old glue film |
| First layer holes | Under-extrusion | Raise flow to 108%; check filament gear tension |

## Mini maintenance schedule
- Weekly: wipe bed with IPA; run a small 40×40 test square to confirm Z-offset.
- Biweekly: check wheel tension on the bed carriage; loose wheels tilt the plane.
- After nozzle swaps: redo Z-offset and a single-layer test—nozzle length tolerances vary.

---

### You might also like
- [Ender 3 Bed Leveling Guide](/ender3-bed-leveling-guide/)
- [Warp and Curling Fixes](/warp-curling-fixes/)
- [Bed Surfaces Comparison](/bed-surfaces-comparison/)
