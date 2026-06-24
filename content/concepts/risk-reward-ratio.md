---
title: "Risk/Reward Ratio"
type: concept
tags: [trading, risk-management, position-sizing, decision-making]
created: 2026-06-18
updated: 2026-06-18
sources: 1
---

Risk/reward ratio compares what you stand to lose if wrong against what you stand to gain if right. CFI's master-trader checklist: only take trades where being right pays **much more** than being wrong costs. Reject setups where a $50 loss is possible but $10 is the realistic upside — the math is hostile even with good analysis.

## Operational rules

- Use stop-loss orders; never let one trade threaten the account ([[concepts/position-sizing]]).
- Skip trades without a favorable, low-risk entry — a valid reversal with bad entry is still a pass.
- Positive risk/reward is necessary, not sufficient; you still need [[concepts/trading-edge|edge]] and [[concepts/decision-quality-vs-outcome|process review]].

Alexander Elder's line in the source: "The goal of a successful trader is to make the best trades. Money is secondary." Focus on setup quality; P&L follows distribution of outcomes.

## Breakeven Win Rate

R is the reward-to-risk multiple. Given R, the minimum win rate to break even is:

$$
\text{min win rate} = \frac{1}{1 + R}
$$

| R multiple | Min win rate to break even |
|---|---|
| 1R | 50% |
| 2R | 33% |
| 4R | 20% |
| 9R | 10% |

At 4R, you can be wrong 80% of the time and not lose money. This is the structural tradeoff: higher reward targets lower the win rate required to stay profitable. The actual win rate of your system, combined with the R multiple, determines [[concepts/expectancy]].

## Sources

- [[sources/the-complete-guide-to-trading]]
- [[sources/the-math-of-winning-in-trading]] — breakeven win rate formula; system design tradeoff
- [[concepts/position-sizing]]
- [[concepts/trading-psychology]]
- [[sources/art-of-trading-with-light-su-zhu-and-hasu]] — invalidation and nullification discipline