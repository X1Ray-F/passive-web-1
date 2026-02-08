---
title: "Over-Extrusion vs Under-Extrusion"
description: Diagnose and fix extrusion imbalances with flow, Esteps, and temperature tuning.
slug: overextrusion-underextrusion
section: 3d-printing
---

Over-extrusion shows up as bulging walls and blobs; under-extrusion shows gaps, thin walls, and weak infill. This guide helps you pick the right fix quickly.

## Recognize the symptoms
- **Over-extrusion:** ridges on walls, droopy corners, elephants foot even with correct Z, nozzle dragging.
- **Under-extrusion:** gaps in top layers, brittle parts, infill not touching perimeters, clicking extruder.

### Quick decision table

| Symptom | Likely side | Fast action |
| --- | --- | --- |
| Walls thicker than spec | Over | Lower flow 2–3% and re-test cube |
| Missing lines in infill | Under | Raise temp 5–10°C; check filament path for friction |
| Blobs at layer start | Over | Enable wipe/coast; lower flow; retraction tune |
| Top not sealing | Under | Increase flow 2–4%; raise top layers count |
| Nozzle grinds filament | Under | Increase temp; check extruder tension and gears |

## Baseline calibrations
- Set correct Esteps (see guide) then calibrate flow with a single-wall cube.
- Measure filament diameter; if 1.73–1.77 mm, flow may need +2–4% vs a true 1.75.
- Use consistent line width (0.42 on 0.4 nozzle) to keep math predictable.

## Flow tuning workflow
1) Print 1-wall cube at slow speed; measure wall.
2) Flow multiplier = expected / measured. Apply in slicer.
3) Reprint; adjust within ±2% only.

## Temperature and speed interplay
- Under-extrusion at high speed often needs +5–10°C or reduced line width.
- Over-extrusion blobs can be worsened by too-hot temps; drop 5°C and slow external walls.
- Keep volumetric flow below hotend limit (PLA 8–10 mm³/s stock; PETG 7–9 mm³/s).

## Mechanical sanity checks
- Extruder tension: firm grip without chewing; clean drive gear teeth.
- PTFE tube fully seated; replace if discolored or deformed.
- Check for partial clogs; run a cold pull if extrusion pulses.
- Verify spool path: high drag from tight spool holders or sharp angles mimics under-extrusion.
- Inspect hob gear set screw; if loose, steps slip randomly.

## Slicer levers to balance quality
- Coasting 0.08–0.12 mm³ and wipe 5–10% for over-extrusion seams.
- Pressure/linear advance tuned for your filament reduces start/stop blobs.
- Increase minimum layer time on tiny parts to avoid heat build-up that mimics over-extrusion.

## Test prints to keep on hand
- Single-wall cube (0% infill) for flow.
- 100 mm extrusion test with marked filament for Esteps checks.
- Thin “tolerance tower” to check fit after tuning—log what fits to repeat later.

## When to re-tune
- After swapping nozzles or hotends (even same size).
- When changing filament brand/lot; measure diameter—cheap spools vary more.
- If ambient temps swing (winter vs summer) affecting flow and cooling balance.

---

### You might also like
- [Calibrate Esteps and Flow on Ender 3](/calibrate-esteps-flow/)
- [Retraction Settings and Stringing Fixes](/retraction-settings-fixes/)
- [Print Speed vs Quality on Ender 3](/print-speed-vs-quality/)
