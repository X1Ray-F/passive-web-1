---
title: "Elephant’s Foot Fixes"
description: How to eliminate elephant’s foot on Ender 3 prints with Z-offset and slicer tweaks.
slug: elephants-foot-fixes
section: 3d-printing
---

Elephant’s foot is the flared first layer that makes parts hard to fit. It comes from too much squish or heat on the first layers. Use these quick fixes to restore clean bottoms.

## Fast checklist
- Lower bed temp after layer 1 (e.g., 60→55°C PLA; 80→75°C PETG).
- Raise Z-offset by 0.02–0.05 mm until the brim still sticks but edges are crisp.
- Reduce first-layer flow to 102–105% if you previously bumped it high for adhesion.

### Slicer tweaks that help

| Setting | Value | Why |
| --- | --- | --- |
| Initial Layer Horizontal Expansion | -0.15 to -0.25 mm | Shrinks only first layer outline |
| First-layer height | 0.2–0.24 mm | Avoid very thick first layers that spread |
| Bed temp after layer 1 | -5°C vs first layer | Reduces thermal squish |
| Brim width | 5–8 mm | Supports edges without over-squish |

## Mechanical factors
- Check bed leveling: overly tight front corners cause extra squish there.
- Ensure gantry is square; if X gantry leans forward, nozzle squishes more at front.
- Verify Z-offset after any nozzle swap—different nozzle lengths change squish.

## Test and measure
1) Print a 30×30×5 mm calibration cube with a 6 mm brim.
2) Measure bottom edge vs top edge; aim for ≤0.05 mm difference.
3) Apply one change at a time: Z-offset first, then temp, then expansion.
4) Save a “No Elephant” profile in your slicer so you can reuse the tuned first-layer settings.

## If it still appears
- Switch to textured PEI: the texture hides minor flares and releases parts cleanly.
- Reduce first-layer speed to 18–22 mm/s; high speed pushes molten plastic outward.
- For stubborn PETG on smooth PEI, add a thin glue film and lift Z-offset 0.02 mm.

## CAD tweaks that help
- Add a 0.3–0.5 mm chamfer on the model’s bottom edges; this visually removes any tiny flare.
- Slightly recess internal holes (counterbore) so small feet don’t block fit.
- If designing enclosures, add a 0.1–0.2 mm negative tolerance to mating parts; still re-check after printing.

## Material + surface combos that resist elephant’s foot
- PLA on textured PEI: 205/60 first layer, then 200/60; line width 110%; expansion -0.15 mm.
- PETG on glass: glue stick as release, 240/85 then 235/80; Z-offset +0.02 mm vs PLA.
- ABS/ASA enclosed: brim + -0.2 mm expansion, 250/105 first layer then 245/100; fan 0–10%.

## Common pitfalls
- Leveling while bed is cold—always level at temp; thermal expansion changes the gap.
- Using huge first-layer widths (>130%) which push plastic sideways.
- Ignoring warped beds: if one corner always flares, check for a low spot or shim the bed.

---

### You might also like
- [First Layer Adhesion Guide](/first-layer-adhesion-guide/)
- [Warp and Curling Fixes](/warp-curling-fixes/)
- [Bed Surfaces Comparison](/bed-surfaces-comparison/)
