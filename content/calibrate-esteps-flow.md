---
title: "Calibrate Esteps and Flow on Ender 3"
description: Step-by-step to calibrate extruder steps and flow rate for accurate walls and infill.
slug: calibrate-esteps-flow
section: 3d-printing
---

Incorrect Esteps and flow show up as thin walls, gaps, and inconsistent dimensions. Calibrating both takes 20–30 minutes and should be done whenever you change extruders, gears, or filament brand.

## Tools
- Digital calipers (±0.02 mm resolution).
- Permanent marker and ruler for filament marks.
- 0.4 mm nozzle (values differ for larger nozzles—recalibrate if you swap).

## Calibrate Esteps (extruder steps/mm)
1) Heat nozzle to 200°C (PLA-safe) and load filament.
2) Send `M503` to read current Esteps (look for `M92 E###`).
3) Mark filament 120 mm above the extruder entry.
4) Extrude 100 mm: `G1 E100 F100`.
5) Measure remaining distance to the mark. If 24 mm remain, you extruded 96 mm.
6) New Esteps = Current Esteps × (Commanded / Actual). Example: 424 × (100/96) = 442.
7) Set and save: `M92 E442` then `M500`.

## Calibrate flow (extrusion multiplier)
1) Slice a single-wall cube (0% infill, 1 perimeter, 0.2 mm layer, 0.4 mm line width) at slow speed.
2) Print it; measure wall thickness in 3–4 spots.
3) Flow multiplier = (Expected line width) / (Measured wall). Example: 0.4 / 0.44 = 0.91.
4) Enter the multiplier in slicer (e.g., Flow 91% in Cura, Extrusion Multiplier 0.91 in PrusaSlicer).
5) Reprint and re-measure; adjust within ±2%.

### Quick reference table

| Step | G-code / Setting | Target |
| --- | --- | --- |
| Read current steps | M503 | Note M92 E value |
| Set new steps | M92 E[new] | Until 100 mm commands equal 100 mm |
| Save to EEPROM | M500 | Persist after power cycle |
| Flow (Cura) | Flow % | 95–105% depending on filament |
| Flow (PrusaSlicer) | Extrusion Multiplier | 0.90–1.05 |

## Troubleshooting
- **Under-extrusion after calibration:** Check gear tension; clean drive gear teeth.
- **Over-extrusion on first layer only:** Lower initial layer flow to 100–105% after global flow is set.
- **Dimensional errors on X/Y:** If flow is correct, tune belt tension and slicer horizontal expansion.

## Maintenance cadence
- Recheck Esteps whenever you replace the extruder, PTFE tube, or stepper driver.
- Recheck flow when switching filament brands or diameters; measure filament diameter if tolerances look off.

## FAQ
- **Do I need to recalibrate for every nozzle size?** Esteps stay the same, but flow can change with 0.6/0.8 nozzles—rerun the single-wall test.
- **Should I store flow per filament?** Yes. Save per-filament profiles (e.g., PLA-205C-98flow) to avoid guessing later.
- **What if my firmware won’t save M500?** Add `M92 E###` to your start G-code as a fallback until EEPROM writes are enabled.

## Sample start G-code snippet (Marlin)\nAdd after homing:\n```\nM92 E<your_Esteps_here>\nM900 K0 ; disable LA if not tuned\n```\nReplace once you tune linear/pressure advance.\n*** End Patch

---

### You might also like
- [Retraction Settings and Stringing Fixes](/retraction-settings-fixes/)
- [PLA, PETG, ABS Temperature Guide](/pla-petg-abs-temp-guide/)
- [Print Speed vs Quality on Ender 3](/print-speed-vs-quality/)
