---
title: "Reinforcement Learning"
type: concept
tags: [ai, machine-learning, feedback]
created: 2026-06-08
updated: 2026-06-09
sources: 1
---

# Reinforcement Learning

Reinforcement learning is a machine-learning approach in which a system improves by receiving feedback about the consequences of its actions over time. Instead of being handed the right answer for each example, it acts, gets some reward or penalty, and adjusts so that better action patterns become more likely later.

## How It Works

The core setup has three moving parts: an agent, an environment, and a reward signal. The agent chooses an action. The environment responds. The reward tells the agent whether that action moved it in a useful direction. Over many rounds, the system learns a policy: a rough answer to "what should I do in this kind of state?"

This is different from [[concepts/supervised-learning|supervised learning]], where the target answer is already labeled, and from [[concepts/unsupervised-learning|unsupervised learning]], where the system is mainly looking for structure in data. Reinforcement learning is about sequential choice under feedback.

## Why Reward Design Matters

The reward function is the hidden curriculum of the system. If it measures the wrong thing, the model can become very good at the wrong behavior. That is why reinforcement learning is often less about raw optimization than about specifying what "better" really means.

## Where It Fits

The approach is useful when actions shape future states: games, robotics, recommendation loops, and other settings where decisions are not isolated one-shot predictions. Its appeal is that it can learn strategy, not just classification. Its risk is that badly chosen rewards can create brittle or perverse behavior.

## Sources

- [[sources/how-does-artificial-intelligence-learn]]
