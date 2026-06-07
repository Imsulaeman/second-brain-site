---
title: "Backpropagation"
type: concept
tags: [machine-learning, neural-networks, optimization, gradients]
created: 2026-06-07
updated: 2026-06-07
sources: 1
---

# Backpropagation

Backpropagation is the procedure that lets a neural network figure out how each weight contributed to the final error so that [[concepts/gradient-descent|gradient descent]] can update those weights intelligently.

Without backpropagation, a deep model is just a complicated nested function. With backpropagation, the network can assign blame through the layers.

## Core idea

The network first computes a forward pass: given the inputs and current weights, what output does it produce? Then it measures the error between that output and the desired answer. Backpropagation works backward from that error, using the chain rule from calculus to compute how much each internal node and weight influenced the final mistake.

That is what makes it a bridge concept. It connects:

- neural networks as layered computational graphs,
- gradient descent as the update rule,
- calculus as the machinery that transports error backward.

In [[sources/introduction-to-algorithms-and-machine-learning]], this chapter matters because it removes one of the biggest sources of mystique in machine learning. Neural nets stop feeling like magic once the learner sees that the update is still just repeated error correction, only now through many linked layers.

## Why it matters

Backpropagation is the reason modern neural networks are trainable at all. It converts a giant opaque model into a structured differentiable system where each piece can receive a credit-or-blame signal.

That makes it a special case of a broader pattern already visible elsewhere in the wiki: progress depends on getting useful feedback to the place that needs changing. In humans that looks like [[concepts/deliberate-practice]]. In networks it looks like backpropagated gradients.

## Limits

Backpropagation is not the whole story.

- It only helps if the architecture, loss function, and data setup are sensible.
- It can still be hard to optimize deep or badly conditioned networks.
- It explains how to update weights, not why a given representation is the best one to learn.

## Sources

- [[sources/introduction-to-algorithms-and-machine-learning]]
