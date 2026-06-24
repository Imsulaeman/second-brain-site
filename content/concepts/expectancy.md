---
title: "Expectancy"
type: concept
tags: [trading, math, probability, risk-management, edge]
created: 2026-06-24
updated: 2026-06-24
sources: 1
---

# Expectancy

Expectancy is the average profit or loss per trade across a large sample. It is the single number that tells you whether a trading system makes money — not how many trades you win, not how confident you feel, but what the system earns per bet in expectation.

$$
\text{expectancy} = (\text{win rate} \times \text{avg win}) - (\text{loss rate} \times \text{avg loss})
$$

Positive expectancy = profitable over time. Negative expectancy = losing over time regardless of discipline or psychology.

## Win Rate Is Not Expectancy

The most common confusion: high win rate ≠ profitable, low win rate ≠ unprofitable. What matters is the combination of win rate and reward multiple.

| System | Win rate | R multiple | Expectancy per trade |
|--------|----------|------------|----------------------|
| 8R | 15% | 8 | +350 |
| 3R | 55% | 3 | +1,200 |
| 1R | 70% | 1 | +400 |

A 15% win rate at 8R and a 70% win rate at 1R produce nearly identical expectancy. The edge lives in the combination, not in either parameter alone. Most traders obsess over win rate; the number that actually predicts profitability is expectancy.

## Paper vs. Real Expectancy

Backtested expectancy is not live expectancy. Every trade carries transaction costs: spread, commission, slippage. These reduce every winning trade and enlarge every losing one. A strategy that looks profitable on paper can fail live because those costs were never modeled.

Before claiming edge exists, subtract the full round-trip transaction cost from each average win.

## The System Design Tradeoff

There is no system that delivers both high reward and high win rate. The structural reason: the further price must travel to reach target, the less often it gets there. Higher reward → lower win rate. Higher win rate → smaller reward.

This is not a flaw in any particular strategy — it is how markets work.

The **breakeven win rate** quantifies the floor:

$$
\text{min win rate to break even} = \frac{1}{1 + R}
$$

At 4R, you only need to win 20% of trades to break even. You can be wrong 80% of the time and still not lose money — if transaction costs are low enough.

The sweet spot in practice is roughly 3–4R at 40–55% win rate. Both extremes — very high reward at very low win rate, or very high win rate at tiny reward — are harder to sustain after transaction costs and psychologically across a losing streak.

## Large Sample Required

Expectancy reveals itself only over a large sample. The first 10–30 trades carry enough variance to hide a profitable system or flatter a losing one. Judging a system on a handful of results is [[concepts/law-of-small-numbers]] in action.

The practical consequence: the most common way traders abandon a valid edge is by quitting too early. Normal short-term variance gets misread as system failure and the trader switches before the edge can express.

## Connections

- [[concepts/trading-edge]] — edge is the condition that makes positive expectancy possible; expectancy is how you measure whether it's real
- [[concepts/risk-reward-ratio]] — reward-to-risk and win rate are the two inputs to the formula; the ratio sets the tradeoff, expectancy tells you the output
- [[concepts/probabilistic-trading-mindset]] — thinking about a system over its full sample, not the last trade
- [[concepts/position-sizing]] — positive expectancy is necessary but not sufficient; sizing determines whether you survive long enough for the edge to express
- [[concepts/risk-of-ruin]] — the survival constraint; even a positive-expectancy system can be ruined if position size is too large relative to variance
- [[concepts/gamblers-fallacy]] — misreading variance as a changing probability; each trade is independent regardless of the streak
- [[concepts/law-of-small-numbers]] — the cognitive error behind quitting early

## Sources

- [[sources/the-math-of-winning-in-trading]]
