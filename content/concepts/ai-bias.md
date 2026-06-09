---
title: "AI Bias"
type: concept
tags: [ai, bias, ethics, fairness]
created: 2026-06-08
updated: 2026-06-09
sources: 1
---

# AI Bias

AI bias is the reproduction or amplification of unfair patterns, stereotypes, or unequal treatment in model outputs. It does not usually enter at one single step. It accumulates across the whole pipeline: what data was collected, how labels were assigned, which objective was optimized, and where the system is deployed.

## How Bias Enters

Some bias comes from historical data. If the world being recorded was already unequal, a model can learn those distortions as if they were ordinary structure. Some bias comes from labels and target design. A system trained to predict who is "qualified," "risky," or "relevant" inherits whatever human judgments defined those categories in the first place.

Generative systems add another layer. They do not only classify old cases. They can create new text or images that reflect and amplify recurring associations in the data they absorbed.

## Concrete Examples

The *Gender Shades* result is a useful anchor because it made error asymmetry visible: commercial gender-classification systems were much less accurate for darker-skinned women than for lighter-skinned men. That is bias expressed as uneven performance across groups, not just rude wording.

The Stable Diffusion example shows the generative version of the same problem. A model can repeatedly associate professions, appearances, or social roles with stereotyped race and gender patterns, then reproduce those patterns at scale. Once those outputs feed hiring, education, policing, or other institutional settings, the harm stops being representational and becomes operational.

## Why It Feels More Objective Than It Is

Bias is often harder to notice in software because scores, rankings, and generated outputs look impersonal. A system can feel neutral precisely because it is numerical. That appearance is part of the danger. The source warns that technology can add a veneer of objectivity that makes people less willing to question the output, even when the output is carrying old distortions forward.

## What To Ask

The practical questions are straightforward:

- What population produced the data?
- What target is the system actually optimizing?
- Which groups bear the cost of false positives and false negatives?
- Does the model perform unevenly across different contexts or populations?
- Is the output being treated as neutral just because it came from software?

These questions connect AI bias to [[concepts/supervised-learning|supervised learning]], where labels and targets shape what the model learns, and to [[concepts/epistemic-humility]], because high confidence from a system is not evidence of fairness.

## Sources

- [[sources/when-ai-gets-it-wrong]]
