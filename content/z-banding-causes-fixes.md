---
title: "Z-Banding: Causes and Fixes"
description: How to diagnose and eliminate Z-banding on Ender 3 printers.
slug: z-banding-causes-fixes
section: 3d-printing
---

Z-banding shows up as repeating horizontal waves or bulges on tall prints. It usually comes from mechanical wobble, inconsistent extrusion, or Z-step inaccuracies. Here’s how to isolate and fix each cause.

## Mechanical checks
- Ensure Z lead screw is straight and clean; wipe and apply light PTFE lube.
- Loosen, re-seat, and gently tighten the Z coupler; avoid preloading the lead screw against the motor shaft.
- Check eccentric nuts on Z wheels: snug, no binding.
- Confirm the X gantry is square: measure both sides from frame base to gantry; match within 0.5 mm.

## Extrusion consistency
- Calibrate Esteps and flow (see guide) so each layer is the same thickness.
- Use a high-quality nozzle; worn nozzles change flow at intervals.
- Keep filament dry; micro-bubbles shift flow slightly each layer.

### Slicer/firmware factors
- Z-hop can introduce artifacts if very high; keep 0.2–0.3 mm unless needed.
- Layer height: use multiples of 0.04 mm on a 0.4 mm lead screw pitch to avoid rounding error (e.g., 0.2, 0.24, 0.28).
- Acceleration/jerk too low can amplify small flow fluctuations—find a balanced value (800–1200 accel for walls).
- If using Klipper, verify rotation_distance and microsteps for Z.

## Troubleshooting flow vs mechanical
- Print a 150 mm tall single-wall tower at slow speed.
- If waves line up with Z-lead screw pitch (8 mm lead ≈ every 8 mm height), suspect mechanical wobble/coupler.
- If patterns change after retraction moves, suspect flow/pressure advance mis-tune.

## Fix order (fastest first)
1) Re-level and re-seat Z coupler; check gantry left/right height.
2) Calibrate flow; set layer height to 0.2 or 0.24 mm exact.
3) Lubricate lead screw and ensure nut is not overtightened.
4) Add an anti-backlash or brass lead screw nut only if play is evident.
5) If using dual Z upgrade, ensure motors are wired correctly and synced.

## Extra tips
- Avoid heavy cable drag on the print head; route cables so they don’t tug on Z as it moves.
- Check bed wheels: if the bed rocks, Z artifacts can appear as the nozzle-to-bed distance shifts.
- If using input shaping/pressure advance, retune after any mechanical change—mis-tuned PA can mimic Z artifacts.
- Replace a visibly bent lead screw; no amount of slicer tuning fixes a wobbling screw.

## Preventive maintenance cadence
- Clean and lightly lube the lead screw monthly for daily printers.
- Re-check gantry leveling after any transport or large crash.
- Inspect coupler set screws every few weeks; add blue threadlocker if they loosen often.

## Quick win summary
- Layer heights in sync with lead screw pitch; avoid odd heights like 0.21 mm.
- Stable frame + correct flow solves most cases; hardware swaps are last resort.
- Log your final settings so future upgrades (dual Z, new hotend) start from a known-good baseline.

---

### You might also like
- [Calibrate Esteps and Flow on Ender 3](/calibrate-esteps-flow/)
- [Print Speed vs Quality on Ender 3](/print-speed-vs-quality/)
- [Ender 3 Bed Leveling Guide](/ender3-bed-leveling-guide/)
