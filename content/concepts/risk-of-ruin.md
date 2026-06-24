---
title: "Risk of Ruin"
type: concept
tags: [trading, risk-management, probability, math, survival, ergodicity]
created: 2026-06-24
updated: 2026-06-24
sources: 1
---

# Risk of Ruin

Risk of ruin is the probability that a losing streak destroys enough capital to end a trading career before an edge has time to express. It measures survival, not profitability — a positive-expectancy system can still go broke if position size is too large.

## The Non-Linear Explosion

Risk of ruin does not scale proportionally with risk per trade. It accelerates:

| Risk per trade | Probability of 50% drawdown |
|---|---|
| 0.5% | low |
| 1% | ~18% |
| 2% | ~65% |
| 5% | approaches certainty |

Doubling risk per trade does not double ruin probability — it multiplies it. This non-linearity is the core warning. The math works against you faster than intuition suggests.

## Loss Asymmetry

Recovery from a drawdown requires a larger percentage gain on the reduced capital:

| Loss | Gain required to recover |
|---|---|
| 10% | 11% |
| 30% | 43% |
| 50% | 100% |
| 75% | 300% |

Losing half the account requires doubling the remaining balance just to return to the starting point. This asymmetry means each additional point of drawdown is progressively harder to claw back — which is why preventing large drawdowns matters more than capturing extra upside.

## The Practical Rule

A single bad week or bad month should not be able to destroy the account. Common guidance: keep risk per trade between 0.25% and 2%. At that range, a normal losing streak produces a painful but survivable drawdown. At 5% risk per trade, a modest run of losses can wipe the account before the system's edge has any chance to express.

This maps directly to [[concepts/ergodicity]]: for a career of repeated bets, what matters is path-dependent survival across time, not average expected value across all possible worlds. A path that includes a ruin event cannot continue.

## Connections

- [[concepts/position-sizing]] — the direct lever; risk of ruin is controlled by keeping size small enough
- [[concepts/ergodicity]] — the theoretical ground; time-average survival vs. ensemble average; ruin is a path-dependent event
- [[concepts/kelly-criterion]] — Kelly maximizes long-run growth but at full Kelly the drawdowns are severe; fractional Kelly trades off growth rate for survival probability
- [[concepts/expectancy]] — positive expectancy is necessary but not sufficient; ruin is the survival constraint that must be satisfied first

## Sources

- [[sources/the-math-of-winning-in-trading]]
