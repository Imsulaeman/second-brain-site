---
title: "K-Nearest Neighbors"
type: concept
tags: [machine-learning, classification, similarity, algorithms]
created: 2026-06-07
updated: 2026-06-07
sources: 1
---

# K-Nearest Neighbors

K-nearest neighbors is a prediction method that classifies a new case by looking at the most similar known cases nearby and letting those neighbors vote.

Its logic is almost embarrassingly direct: if things that are close to each other in feature space tend to belong to the same class, then a new point can be labeled by the company it keeps.

## Core intuition

K-nearest neighbors turns classification into a local comparison problem. You do not first fit a global equation or a branching rule. You store the examples, measure distance from the new point to each known point, choose the `k` closest, and predict from that small neighborhood.

In [[sources/introduction-to-algorithms-and-machine-learning]], Skycak uses cookie data to make the idea concrete. That matters because the method is easier to understand when you can picture actual neighboring points rather than abstract vectors.

## What makes it useful

K-nearest neighbors is often one of the first classification methods that feels intuitively honest. It does not pretend to know a big hidden law. It simply says: similar inputs often lead to similar outputs, so let's look nearby.

That gives it a family resemblance to [[concepts/inferencing]]. Both depend on drawing a conclusion from the closest relevant evidence rather than from a universal rule.

## The real choices

The method sounds simple, but several decisions control its behavior:

- what counts as "distance"
- how many neighbors `k` should be used
- whether all neighbors count equally or nearer ones get more weight
- whether the features are scaled in comparable ways

Choosing `k` is especially important. Too small, and the model becomes noisy and unstable. Too large, and it blurs together points that should remain distinct. That is why KNN naturally connects to [[concepts/bias-variance-tradeoff]].

## Limits

K-nearest neighbors can become slow on large data sets because it may need to compare against many stored examples. It also struggles when the chosen feature space does not reflect meaningful similarity. If "near" is the wrong notion, the whole method becomes misleading.

## Sources

- [[sources/introduction-to-algorithms-and-machine-learning]]
