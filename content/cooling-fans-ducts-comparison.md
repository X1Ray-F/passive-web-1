---
title: "Cooling Fans and Ducts Comparison"
description: Stock vs aftermarket part cooling options for Ender 3 and how they affect print quality.
slug: cooling-fans-ducts-comparison
section: 3d-printing
---

Better cooling can clean up bridges, overhangs, and fine details. Here’s how stock Ender 3 cooling compares with popular aftermarket ducts and fan swaps.

## What good cooling fixes
- Cleaner bridges and overhangs with fewer droops.
- Reduced stringing on PLA when combined with tuned retraction.
- Sharper corners by solidifying plastic sooner.

### Stock vs aftermarket at a glance

| Option | Airflow | Noise | Install effort | Notes |
| --- | --- | --- | --- | --- |
| Stock 4010 blower + stock duct | Low-Med | Low | None | OK for PLA, weak for PETG bridges |
| Petsfang/ Hero Me (5015 blower) | High | Med | Moderate (printed parts) | Big jump in bridge quality |
| Bullseye/Orbiter ducts | High | Med | Moderate | Compact; good for dual 5015 setups |
| BMG/Direct drive ducts (Sprite) | Med-High | Med | Moderate | Balanced for DD conversions |
| Nevermore/activated carbon add-ons | N/A | Med | High | Air cleaning, not cooling |

## When to upgrade
- Frequent bridge failures even with tuned temps/flow.
- Printing PLA at high speeds (>120 mm/s) where stock fan can’t keep up.
- PETG overcools unevenly—use a stronger fan but cap speed to avoid layer splits.

## Setup tips
- Print ducts in PETG or ABS to withstand heat.
- After mounting, re-level the bed and re-check Z-offset; new ducts change nozzle clearance.
- Verify fan direction; some blowers ship reversed wiring.

## Fan speed tuning
- PLA: 70–100% after layer 3; drop to 60–70% on thin features to avoid curling.
- PETG: 30–60%; too much causes layer cracking.
- ABS/ASA: 0–15%; only for bridges.

## Noise vs airflow trade-off
- 5015 blowers move more air but are louder; use PWM control and limit to what the print needs.
- If printing at night, consider a quieter 4010 dual-fan setup with a well-designed duct.

## Test before and after
1) Print a bridge test and overhang test with stock cooling; note angles and sag.
2) Install the new duct/fan; rerun tests at the same temps/speeds.
3) Keep the profile that wins both quality and acceptable noise.

## Wiring and power notes
- Many 5015 blowers need JST plugs—crimp properly or use adapters; avoid loose bare wires.\n- Check voltage: Ender 3 uses 24V; do not install 12V fans without a buck converter.\n- After wiring, run the fan at 50% and 100% while feeling for vibrations; re-tighten mounts if resonance appears.\n\n## Maintenance\n- Dust buildup reduces airflow—blow out ducts monthly.\n- Inspect printed ducts for heat creep or cracks; reprint in PETG/ABS if PLA softens near the hotend.\n- Lubricate sleeve-bearing fans sparingly; replace noisy blowers early to keep print quality stable.\n*** End Patch

---

### You might also like
- [Bridging Settings Guide](/bridging-settings-guide/)
- [Overhang and Bridging Tips](/overhang-bridging-tips/)
- [Print Speed vs Quality on Ender 3](/print-speed-vs-quality/)
