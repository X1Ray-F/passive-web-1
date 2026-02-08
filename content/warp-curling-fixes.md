---
title: "Warp and Curling Fixes"
description: Practical ways to stop warping and corner lift on Ender 3 prints.
slug: warp-curling-fixes
section: 3d-printing
---

Warping happens when the first layers cool unevenly and shrink away from the bed. Use this checklist to keep corners down on PLA, PETG, and ABS.

## Fast fixes
- Add a 5–8 mm brim for large parts; rafts only for extreme cases.
- Increase bed temp by 3–5°C and keep the room draft-free.
- Slow first two layers to 20–25 mm/s; flow 105–110%.
- Keep fan low on the first 5 layers (PLA 0–20%, PETG 0–10%, ABS 0%).

### Environmental control
- PLA: avoid cold drafts; desk enclosure or cardboard shield works.
- PETG: partial enclosure is fine; watch for overheating of control box.
- ABS/ASA: full enclosure; chamber 40–50°C; bed 100–110°C.

## Bed adhesion combos that work

| Material | Bed surface | Adhesion aid | Note |
| --- | --- | --- | --- |
| PLA | Smooth PEI | None | Add brim for very tall parts |
| PETG | Glass/PEI | Light glue stick | Prevents welding to PEI |
| ABS/ASA | Textured PEI | Brim + enclosure | Consider ABS slurry if still lifting |

## Model and slicer tweaks
- Add filleted or chamfered bottom edges to reduce stress concentration.
- Enable “Outer wall wipe distance” and set Z-hop 0.2 mm to avoid knocking corners.
- Use concentric or gyroid infill; low infill (12–18%) reduces stress.
- Lift print bed temperature gradually rather than maxing to 110°C on PLA.

## If warping persists
- Check mesh leveling; high/low spots create uneven squish.
- Dry filament; moisture increases internal stress as steam escapes.
- For ABS, try ASA or PETG if enclosure is weak—these warp less.

## Diagnostics you can run quickly
- Print a 60×60 mm L-shaped bracket with a 5 mm brim. Note which corner lifts first; re-level that quadrant and raise bed there 2 clicks (manual knobs) or adjust mesh point.
- Run a temp tower focused on bed temps (55–70°C PLA, 75–90°C PETG). Pick the first layer that stays flat.
- Measure ambient: if room <18°C, add cardboard draft shield and preheat bed 5 minutes longer.

## Material-specific warping notes
- **PLA:** warps mainly from drafts or dirty bed. Keep fan moderate on tall thin parts.
- **PETG:** prefers warmer bed and low first-layer fan; excessive fan is the top cause of curl.
- **ABS/ASA:** requires enclosure; add a 10–12 mm brim and avoid opening doors until cool.

## Storage and prep
- Store spools in a dry box at 20–30% RH; wet filament warps more as steam expands.
- Purge 20 mm of filament after long idle periods to clear heat-crept material that can lift corners.

## Material add-ons
- **Brims vs rafts:** use brims for PLA/PETG; rafts only for ABS or when the build surface is damaged.
- **Adhesion sheets:** PEI sheet worn out? Painter’s tape works for PLA temporarily; plan to replace the sheet.
- **Chamber hacks:** even a loose IKEA enclosure boosts success with ABS—monitor electronics temps and crack the door slightly if they overheat.

## Post-print care
- Let parts cool to room temp before removal; forced prying can peel coatings and warp future prints.
- Log which combination (bed temp, fan, brim width) finally worked so you can reuse it on similar geometries.

---

### You might also like
- [First Layer Adhesion Guide](/first-layer-adhesion-guide/)
- [Bed Surfaces Comparison](/bed-surfaces-comparison/)
- [Calibrate Esteps and Flow on Ender 3](/calibrate-esteps-flow/)
