---
title: "Overhang and Bridging Tips"
description: Settings and techniques to print clean overhangs and bridges on Ender 3.
slug: overhang-bridging-tips
section: 3d-printing
---

Clean overhangs and bridges depend on cooling, speed, and support strategy. Use these settings to reduce droop without over-relying on supports.

## Overhang basics
- Keep layer height at or below 0.2 mm for 45°+ overhangs.
- Reduce outer wall speed to 30–40 mm/s; inner walls 45–55 mm/s.
- Increase fan to 100% for PLA on overhang-heavy layers; 50–60% for PETG.
- Enable “Detect thin walls” only if geometry requires—can hurt surface quality otherwise.

## Bridging settings

| Setting | Recommended | Why |
| --- | --- | --- |
| Bridge speed | 25–30 mm/s | Gives filament time to cool mid-air |
| Bridge flow | 90–95% | Prevents sagging | 
| Bridge fan | 80–100% PLA, 40–60% PETG | Cools strands quickly |
| Bridge wall min length | 5 mm | Avoids over-triggering on tiny gaps |

## Slicer switches that help
- **Combing: Not in skin** to avoid dragging across top surfaces.
- **Support overhang angle:** raise to 55–60° to reduce unnecessary supports once tuned.
- **Enable bridge settings** and set a small “bridge fan override”.

## Material-specific notes
- PLA: easiest; focus on cooling and slower outer walls.
- PETG: strings on bridges—lower temp to 230–235°C, fan 50%, and keep flow 92–95% for bridges.
- ABS/ASA: needs enclosure; consider soluble or breakaway supports for critical bridges.

## Quick tests
- Print an overhang test (every 5°). Identify the angle where surfaces roughen; use that as your support threshold.
- Print a 20–30 mm bridge test; tune bridge speed/flow until strands stay straight.

## Support strategy
- Use custom supports under only the worst overhangs; tree supports in Cura can save time.
- Keep support Z-distance at least 0.2 mm for PLA, 0.25 mm for PETG.
- Add “support blocker” on areas that already cool well (e.g., short overhangs near big masses).

## Common problems and fixes
- **Droopy bridges:** lower bridge flow to 90%, raise fan, and slow bridge speed to 25 mm/s.
- **Rough underside:** enable “ironing on bridges” if available or add thin sacrificial support blockers under critical zones.
- **Stringing on bridges (PETG):** reduce temp to 230–235°C and increase travel speed to 170–190 mm/s.
- **Supports fused to part:** increase support Z-distance and use interface layers only on top of supports.

## Testing cadence
- Keep a small 2-minute bridge/overhang test on your SD card; rerun after nozzle swaps or material changes.
- Document best bridge settings per material in your slicer profile notes to avoid re-tuning every project.
- If you add a part cooling duct upgrade, re-run the tests—cooling changes shift optimal speeds.

## Design tweaks that help
- Add chamfers instead of sharp 90° overhangs; bridges become shorter and cleaner.
- Split large models and use alignment pins when an overhang cannot be supported cleanly.
- For long bridges, design in shallow arches or ribs to shorten unsupported spans.

---

### You might also like
- [Ender 3 Slicer Settings for Benchy](/ender3-slicer-settings-benchy/)
- [Retraction Settings and Stringing Fixes](/retraction-settings-fixes/)
- [Print Speed vs Quality on Ender 3](/print-speed-vs-quality/)
