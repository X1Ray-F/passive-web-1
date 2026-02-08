---
title: "Stringing Diagnosis Checklist"
description: Rapid checklist to identify the cause of stringing and pick the right fix.
slug: stringing-diagnosis-checklist
section: 3d-printing
---

Stringing happens when molten filament oozes during travel moves. Work through this checklist from fastest tests to deeper fixes.

## Quick triage
- Print a 2-tower stringing test at current settings; observe wisps vs heavy webs.
- Note filament type, nozzle temp, and humidity (last time you dried it).
- Check that the part cooling fan spins freely and points at the nozzle.

### Symptom → cause → fix

| Symptom | Likely cause | Fast fix |
| --- | --- | --- |
| Fine hairlike strings | Temp slightly high | Drop nozzle 5–10°C; increase fan 10% |
| Thick webs/blobs | Retraction distance too short | Add 0.5 mm (Bowden) / 0.2 mm (DD) |
| Pits at seam + strings | Retraction too long/slow | Shorten 10%; raise speed to 45–55 mm/s |
| Strings only after long travels | Travel speed too low | Raise travel to 170–200 mm/s |
| PETG angel hair | Moist filament | Dry 2–4 h at 60°C; store with desiccant |
| Random mid-print strings | Heat creep | Lower chamber temp; add part fan; reduce retraction |

## Tuning order (20–30 minutes)
1) Set travel speed high (170–190 mm/s) and enable “Combing: Within infill”.
2) Run a retraction distance tower (Bowden: 3.5–5.5 mm; DD: 0.6–1.0 mm).
3) Lock distance, then run a speed tower (30–55 mm/s).
4) If strings persist, drop nozzle temp 5°C increments until layers weaken, then back up 5°C.

## Extra slicer levers
- Minimum travel distance: 1.5–2 mm to avoid micro-retractions.
- Z-hop: only 0.2 mm if needed; high Z-hop can add ooze time.
- Coasting/wipe: 0.08–0.12 mm³ coasting; 5–10% wipe distance for PLA.

## Hardware checks
- Extruder tension: too loose causes slipping, too tight grinds and leaves dust that clogs.
- PTFE tube seated flush against nozzle on Bowden; replace if deformed.
- Nozzle wear: swap brass nozzles after abrasive filaments.
- Heatbreak fan clear of dust; clogged fins drive heat creep that worsens stringing.

## Moisture indicators
- Popping sounds while extruding.
- Matte, rough surface on PLA/PETG that is normally glossy.
- Inconsistent extrusion at the start of lines.

## If you still see strings
- Try a smaller nozzle (0.4 → 0.3) only after tuning; it reduces melt volume and ooze.
- Enable “Retract at layer change” and set seam to “Aligned” so blobs stay in one place to sand later.
- For Bowden setups, consider a shorter PTFE path or direct-drive upgrade; long tubes amplify ooze time.
- Print a tiny “oiler” sponge near the extruder to wipe dust; a few drops of mineral oil help PLA glide.

## Retest workflow
1) Dry filament 2–4 hours.\n2) Apply the best retraction + temp combo from your towers.\n3) Print the same two-tower test and one real model with small gaps (Benchy door/window).\n4) Keep the winning profile saved per filament; name it with retraction and temp (e.g., PLA-205C-0.8r-45rs).\n\n---\n*** End Patch

---

### You might also like
- [Retraction Settings and Stringing Fixes](/retraction-settings-fixes/)
- [First Layer Adhesion Guide](/first-layer-adhesion-guide/)
- [PLA, PETG, ABS Temperature Guide](/pla-petg-abs-temp-guide/)
