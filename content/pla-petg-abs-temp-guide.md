---
title: "PLA, PETG, ABS Temperature Guide"
description: Nozzle and bed temperature ranges for PLA, PETG, and ABS plus fan and enclosure tips.
slug: pla-petg-abs-temp-guide
section: 3d-printing
---

Dialing temperatures correctly prevents layer splitting, elephant’s foot, and stringing. Use the tables below as a starting matrix, then fine-tune ±5°C after a short temp tower.

## Core ranges

| Material | Nozzle (°C) | Bed (°C) | Fan | Notes |
| --- | --- | --- | --- | --- |
| PLA | 195–215 | 55–65 | 80–100% | Great for detail; avoid enclosures over 40°C |
| PETG | 230–245 | 75–90 | 30–60% | Lower fan to reduce layer cracking |
| ABS/ASA | 240–255 | 95–110 | 0–15% | Needs enclosure; avoid drafts |

### Surface and release
- PLA: PEI or glass works; a light glue stick layer can ease release on glass.
- PETG: Use glue stick on PEI to avoid welding; glass at 80–85°C releases when cool.
- ABS: Enclosed chamber; PEI or textured sheets work, brim recommended.

## Quick tuning workflow
1) Print a 5-step temperature tower for your filament.
2) Inspect stringing (too hot) vs poor layer bonding (too cold).
3) Lock in the best layer visually, then adjust bed temp ±3°C to reduce curl.
4) Set first-layer temps +5°C nozzle and +5–10°C bed for adhesion; drop after layer 2–3.

## Fan strategy
- PLA: full fan after layer 3; reduce to 60–70% on thin walls to avoid curling.
- PETG: keep 30–50%; too much fan causes layer splits and brittle parts.
- ABS/ASA: fan off; use 5–10% only for bridging.

## Common issues and temperature fixes

| Issue | Likely temp cause | Fix |
| --- | --- | --- |
| Brittle layers on PETG | Bed or fan too high | Lower fan; raise nozzle 5°C |
| Elephant’s foot | Bed too hot first layer | Reduce bed 5°C after layer 1; add -0.2 mm expansion |
| Layer separation (ABS) | Chamber too cold | Enclose printer; raise bed to 105°C |
| Glossy blobs on PLA | Nozzle too hot | Drop 5–10°C; increase fan |
| Under-extrusion corners | Nozzle too cold | Raise 5°C or reduce speed |

## First layer vs rest of print
- First layer: hotter and slower. Example PLA 210/60 then 205/60 from layer 2.
- PETG: 240/85 then 235/80; keep fan low initially.
- ABS: 250/105 first layer; maintain chamber heat, no fan.

## Volumetric flow reminders
- PLA on stock hotend: ~8–10 mm³/s max; stay below this when increasing speed or line width.
- PETG: ~7–9 mm³/s; raise temp if you push flow.
- ABS: ~8–10 mm³/s with enclosure; watch for heat creep on long slow prints.

## Quick decision tree
1) Layers not bonding → raise nozzle 5°C and slow walls 10 mm/s.\n2) Corners lifting → increase bed 3–5°C and add brim; drop fan in first 5 layers.\n3) Stringing → drop nozzle 5°C and increase travel speed before altering retraction.\n4) Dull surface/under-extrusion → raise temp or lower speed to keep flow under limit.\n*** End Patch

---

### You might also like
- [Calibrate Esteps and Flow on Ender 3](/calibrate-esteps-flow/)
- [Print Speed vs Quality on Ender 3](/print-speed-vs-quality/)
- [Warp and Curling Fixes](/warp-curling-fixes/)
