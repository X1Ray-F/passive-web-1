---
title: Ender 3 Bed Leveling Guide (Fast and Reliable)
description: Step-by-step guide to level your Ender 3 bed and improve first-layer adhesion.
slug: ender3-bed-leveling-guide
---

A reliable first layer on the Ender 3 comes from a flat bed, consistent nozzle distance, and a quick repeatable routine. Use this guide to level in under 10 minutes and avoid the most common adhesion issues.

## Tools you need
- A clean sheet of standard printer paper (feeler gauge substitute).
- Hex driver to tighten eccentric nuts if wheels wobble.
- Isopropyl alcohol and lint-free cloth to clean the build surface.
- Optional: feeler gauge set (0.1 mm) for extra consistency.

## Fast leveling steps
1) Preheat bed to 60°C and nozzle to 200°C to simulate printing conditions.
2) Disable steppers (LCD: Prepare → Disable steppers) and move the print head by hand.
3) Home axes, then move nozzle to the front-left corner.
4) Slide paper between nozzle and bed; adjust the corner knob until you feel light drag.
5) Repeat for front-right, back-right, back-left.
6) Circle the bed again; tiny tweaks matter after first pass.
7) Store this as your weekly maintenance routine, not a one-time fix.

### Troubleshooting symptoms and fixes

| Symptom | Likely cause | Quick fix |
| --- | --- | --- |
| Lines not sticking | Nozzle too high | Re-level; add slight drag on paper |
| Elephant’s foot | Nozzle too low or bed too hot | Raise nozzle 0.05 mm; bed 55°C |
| Rough first layer | Dirty bed | Clean with IPA; avoid fingerprints |
| Lines squished together | Z-offset too low | Increase Z-offset 0.02–0.05 mm |
| Corners lifting | Uneven bed or drafts | Re-level; add skirt; shield from drafts |

## Keep the bed flat
- Check that the bed wheels are snug but still roll smoothly.
- If one wheel spins freely, tighten the eccentric nut slightly.
- For warped glass/metal beds, consider a PEI spring steel sheet; it masks small deviations.

## First-layer checklist before every print
- Bed and nozzle preheated to your filament defaults.
- Z-offset stored in firmware; avoid resetting accidentally after firmware updates.
- Wipe bed with IPA; remove previous glue or hairspray residue.
- Run a small 1-layer test square to verify adhesion at the corners.

## Upgrade ideas (optional)
- Yellow bed springs or silicone spacers to reduce re-leveling frequency.
- Auto bed leveling probe (CR Touch/BLTouch) if you change nozzles often.
- PEI flex plate for easy part removal and consistent texture.

---

### You might also like
- [Nozzle Clogs: Causes and Quick Fixes](/nozzle-clogs-fixes/)
- [PLA vs PETG: When to Use Each Material](/pla-vs-petg/)
- [Digital Products for Freelancers](/products/)
