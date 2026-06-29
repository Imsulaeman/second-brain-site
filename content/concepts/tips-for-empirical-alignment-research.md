---
title: "Tips for Empirical Alignment Research"
type: concept
tags: [alignment, empirical, research, tips, workflow]
created: 2026-06-29
updated: 2026-06-29
sources: 2
---

# Tips for Empirical Alignment Research

A practical framework for high-volume, rapid-iteration empirical work in LLM alignment research (scalable oversight, adversarial robustness, CoT faithfulness, process-based oversight, model organisms of misalignment). The approach prioritizes reducing uncertainty at the fastest possible rate using cheap, high-signal experiments before committing to expensive runs.

## Core Success Criteria

Strong individual contributors tend to meet weighted criteria (weights and emphasis vary by role and experience level; these are north stars, not hard gates):

- ~70% Getting ideas to work quickly
  - Implementation speed (~45%): Quickly implement well-scoped ideas (results the next day after discussion); run high volume of experiments so that weekly meetings are too short to cover everything; design minimal, parallelizable experiments; bias toward speed but invest in quality/tooling when it becomes the bottleneck; ask for help shamelessly when stuck.
  - Ability to get things to work (~25%): Experiments “just work”; independently suggest and choose good next steps; diagnose failures and iterate to SOTA; make others’ ideas succeed by trying the right quick things.
- ~20% Driving project direction
  - Day-to-day prioritization and experiment design (~10%).
  - High-level direction spotting (~10%): independently surface important directions, deconfuse the team, derisk new ideas with working prototypes.
- Clear communication of results and proposals.
- Team and management skills (varies): being a great teammate, easy to manage, proactive about improvements.

## Tactical Approach and Workflow

The key mental model is to reduce uncertainty as fast and cheaply as possible (single chat messages often give 1+ OOM more bits per unit time than large training runs).

Preferred order for prototyping “get the model to do X”:

1. Zero-shot high-volume playgrounding in chat interfaces (ChatGPT, Claude, Gemini): 10–100 messages, explicit prompts, full context, instructions to avoid common failure modes.
2. Manual few-shot in chat.
3. Full few-shot with labeled data (fill context if useful).
4. Best-of-N sampling (often surprisingly strong; N=8–100 with classifier or RM).
5. Supervised finetuning (start with API defaults; ensure test loss beats random; watch both loss and accuracy).
6. RL(HF) only as last resort.

## Practical Techniques

- Use automatic proxy metrics or data-atlas visualizations when scanning large numbers of samples.
- Lower temperature/top-p for higher quality when needed; increase N in BoN.
- Master keyboard shortcuts; never lose flow to the mouse.
- Always surface proposed next experiments + prioritization when presenting results.
- Plot with log axes and look for power laws; many LLM scaling/ performance curves only become visible this way.
- Reading papers has low value-of-information except when starting a new project, when a highly relevant paper drops, or in areas with substantial prior work.

## Mindset

- Every experiment is a win if it produces information. “It didn’t work” is often the most valuable outcome.
- Bias toward quick, parallel, cheap experiments early; only scale up once uncertainty is reduced.
- Notice when direction or next step is unclear and raise it immediately.
- You have permission — and are expected — to exercise agency and taste.

## Sources

- [[sources/tips-for-empirical-alignment-research-ethan-perez]]
- [[sources/a-reading-list-for-generalists-dylan-bowman]]
