---
title: "Superalignment Problem"
type: concept
tags: [ai, alignment, safety, superintelligence, rlhf]
created: 2026-05-16
updated: 2026-05-16
sources: 1
---

# Superalignment Problem

The technical challenge of reliably controlling and aligning AI systems that are much smarter than humans. Distinct from current alignment (which works via RLHF because humans can evaluate AI outputs) because human supervision fundamentally breaks down when the AI is superhuman.

## Why RLHF Breaks Down

RLHF (Reinforcement Learning from Human Feedback) works by having humans rate AI outputs as good or bad. This works when humans can understand and evaluate the outputs. But a superhuman AI generating a million lines of code in a novel programming language, or producing scientific insights beyond human comprehension, cannot be meaningfully supervised this way.

As [[entities/leopold-aschenbrenner]] frames it in [[sources/situational-awareness]]: it would be like first graders trying to supervise PhD graduates.

## The Intelligence Explosion Makes It Urgent

The transition from familiar AGI (where RLHF++ works fine) to vastly superhuman systems (where it doesn't) may happen in less than one year during the [[concepts/intelligence-explosion]]. This means:
- Almost no time to iteratively discover and fix alignment failures
- The first serious alignment failure might already be catastrophic
- The superintelligence at the end will be alien (different architecture, uninterpretable reasoning)
- Extreme pressure from international competition to move fast

## Research Bets

Aschenbrenner identifies several promising directions for crossing the gap to somewhat-superhuman alignment:

- **Evaluation > generation**: Easier to spot bad outputs than produce good ones
- **Scalable oversight**: AI assistants help humans supervise other AIs (debate, recursive reward modeling)
- **Generalization**: Alignment on easy tasks may transfer to hard tasks (weak-to-strong generalization experiments)
- **Interpretability**: Mechanistic (bottom-up, very hard), top-down (lie detectors, representation engineering), and chain-of-thought legibility
- **Adversarial testing**: Red-teaming, sleeper agent detection, alignment measurement science

## Automated Alignment Research

The critical dependency: align somewhat-superhuman systems well enough to trust them, then use those systems to automate alignment research for even more powerful systems. There is no way humans alone can directly solve alignment for true superintelligence.

## Superdefense

Beyond alignment itself, multiple defensive layers: airgapped clusters, monitoring systems, control protocols (trusted weaker models policing untrusted stronger ones), targeted capability limitations, and training method restrictions (e.g., avoiding long-horizon outcome-based RL that may produce dangerous internal goals).

## Sources

- [[sources/situational-awareness]] - Part IIIc: Superalignment