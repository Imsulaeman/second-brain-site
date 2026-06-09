---
title: "Supervised Learning"
type: concept
tags: [ai, machine-learning, prediction]
created: 2026-06-08
updated: 2026-06-09
sources: 1
---

# Supervised Learning

Supervised learning is a machine-learning approach in which a model learns from examples that already include the desired answer or label. The basic pattern is simple: show the system many cases, compare its predictions to known outcomes, and adjust its internal parameters so future predictions improve.

## The Core Structure

Each training example pairs an input with a target. The input might be an image, sentence, medical record, or transaction log. The target might be a category, number, or yes-no decision. Learning means finding parameter settings that map inputs to outputs well enough to generalize beyond the training set.

This is the standard mode for classification and prediction tasks because it gives the system a clear feedback signal. It is also why data quality matters so much. If the labels are noisy, biased, or too narrow, the model can only learn a distorted version of the task.

## Strength And Constraint

Supervised learning is powerful because it turns messy judgment into a trainable objective. It is limited because the objective has to be specified in advance. The model does not discover what should matter on its own. It gets better at the question you asked, not necessarily the deeper question you meant.

That makes it closely related to [[concepts/ai-bias]], since bad labels and proxy targets can scale unfairness, and clearly distinct from [[concepts/unsupervised-learning|unsupervised learning]], where the system searches for structure without labeled answers.

## Sources

- [[sources/how-does-artificial-intelligence-learn]]
