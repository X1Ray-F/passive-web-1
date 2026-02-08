---
title: "Retraction Settings and Stringing Fixes"
description: How to tune retraction distance and speed to eliminate stringing on Bowden and direct-drive Ender 3 setups.
slug: retraction-settings-fixes
section: 3d-printing
---

Stringing happens when molten filament oozes during travel moves. The fastest way to tame it is to test retraction distance/speed, temperature, and travel strategy together. This guide provides starting values, a tuning flow, and a cause → fix table you can apply in one print session.

## Starting points by hardware
- Direct drive (Sprite/S1): 0.6–0.9 mm distance, 35–45 mm/s speed.
- Bowden (classic Ender 3): 4–5.5 mm distance, 35–55 mm/s speed.
- TPU: 0.8–1.2 mm, 20–25 mm/s (gentle to avoid chewing).

### Quick tuning flow (30 minutes)
1) Print a retraction tower with 5–6 distance steps (e.g., 3.5–5.5 mm Bowden).
2) Keep speed fixed at 40 mm/s; inspect stringing and blobbing.
3) Choose the cleanest distance, then run a second tower varying speed (30–55 mm/s).
4) Lock values; drop nozzle temp by 5°C if wisps remain.
5) Set travel speed 150–180 mm/s; enable “Combing: Within infill” in Cura.

## Stringing cause → fix table

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Fine wisps between towers | Temp too high | Drop 5–10°C; increase part cooling |
| Thick hairs + blobs | Retraction distance too short | Add 0.5–1 mm (Bowden) or 0.2 mm (DD) |
| Pitting at layer start | Retraction too long | Reduce distance; enable wipe/coast |
| Zits on seam | Retraction too slow or disabled coasting | Raise speed to 45–55 mm/s; enable coast 0.08–0.12 mm³ |
| Under-extrusion after travel | Acceleration too high for extruder | Lower accel to 500–800 mm/s²; check extruder tension |
| Persistent strings on PETG | Moisture or fan too high | Dry filament; limit fan to 40–60% on PETG |

## Advanced Cura switches that help
- **Combing Mode:** Within infill (avoids dragging across perimeters).
- **Z Hop When Retracted:** 0.2 mm if you see scars on walls; avoid very high z-hop which slows prints.
- **Minimum Travel Distance:** 1.5–2 mm to prevent unnecessary retractions on tiny moves.
- **Limit Support Retractions:** on, to speed up support-heavy prints.

## Temperature and flow sanity check
- Verify Esteps/flow first: a 100 mm extrusion test should be within ±1 mm.
- PLA sweet spot: 200–210°C; PETG: 230–245°C; ABS/ASA: 245–255°C.
- Over-temp mimics bad retraction—cool first before chasing distance.

## Travel strategy
- High travel speeds (170–200 mm/s) reduce ooze time—safe on rigid frames; drop to 140–150 mm/s if ringing appears.
- Short travel paths: enable “Avoid printed parts” only when needed; otherwise it lengthens moves.

## Rapid diagnostics (pick one and change)
- **Only hair-like strings:** drop 5°C and reprint a tiny tower before touching retraction distance.
- **Fat webs:** add 0.5 mm distance (Bowden) or 0.2 mm (direct drive) and increase travel speed to 170+ mm/s.
- **Blobs at seam:** keep distance but raise retract speed to 50 mm/s; add 0.1 mm coasting if your slicer supports it.
- **Holes after travel:** distance is too high or PA/LA is aggressive; cut retraction 10% and retest.

## Sample profiles to copy
- **PLA, Bowden:** 4.5 mm @ 45 mm/s, 205°C, travel 170 mm/s, combing within infill.
- **PLA, Direct drive (S1):** 0.8 mm @ 40 mm/s, 205°C, travel 160 mm/s, z-hop 0.2 mm.
- **PETG, Bowden:** 4.0 mm @ 35 mm/s, 235°C, fan 45%, travel 150 mm/s.
- **ABS/ASA, Direct drive:** 0.8–1.0 mm @ 35 mm/s, 245°C, fan 0–10%, enclosure warm.

---

### You might also like
- [Ender 3 Slicer Settings for Benchy](/ender3-slicer-settings-benchy/)
- [Warp and Curling Fixes](/warp-curling-fixes/)
- [Print Speed vs Quality on Ender 3](/print-speed-vs-quality/)
