---
title: "Gradient Descent"
type: concept
tags: [math, machine-learning, optimization, algorithms]
created: 2026-06-07
updated: 2026-06-07
sources: 1
---

# Gradient Descent

Gradient descent is an iterative method for minimizing a function by repeatedly moving a guess in the direction that most reduces error. Instead of solving an optimization problem in one shot, it uses local slope information to keep taking downhill steps.

The image to keep in mind is a landscape. Height represents error. Your current position represents the current parameter choice. At each step, you ask: which direction goes down fastest here? Then you move a little in that direction and ask again. In one variable, this means using the derivative. In many variables, it means using the gradient vector.

## Why it matters

Gradient descent is one of the main ways modern modeling escapes the limits of closed-form solutions. Some models can be fit directly with algebraic tools like the pseudoinverse. But once the model gets more flexible, more nonlinear, or more layered, exact direct solutions become awkward or unavailable. Gradient descent turns fitting into repeated local correction.

That is why [[sources/introduction-to-algorithms-and-machine-learning]] introduces it more than once. Skycak teaches it first as a standalone optimization idea, then later as a way to fit regression models, and then again as the basis of [[concepts/backpropagation|backpropagation]] in neural networks. The book treats it not as an isolated chapter but as one of the main reusable moves in technical thinking.

## The real tension: step size

The hardest practical issue is not the basic idea. It is calibration.

- If the step size is too small, progress is painfully slow.
- If the step size is too large, the algorithm overshoots, oscillates, or diverges.
- If the surface has awkward geometry, the method can also get stuck or move inefficiently.

So gradient descent is really a lesson in controlled iteration. The update rule has to be directionally right and appropriately sized.

## Single-variable vs multivariable

The single-variable case is the clean intuitive version: if the derivative is positive, move left; if it is negative, move right. The multivariable case generalizes that by replacing one slope with a whole vector of partial slopes. This matters conceptually because it shows that the move from simple optimization to machine learning is not a leap into magic. It is the same logic scaled up.

## Why this concept survives the specific math

Gradient descent is also a broad pattern for improvement under feedback. You have:

1. a current state,
2. some way of measuring error,
3. local information about how error changes,
4. an update rule,
5. repetition.

That is why it connects so naturally to [[concepts/deliberate-practice]]. In both cases, improvement comes from repeated error-sensitive adjustment rather than one decisive act of understanding. The same metaphor appears in [[sources/dealing-with-loss]]: a trader who overcorrects after a loss oscillates around the optimal outcome indefinitely — the same failure mode as too large a step size in optimization.

## Limits

Gradient descent is powerful, but it is not universal.

- It depends on having a meaningful error surface and usable slope information.
- It can be sensitive to initialization and step size.
- It may find a good local solution rather than a globally best one.
- It explains how to improve parameters, not how to choose the right model family in the first place.

Those limits matter because beginners often treat it as a magic optimizer. It is better understood as a disciplined downhill procedure with strengths and failure modes.

## Sources

- [[sources/introduction-to-algorithms-and-machine-learning]]
