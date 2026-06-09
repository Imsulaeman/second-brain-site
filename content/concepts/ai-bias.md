---
title: "AI Bias"
type: concept
tags: [ai, bias, ethics, fairness]
created: 2026-06-08
updated: 2026-06-09
sources: 1
---

# AI Bias

AI bias is the reproduction or amplification of unfair patterns, stereotypes, or unequal treatment in model outputs. The mistake is to imagine bias as a moral stain added after the fact. In practice it usually enters through the whole pipeline: what data was collected, what labels were applied, what target was optimized, what context the system is deployed into, and what counts as a good result.

## How Bias Enters

Some bias comes from the training set itself. If historical records reflect discrimination, a model trained on them can learn those patterns as if they were neutral facts. Some bias comes from labeling and task design. A dataset that asks humans to decide what counts as "toxic," "relevant," or "qualified" imports human judgment into the system in compressed form.

Deployment adds another layer. A model that performs acceptably in one context can become biased in another because the stakes, population, or error costs change. A hiring filter, medical triage tool, or content moderation model does not just predict. It redistributes opportunity, scrutiny, or risk.

## Why It Feels Objective

AI bias is hard to notice because numerical outputs look impersonal. A ranked list, score, or classification can feel cleaner than an openly prejudiced human judgment. That appearance of objectivity is part of the danger. It can hide the fact that the model is scaling old distortions or creating new ones through proxy variables and uneven error rates.

## What To Check

The practical questions are straightforward:

- What population produced the data?
- What target is the system actually optimizing?
- Which groups bear the cost of false positives and false negatives?
- Does the system work equally well across contexts, or only on the benchmark it was trained for?

Those questions connect AI bias to [[concepts/supervised-learning|supervised learning]], where labels and targets shape the model, and to [[concepts/epistemic-humility]], because high confidence from a model does not prove fair or complete understanding.

## Sources

- [[sources/when-ai-gets-it-wrong]]
