---
title: Simple CRM for Solo SMB (Spreadsheet)
description: Track leads, deals, follow-ups with a lightweight CRM sheet.
slug: simple-crm-smb
---

You do not need a heavyweight CRM to close projects. A focused spreadsheet keeps pipeline, follow-ups, and revenue projections visible in a single tab. This page gives you the columns to copy, stages to track, and reminders that prevent leads from going cold.

## Core columns to copy
- Company / Contact name
- Email / Phone / Preferred channel
- Source (referral, website form, cold outreach)
- Stage (New, Qualified, Proposal, Won, Lost)
- Deal value and probability (%)
- Next action + due date
- Notes and blockers

### Suggested sheet structure

| Column | Example | Tip |
| --- | --- | --- |
| Stage | Qualified | Keep dropdown simple; avoid micro-stages |
| Deal value | $1,800 | Always in one currency |
| Probability | 40% | Multiply by value to forecast |
| Next action | Send proposal draft | Make it actionable, not generic |
| Next action date | 2026-02-15 | Drives reminders |

## Pipeline stages that work for solos
- **New:** captured from form or referral; quick validation within 24h.
- **Qualified:** problem, budget, and timeline confirmed.
- **Proposal:** scope and price sent; waiting on decision.
- **Won:** contract signed or deposit paid.
- **Lost:** document why; reuse lessons in future outreach.

### Reminder cadence
- New → Qualified: same or next business day.
- Proposal follow-up: 48–72 hours after send, then weekly twice.
- Warm leads without response: monthly check-in with a useful resource.

## Basic formulas (spreadsheet-ready)
- **Weighted pipeline:** `SUM(value * probability)`.
- **Days in stage:** `TODAY() - stage_start_date`.
- **Follow-up due flag:** `IF(today > next_action_date, "Due", "On track")`.

## Why this beats skipping a CRM
- You avoid double-booking calls and forgetting follow-ups.
- Weighted totals give you revenue visibility without dashboards.
- Easy to duplicate per quarter and archive closed deals.

### Mini “next action” checklist per deal
- Confirm preferred channel for replies.
- Log a date-stamped note after every call.
- Keep proposals in a shared folder and link them in the row.
- Move to Won only after payment or signed agreement.

---

### You might also like
- [Invoice Template for Freelancers](/invoice-template-freelancers/)
- [Content Calendar Template](/content-calendar-notion/)
- [Digital Products for Freelancers](/products/)
