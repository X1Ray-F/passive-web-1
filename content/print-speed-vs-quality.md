---
title: "Print Speed vs Quality on Ender 3"
description: How faster speeds affect ringing, extrusion, and surface finish on Ender 3 profiles.
slug: print-speed-vs-quality
section: 3d-printing
---

Pushing an Ender 3 faster saves hours, but only if acceleration, flow, and cooling stay balanced. This guide shows where quality drops first and how to keep functional parts strong while shaving time.

## Speed tiers that work
- **Standard:** 50–60 mm/s walls, 80 mm/s infill (safe for most frames).
- **Fast:** 80–100 mm/s walls, 120–140 mm/s infill with tuned accel/jerk.
- **Very fast (Klipper/input shaping):** 120–150 mm/s walls, 180–220 mm/s infill—requires rigid frame and well-tuned pressure advance.

### Example profiles

| Tier | Outer wall | Inner wall | Infill | Accel | Jerk | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Quality | 35 | 50 | 60 | 600 | 8 | Great surfaces, minimal ringing |
| Balanced | 45 | 60 | 80 | 800 | 10 | Good for most functional parts |
| Fast | 60 | 90 | 130 | 1200 | 12 | Needs pressure advance/LA |

## What degrades first
- Ringing/ghosting on corners from high accel/jerk.
- Under-extrusion on long infill lines if flow can’t keep up—lower line width or temp +5°C.
- Poor bridging when fan can’t keep up at high volumetric flow.

## Keep quality while going faster
- Drop line width from 0.42 → 0.38 when pushing speed to reduce volumetric load.
- Raise nozzle temp 5–10°C for PETG/PLA to maintain flow at higher speeds.
- Enable pressure/linear advance: tune K-factor or PA at target speeds.
- Use “Outer before inner walls” off when fast; let inner walls support the shell.
- Increase infill overlap slightly (12–15%) to avoid gaps.

## Test prints that matter
- Speed tower: vary speeds by layers to see ringing onset.
- Input shaping test (if Klipper): run resonance and apply values to axes.
- Functional bracket test: print at fast profile and do a flex test—if layers split, slow perimeters or raise temp.

## When to slow down
- Tall, narrow parts prone to wobble—ringing shows quickly.
- Very small features where cooling is already stressed.
- Overhang/bridge-heavy models; slow outer walls to 30–40 mm/s while keeping infill faster.

## Speed vs volumetric flow table (0.4 nozzle, PLA reference)

| Layer height | Line width | Safe speed (mm/s) | Volumetric flow (mm³/s) |\n| --- | --- | --- | --- |\n| 0.2 | 0.42 | 60 | ~5.0 |\n| 0.2 | 0.42 | 90 | ~7.6 |\n| 0.24 | 0.46 | 80 | ~8.8 |\n| 0.28 | 0.46 | 70 | ~9.0 |\n\nUse these as ceilings unless you’ve upgraded hotend/volcano.\n\n## Checklist before pushing speed\n- Belts tensioned; no slip when lightly plucked.\n- Frame bolts tightened; Z wheels snug but not binding.\n- Extrusion tuned (Esteps/flow) so higher speeds don’t hide under-extrusion.\n- Cooling duct unobstructed; fast prints need more consistent airflow.\n- Keep acceleration equal on X/Y to avoid skewed ringing patterns.\n*** End Patch

---

### You might also like
- [Ender 3 Slicer Settings for Benchy](/ender3-slicer-settings-benchy/)
- [Retraction Settings and Stringing Fixes](/retraction-settings-fixes/)
- [Bed Surfaces Comparison](/bed-surfaces-comparison/)
