---
title: "Loss Asymmetry"
type: concept
tags: [trading, mathematics, risk-management, psychology, investing]
created: 2026-06-25
updated: 2026-06-25
sources: 1
---

# Loss Asymmetry

Losses and gains of equal percentage are not equal in their effect on a portfolio. A 10% loss requires an 11% gain just to return to the starting point. The asymmetry grows sharply with the size of the loss:

| Loss | Gain required to recover |
|------|--------------------------|
| 10% | 11% |
| 20% | 25% |
| 30% | 43% |
| 50% | 100% |
| 75% | 300% |

A 50% drawdown requires doubling the remaining capital to get back to zero. This is not psychology — it is arithmetic. The math works against the trader who takes large losses.

## Why It Matters for Position Sizing

Loss asymmetry is the mathematical argument behind conservative position sizing. A single large loss forces you to generate outsized returns just to recover neutral ground — before making any progress. The more you lose, the harder recovery becomes, not linearly but exponentially.

This is also why [[concepts/risk-of-ruin]] accelerates so sharply with risk per trade. At small loss sizes the asymmetry is manageable. At large loss sizes it becomes compounding damage.

## The Practical Rule

Protecting capital is not defensive — it is the precondition for positive [[concepts/expectancy]] to express itself over time. A system with positive expectancy still loses if the account is ruined before the edge accumulates.

## Connections

- [[concepts/risk-of-ruin]] — loss asymmetry explains why risk of ruin grows non-linearly with position size
- [[concepts/position-sizing]] — the control mechanism; small enough position size keeps losses in the recoverable range
- [[concepts/expectancy]] — positive expectancy requires surviving long enough for the edge to accumulate

## Sources

- [[sources/the-math-of-winning-in-trading]]
