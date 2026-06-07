---
title: "Decision Trees"
type: concept
tags: [machine-learning, algorithms, classification, modeling]
created: 2026-06-07
updated: 2026-06-07
sources: 1
---

# Decision Trees

Decision trees are models that make predictions by splitting a problem into a sequence of branching questions. Each internal node asks for a distinction in the input, and each path keeps narrowing the case until it ends in a prediction.

## Why they are memorable

Decision trees make classification visible. Instead of hiding the logic inside a matrix of weights, they expose the sequence of distinctions directly:

- if feature A is above this threshold, go left;
- otherwise, go right;
- then ask the next question.

That makes them one of the most interpretable model families in machine learning.

## What the tree is really doing

A decision tree is trying to find distinctions that separate categories cleanly. In a good tree, each split does real explanatory work. In a bad tree, the split is arbitrary, fragile, or too specific to the training sample.

This is why the concept is not just about classification. It is also about disciplined partitioning. A complex space becomes manageable when the right distinctions are made in the right order.

## Why the book's placement matters

In [[sources/introduction-to-algorithms-and-machine-learning]], decision trees appear after regression, classification basics, graph work, and before neural-network training deepens. That placement is smart. Trees sit at a useful midpoint between transparent hand-readable rules and more opaque learned systems. They show that machine learning can still have inspectable structure before the reader moves into models that are harder to read internally.

## Connection to problem framing

Decision trees connect naturally to [[concepts/problem-framing|problem framing]]. Both force you to ask what distinction is actually doing the work. A bad split in a tree is like a bad frame in a problem: everything downstream becomes worse. A good early distinction simplifies everything that follows.

They also relate to [[concepts/critical-thinking]] because both involve testing whether a distinction is genuinely relevant or just superficially available.

## Limits

Trees can become brittle, overly deep, or too tailored to a small sample. A perfectly descriptive tree is not automatically a good generalizing tree. So decision trees also live near [[concepts/bias-variance-tradeoff]]: interpretability does not exempt them from overfitting.

## Sources

- [[sources/introduction-to-algorithms-and-machine-learning]]
