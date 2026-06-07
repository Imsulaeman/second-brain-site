---
title: "Naive Bayes"
type: concept
tags: [machine-learning, classification, probability, bayesian-thinking]
created: 2026-06-07
updated: 2026-06-07
sources: 1
---

# Naive Bayes

Naive Bayes is a classification method that chooses the most likely class for a case by combining prior class probabilities with the probability of seeing that case's features under each class.

The "naive" part is the big simplification: it assumes the features are independent from one another once the class is known. That assumption is often false in the real world, but it makes the calculation simple enough to be useful.

## How it works

The method asks:

- how common is each class to begin with?
- if the class were A, how likely would these features be?
- if the class were B, how likely would these features be?

Then it picks the class with the highest resulting conditional probability.

This is one of the cleanest examples of turning Bayesian logic into an actual prediction rule. In [[sources/introduction-to-algorithms-and-machine-learning]], it appears after other classification methods, which is useful pedagogically: by that point, the student can feel the contrast between similarity-based classification like [[concepts/k-nearest-neighbors|K-nearest neighbors]] and probability-based classification like Naive Bayes.

## Why the independence assumption matters

Naive Bayes works by pretending that the evidence dimensions do not interact with each other once the class is fixed. That is rarely strictly true. But if the dependency violations are not too destructive, the method can still perform surprisingly well.

So the idea is less "this model is realistic" and more "this model is tractable and often good enough."

## What it teaches beyond the algorithm

Naive Bayes is a good reminder that a useful model does not need perfectly true assumptions. Sometimes a deliberately simplified model outperforms a more realistic but more brittle one. That is one technical expression of [[concepts/reasonable-expectations|reasonable expectations]] in modeling.

## Limits

- Strongly dependent features can mislead the model.
- Good probability estimates depend on decent data coverage.
- It is better at some kinds of coarse classification than at capturing rich interacting structure.

## Sources

- [[sources/introduction-to-algorithms-and-machine-learning]]
