---
title: "How I've run major projects — Ben Kuhn"
type: source
tags: [project-leadership, execution, coordination, ooda-loop, ben-kuhn]
created: 2026-06-29
updated: 2026-06-29
sources: 1
---

# How I've run major projects — Ben Kuhn

Ben Kuhn's playbook for running large, high-stakes projects at Anthropic, distilled from "crisis project management" work. Key claim: excellent project management is extremely high-leverage and rarer than it needs to be — mostly because people lack a good playbook. The work mostly felt straightforward to him, but others consistently miss the moves.

## Focus

Clear your schedule. Make the project the **top idea in your mind** (Paul Graham's phrase). Without this, projects go on autopilot — you keep them running but stop proactively thinking about non-obvious things (scope resets, priority changes, when to sound alarms). Crisis mode: 6+ hours/day. Non-crisis: still carve out dedicated daily time.

## Plan for victory

Maintain a **detailed plan for victory**: a concrete list of steps that ends with the goal achieved. Its purpose is not optimism — it is an early-warning system. The most common megaproject failure mode is *not freaking out soon enough*; a concrete plan makes slippage visible early.

Two lessons from a real model-release sprint:
- The plan made it clear 3 months out that things were tight → they pulled in help from another team
- They underestimated several components, didn't check against the plan frequently enough, and still got crunched

Protective moves: add honest "slop" to estimates (most teams are too cowardly here); check against the plan frequently; sound alarms early when you go off-plan.

## Run a fast OODA loop

OODA = Observe, Orient, Decide, Act. Most large projects are bottlenecked on **information processing**, not writing code. Getting complete information often IS the hard part. A recent training run example: the entire critical path was information round-trips between Anthropic and a compute partner — each step constrained by how fast info could flow.

Tactics:
- **Spend real time on it**: running OODA loops is a primary time use, not a background activity
- **Communicate uncomfortably much**: multiple daily calls in high-stakes phases; constantly bounce between groups
- **Track and prioritize biggest open questions**: maintain a ranked living doc of top uncertainties; resolving them becomes the priority list; parallelize across people
- **Step back and reorient frequently**: review priorities multiple times a day; parallelizing top items reduces switching costs when you do reprioritize

## Overcommunicate

Everyone needs ambient awareness of (1) what else is going on, and (2) how their work fits the overall goal — so they can make good local decisions without a round-trip through you. Getting there requires repeating the same things far more than you expect. Synchronous meetings create common knowledge that async doesn't.

## Break off subprojects

Past ~10 people, delegate **project management** (not just execution). Ideal delegation unit: crisp, simple, high-level goal with limited overlap with other workstreams. Bad: a 10-step checklist. Good: "get X working at Y throughput over Z protocol."

The best project managers are often not the strongest technical ICs — the key traits are organization and laser focus on end goals.

> "Direction is more important than magnitude — it's usually better to have a lower-velocity project working on the right things than a higher-velocity one pointed at the wrong goal."

Keeping goals simple ≠ doing less. Find the latent structure that enables clean recursive decomposition — requires work to identify the right intermediate goals, but pays off immensely.

## DRI starter kit (appendix)

DRI = Directly Responsible Individual. Lightweight system for new project leads:
- **Landing page / working doc**: go/ link, concrete top-level goal, staffing, roadmap, important open questions list
- **Weekly 30-min meeting**: backstop for coordination; creates common knowledge; 5m DRI review → 10m silent write → 10m sync discussion
- **Stack-ranked task list**: people must understand priorities; kanban if there's a large backlog
- **Slack norms**: no DMs (makes info undiscoverable); no centithreads (≥10 messages → short Tuple); bias toward fewer, larger channels
- **Weekly broadcast updates**: signal-to-noise focused; "we accomplished Y" not "we worked on X"; state things crisply ("X improves eval Y by Z points")
- **Retrospectives**: every 2-4 weeks; "what went well / what we could improve" format

Related: [[concepts/plan-for-victory]] [[concepts/ooda-loop-for-projects]] [[sources/categories-of-leadership-on-technical-teams-ben-kuhn]] [[sources/a-reading-list-for-generalists-dylan-bowman]]
