---
title: "Bridging Settings Guide"
description: Fan, speed, and flow settings to get clean bridges on Ender 3 printers.
slug: bridging-settings-guide
section: 3d-printing
---

Bridging stretches filament across gaps without supports. Clean bridges need balanced cooling, speed, and flow. Use these settings to dial them in quickly.

## Core settings

| Setting | Starting point | Why |
| --- | --- | --- |
| Bridge speed | 25–30 mm/s | Gives filament time to cool mid-air |
| Bridge flow | 90–95% | Prevents sagging and bulges |
| Bridge fan | PLA 80–100%, PETG 40–60% | Solidifies strands faster |
| Bridge wall speed | 20–25 mm/s | Smoother underside finish |
| Min layer time | 8–10 s | Lets bridges cool before next layer |

## Slicer switches to enable
- “Enable bridge settings” (Cura/PrusaSlicer/Bambu Studio).
- Bridge wall count: 1–2; too many adds heat and weight.
- Bridging angle: align with shortest span when possible.
- Combing “Not in skin” to avoid dragging across top surfaces.

## Tuning steps (15 minutes)
1) Print a 20–40 mm bridge test.
2) If strands droop: lower flow to 90–92% and raise fan.
3) If layers look thin/whispy: increase flow to 95% or slow bridge speed to 22–25 mm/s.
4) If corners curl up: reduce fan slightly and raise nozzle temp 3–5°C.

## Material tips
- **PLA:** loves airflow; avoid overheating the hotend block with excessive fan—use a duct that targets the nozzle.
- **PETG:** prefers less fan; stringing can worsen, so pair tuning with retraction tests.
- **ABS/ASA:** minimal fan; consider soluble supports for critical bridges.

## Design considerations
- Shorten spans by adding ribs or splitting models.
- Add chamfers under bridges so the first bridge layer is narrower.
- Increase infill overlap to support bridge endpoints.

## Troubleshooting table

| Issue | Cause | Fix |
| --- | --- | --- |
| Sagging center | Flow too high or fan too low | Flow 90–92%; fan up 10–20% |
| Rough underside | Speed too high | Drop bridge speed to 22–25 mm/s |
| Strings between bridge strands | Temp high or retraction low | Drop temp 5°C; raise travel speed |
| Bridge lifts at ends | Cooling uneven or overhang angle steep | Increase fan; add small support blockers at ends |

## Material presets (quick start)
- PLA: 28 mm/s speed, 92% flow, fan 95%, line width = nozzle size or +0.02.\n- PETG: 26 mm/s speed, 94% flow, fan 50%, temp 230–235°C, travel 180 mm/s.\n- ABS/ASA: 24 mm/s speed, 95% flow, fan 10%, enclosure ~45°C; use soluble supports on mission-critical spans.\n\n## Design tweaks to reduce bridges\n- Rotate the part so bridges are shorter; aim for spans under 25–30 mm when possible.\n- Add ribs or gentle arches under long bridges to break one big bridge into several short ones.\n- Increase infill overlap 12–15% so bridge anchors are solid and don’t peel up.\n*** End Patch
---

### You might also like
- [Overhang and Bridging Tips](/overhang-bridging-tips/)
- [Cooling Fans and Ducts Comparison](/cooling-fans-ducts-comparison/)
- [Retraction Settings and Stringing Fixes](/retraction-settings-fixes/)
