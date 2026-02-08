---
title: "Nozzle Clogs: Causes and Quick Fixes"
description: "Common causes of 3D printer nozzle clogs and how to fix them safely."
slug: nozzle-clogs-fixes
---

Nozzle clogs waste time and filament. Most are caused by heat creep, debris, or incorrect temps. Use the checklist below to clear clogs safely and reduce how often they return.

## Common causes
- Printing too cold for the filament grade (e.g., PETG at 215°C).
- Dust or burnt filament inside the melt zone.
- Heat creep from insufficient part cooling on all-metal hotends.
- Retractions too long on Bowden setups pulling soft filament into the heat break.
- Old PTFE tube deformed at the nozzle interface.

### Symptom → likely fix

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Under-extrusion after 10–15 minutes | Heat creep | Increase part cooling; lower ambient temp; add small fan to hotend area |
| Clicking extruder | Partial clog or retraction too long | Shorten retraction; perform cold pull |
| Filament grinding | Nozzle blocked or tension off | Clean nozzle; adjust extruder tension |
| Bubbles or brown spots | Burnt filament | Replace nozzle; purge with high-temp filament |

## Cold pull steps (safe method)
1) Load nylon or cleaned PLA filament.
2) Heat nozzle to 230–240°C (PETG/nylon) or 200°C (PLA) and extrude a few mm.
3) Cool to 90°C (PLA) or 130°C (nylon). Wait 1 minute.
4) Disable steppers and pull filament firmly; debris should come out shaped like the nozzle interior.
5) Repeat until the pulled filament is clean and the tip is crisp.

## Other quick fixes
- Swap to a fresh brass or hardened nozzle if clog persists.
- Check PTFE tube cut: it must sit flush against the nozzle; trim a fresh end.
- Dry filament; moisture pops can leave residue in the nozzle.

## Prevention checklist
- Use recommended temps: PLA 195–210°C; PETG 230–245°C.
- Keep retraction conservative: 0.6–0.8 mm direct drive; 4–6 mm Bowden.
- Add a small filament filter/oiler with a scrap of sponge to catch dust.
- After long prints, purge 10–20 mm filament at end to clear semi-molten material.
- Replace nozzles every few hundred print hours or when changing abrasive filaments.

---

### You might also like
- [PLA vs PETG: When to Use Each Material](/pla-vs-petg/)
- [Ender 3 Bed Leveling Guide](/ender3-bed-leveling-guide/)
- [Digital Products for Freelancers](/products/)
