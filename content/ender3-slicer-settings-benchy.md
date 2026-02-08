---
title: "Ender 3 Slicer Settings for Benchy (Fast & Clean)"
description: Profiles and tweaks to print a clean Benchy on Ender 3 with Cura or PrusaSlicer.
slug: ender3-slicer-settings-benchy
section: 3d-printing
---

The Benchy torture test is the quickest way to judge an Ender 3 profile. Below are Cura/PrusaSlicer settings that balance speed and detail, plus fixes for common artifacts like ringing, elephant’s foot, and rough overhangs.

## Baseline profile (Cura)
- Layer height: 0.2 mm (use 0.16 mm for showcase prints).
- Line width: 0.42 mm on a 0.4 nozzle.
- Wall line count: 3; Top/Bottom: 4.
- Infill: 15% gyroid.
- Print speed: 55 mm/s walls, 40 mm/s outer wall, 60 mm/s infill.
- Travel speed: 150 mm/s.
- Accel/Jerk: 800 mm/s² / 8 mm/s.
- Cooling: 100% after layer 3; fan ramp for PETG to 60%.
- Temps: PLA 205/60; PETG 235/80.

### PrusaSlicer quick profile
- Quality preset: 0.2 SPEED as base, drop perimeters to 40 mm/s for higher quality.
- Seam position: Aligned (rear) to hide zits.
- External perimeters first = off (helps bridges).

## Small tweaks that fix the classic Benchy issues
- **Ringing on hull:** lower accel to 600 and outer wall speed to 35 mm/s.
- **Stacked lines on bow:** enable coasting (0.08–0.12 mm³) or linear advance/pressure advance if on Klipper/Marlin.
- **Elephant’s foot:** set Initial Layer Horizontal Expansion to -0.15 mm and first-layer bed temp 58°C.
- **Stringing between pillars:** raise travel to 170–180 mm/s; tweak retraction (see table below).
- **Smokestack droop:** increase cooling to 100% for the final 20% of height; add “enable bridge fan override”.

### Retraction and temperature starting points

| Material | Nozzle | Temp (°C) | Bed (°C) | Retraction distance | Retract speed |
| --- | --- | --- | --- | --- | --- |
| PLA | 0.4 | 205 | 60 | 0.6–0.8 mm DD / 4–5 mm Bowden | 35–45 mm/s |
| PETG | 0.4 | 235 | 80 | 0.4–0.6 mm DD / 3.5–4.5 mm Bowden | 25–35 mm/s |
| ABS/ASA | 0.4 | 245 | 100 | 0.6–0.8 mm DD / 4–5 mm Bowden | 30–40 mm/s |

## Bridge and overhang helpers
- Bridge wall speed: 25–30 mm/s; bridge flow: 90–95%.
- Set minimum fan speed for bridges to 80% on PLA; 40–50% PETG.
- Use “Combing: Within infill” to reduce travel scars on the hull.

## Quick checklist before you hit print
1) Bed clean (IPA) and level; Z-offset verified with a 0.2 mm feeler.
2) Filament dry; wet PLA/PETG will string on the mast.
3) G-code flavor matches firmware (Marlin/RepRap vs Klipper input shaping).
4) Save profile as “Ender3 Benchy 0.2” so you can iterate with small deltas.

## Troubleshooting cheatsheet
- Gaps at cabin top: increase top layers to 6 or infill to 20%.
- Droopy nameplate: enable “outer wall wiping” and slow external walls to 30–35 mm/s.
- Over-extruded roof: reduce flow to 98–99% once you confirm Esteps.

---

### You might also like
- [Retraction Settings and Stringing Fixes](/retraction-settings-fixes/)
- [Print Speed vs Quality on Ender 3](/print-speed-vs-quality/)
- [PLA, PETG, ABS Temperature Guide](/pla-petg-abs-temp-guide/)
