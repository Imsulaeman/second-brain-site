---
title: "OOMs Framework"
type: concept
tags: [ai, compute, scaling, measurement, progress, weak]
created: 2026-05-16
updated: 2026-05-16
sources: 1
---

# OOMs Framework

A framework for measuring AI progress in "orders of magnitude" (OOMs) of effective compute rather than benchmark scores or subjective impressions. Introduced in [[sources/situational-awareness]] by [[entities/leopold-aschenbrenner]].

## The Core Idea

From GPT-2 (2019) to GPT-4 (2023), AI systems gained roughly 5 OOMs of effective compute. This took capability from "preschooler" to "smart high-schooler" level. Projecting another ~5 OOMs forward (by ~2027) should yield systems at the level of automated AI researchers.

Effective compute is not just raw FLOPS. It is the product of three independent drivers:

1. **Compute scaleup** (~0.5 OOM/year): Physical investment in training clusters. Growing ~3x annually from $500M (GPT-4 class) toward $100B+ by 2027-28.
2. **Algorithmic efficiency** (~0.5 OOM/year): Better architectures, training methods, data curation. Historically halves the compute needed for equivalent performance roughly every 1-2 years.
3. **Unhobbling** (large, harder to quantify): Unlocking latent capability through RLHF, chain-of-thought, tool use, scaffolding, longer context, and agentic capabilities. The trajectory is chatbot -> agent -> drop-in remote worker.

## Why It Matters

The framework makes AI progress legible and extrapolable. Instead of debating vague capability claims, you can count the OOMs: how much more compute, how much algorithmic improvement, how much unhobbling. Each factor is independently measurable and has a track record.

It also reveals why progress feels like it accelerates: the three drivers multiply. Even moderate gains in each (0.5 OOM/year compute + 0.5 OOM/year algorithms + periodic unhobbling jumps) compound to dramatic capability leaps over a few years.

## The Data Wall

A key constraint within the framework: internet training data is nearly exhausted. Simple scaling of next-token prediction on web text hits diminishing returns. The next paradigm -- synthetic data, self-play, RL, test-time compute -- represents where the crucial algorithmic breakthroughs for AGI will come. These are the "algorithmic secrets" Aschenbrenner considers the most valuable and most poorly protected assets in AI.

## Sources

- [[sources/situational-awareness]] - Part I: Counting the OOMs
The OOMS framework combines inductive observation of market structure with deductive application of positioning and risk principles.
