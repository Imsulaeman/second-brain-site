---
title: "Unsupervised Learning"
type: concept
tags: [ai, machine-learning, patterns]
created: 2026-06-08
updated: 2026-06-09
sources: 1
---

# Unsupervised Learning

Unsupervised learning is a machine-learning approach in which a system looks for patterns, clusters, or structure in data without being given labeled answers in advance. Instead of learning "this input should map to that output," it asks what regularities exist in the data at all.

## What It Is Good For

This is useful when the goal is exploration rather than direct prediction: grouping similar cases, reducing complexity, surfacing latent structure, or spotting relationships that were not manually specified beforehand. A model might discover that customers break into several behavioral clusters, or that high-dimensional data can be compressed into a smaller number of meaningful dimensions.

## Why It Is Harder To Judge

Unsupervised learning is less straightforward to evaluate than [[concepts/supervised-learning|supervised learning]] because there is no single answer key. The output has to be judged by usefulness, interpretability, or downstream performance rather than by direct agreement with a label.

## What It Teaches

The deeper lesson is that not every learning problem begins with a known target. Sometimes the first job is to map the territory before predicting anything inside it. That is why unsupervised learning often sits upstream of later classification, feature design, or scientific insight.

## Sources

- [[sources/how-does-artificial-intelligence-learn]]
