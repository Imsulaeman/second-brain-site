---
title: "Neuroevolution"
type: concept
tags: [machine-learning, games, optimization, evolution]
created: 2026-06-07
updated: 2026-06-07
sources: 1
---

# Neuroevolution

Neuroevolution is the use of evolutionary search to improve neural networks instead of, or alongside, direct gradient-based training.

Rather than computing exact gradients and nudging weights downhill, neuroevolution creates many candidate networks, evaluates how they perform, keeps the better ones, mutates them, and repeats. The model improves by selection pressure rather than by backpropagated derivatives.

## Why it is interesting

Neuroevolution shows that "learning" does not always mean gradient descent. A system can also improve by variation, competition, and survival. In [[sources/introduction-to-algorithms-and-machine-learning]], this becomes vivid in the Blondie24 chapters, where game-playing strength emerges from evolutionary pressure rather than from imitation of expert human play.

That makes neuroevolution a useful contrast concept:

- [[concepts/backpropagation]] says: compute gradients through the model and update directly.
- Neuroevolution says: search the space of models by generating and selecting variants.

## What it buys you

Neuroevolution can be attractive when:

- gradients are awkward or unavailable,
- the evaluation signal is naturally game-like or competitive,
- architecture and parameters may both need to evolve,
- exploration matters more than neat local improvement.

It treats model-building less like solving an equation and more like breeding increasingly capable agents.

## Limits

Evolutionary search can be expensive and noisy. It may require many evaluations, and progress can be hard to predict. It also does not escape the deeper problem of designing a useful evaluation environment. If the selection pressure is poor, the evolved system can become impressive at the wrong game.

## Why this concept matters beyond ML

Neuroevolution is one technical version of a broader idea: some forms of intelligence emerge less from explicit instruction than from competitive selection under feedback. That makes it an interesting neighbor to [[concepts/agentic-coding-workflows]] and [[concepts/deliberate-practice]], even though the mechanism is different.

## Sources

- [[sources/introduction-to-algorithms-and-machine-learning]]
