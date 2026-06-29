---
title: "Categories of leadership on technical teams — Ben Kuhn"
type: source
tags: [leadership, technical-teams, roles, management, ben-kuhn]
created: 2026-06-29
updated: 2026-06-29
sources: 1
---

# Categories of leadership on technical teams — Ben Kuhn

Internal Anthropic doc adapted publicly. Breaks down team leadership into four distinct responsibility categories, enabling clearer role design and staffing — especially for teams with spiky talent where one person covering all four is a unicorn hunt.

## The four categories

**Overall direction**: Mission, goals, roadmap, prioritization, communication to stakeholders. Requires good predictive models of both the domain and the organization. Failure = getting caught by surprise; team working on low-value projects; important things falling through cracks.

**People management**: Coaching, hiring, performance expectations. Most important day-to-day activity: recurring 1:1s (coaching kind, not status update kind). Key trait: understanding people — high EQ plus knowing what high performance looks like in the domain. Needs enough technical depth to follow discussions without slowing them; doesn't need the most depth. Outcome: people are high-performing and happy.

**Project management**: Execution, unblocking, visibility. Sets operating cadence (standups, planning, retros), splits and delegates work, maintains visibility (task trackers, Slack channels), interfaces with the rest of the company. Domain expertise matters (to follow discussions and track dependencies). Good PM is barely visible — things just hum. Failure = blocked people, priority thrash, wrong Slack channel, misunderstood root goals.

**Technical leadership**: Quality of technical work. Sets technical direction, reviews execution, mentors ICs. Benefits a lot from doing the work yourself (direct feedback loops). Common to have multiple TLs split vertically by project or horizontally by skillset. Failure = accumulating debt, bogus research results, creaky systems, frequent outages.

## Why split them

Trying to find someone great at all four is a unicorn hunt. Even when found, they usually spike in 1-2 areas. Higher-leverage to have them focus on their spikes and split the rest.

## Real-world examples of splits

**Tech Lead Manager (TLM)** — one person does all four. Common in early startups. Often fails because people management and project management get sacrificed. More likely to work when: small low-pressure team, engaged manager-of-managers, simple domain, highly experienced TLM.

**EM / TL split** (common in large tech; Anthropic inference team) — EM handles direction + people + project management; TL handles technical. Inference team example: managers focus on hiring, organizing, coaching, priorities, and external liaison; multiple TLs for different service areas (model implementation, server architecture, scheduling, capacity).

**PM / TL split** (Wave) — non-technical PMs as "mini CEOs" of product areas; TL as primary technical authority and secondary people manager (co-writes performance reviews, both do 1:1s). Works when domain is operationally complex but not deeply technical, and PM/TL have a strong working relationship.

**People manager / Research lead** (Anthropic interpretability) — Chris Olah: overall direction + technical leadership; Shan Carter: people + project management. Research lead holds direction because it depends on high-context intuitive judgment (betting on superposition hypothesis → major results). Analogous to CTO/VPE split.

Related: [[concepts/categories-of-technical-leadership]] [[sources/how-ive-run-major-projects-ben-kuhn]] [[sources/define-cto-greg-brockman]] [[sources/a-reading-list-for-generalists-dylan-bowman]]
