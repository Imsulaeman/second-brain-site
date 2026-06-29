---
title: "Ethan Perez"
type: entity
tags: [ethan-perez, anthropic, alignment, empirical-research, rlhf]
created: 2026-06-29
updated: 2026-06-29
sources: 2
---

# Ethan Perez

Ethan Perez is an alignment researcher at Anthropic. He has worked on scalable oversight, adversarial robustness, chain-of-thought faithfulness, process-based oversight, and model organisms of misalignment. His research style is strongly empirical and high-volume — running many cheap experiments fast rather than theorizing first.

His two ingested pieces together describe a coherent personal operating system for doing alignment research: how to select projects, how to prototype, how to know when to quit, and what separates high-impact contributors from busy ones.

---

## Research philosophy

**Bottom-up over top-down** — start from what seems tractable or interesting, figure out the problem it solves later. This is underrated in alignment culture, which encourages reading and theorizing first. The empirical loop (run something, see what happens, adjust) produces more confident knowledge faster. See [[concepts/bottom-up-research]].

**Reduce uncertainty as cheaply as possible** — a single chat-interface experiment often gives more bits per unit time than a large training run. The correct order is: zero-shot playground → few-shot manual → few-shot with data → best-of-N → SFT → RLHF. Jump rungs only when earlier ones fail. See [[concepts/tips-for-empirical-alignment-research]].

**Project selection red flags** — three conditions that should trigger switching: experiment loop > 1 day, fixed cost > 1 month, "even if successful, this wouldn't matter." See [[concepts/bottom-up-research]].

**2-page doc + share early** — write up the idea quickly and get feedback before investing. Juniors should not split attention across multiple projects; seniors can manage two with deliberate separation.

---

## Connections

- [[concepts/bottom-up-research]]
- [[concepts/tips-for-empirical-alignment-research]]
- [[concepts/forward-chaining-vs-backchaining]]

## Sources

- [[sources/how-i-select-alignment-research-projects-ethan-perez]]
- [[sources/tips-for-empirical-alignment-research-ethan-perez]]
