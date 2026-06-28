---
title: "The Math of Winning in Trading"
type: source
tags: [trading, math, expectancy, risk-management, probability, variance]
created: 2026-06-24
updated: 2026-06-24
sources: 1
---

# The Math of Winning in Trading

Mulham Trading. YouTube video, ~14 minutes. Channel: mulhamtrading.

The core argument: most traders focus on entries, psychology, and indicators while ignoring the one number that determines whether a system makes money over time — [[concepts/expectancy]]. The video covers four mathematical concepts that decide profitability and one reflective question that turns the lesson inward.

## Teachable Units

### 1. Expectancy — the only number that matters

$$
\text{expectancy} = (\text{win rate} \times \text{avg win}) - (\text{loss rate} \times \text{avg loss})
$$

Win rate alone is not the edge. A 15% win rate at 8R and a 70% win rate at 1R produce nearly identical expectancy. The combination of win rate and reward multiple creates the edge, not either parameter alone.

Most traders track entries and setups. Almost none track expectancy — the number that actually tells you whether the system makes money.

### 2. Hidden transaction costs

Paper expectancy is not real expectancy. Spread, commission, and slippage cut into every trade. A strategy that looks profitable in backtests can fail live if those costs were not modeled. The true expectancy is always lower than the paper version.

### 3. System design tradeoff

There is no system that delivers both high win rate and high reward. The structural reason: the further price must travel to reach target, the less often it gets there. The tradeoff is a feature of markets, not a flaw in strategy design.

The breakeven win rate formula quantifies the floor:

$$
\text{min win rate to break even} = \frac{1}{1 + R}
$$

At 4R, you only need to win 20% of trades to break even. You can be wrong 80% of the time and not lose money.

The sweet spot is roughly 3–4R at 40–55% win rate. Very high reward at very low win rate, or very high win rate at tiny reward, are both harder to sustain after transaction costs and psychologically.

### 4. Variance — why good execution can still lose

The same system with the same rules and same expectancy can produce wildly different equity curves for different traders. One gets a smooth ride up; another gets a brutal drawdown before recovering. Both are executing identically.

Variance means short-term results prove nothing. You can execute correctly and lose seven trades in a row. You can break every rule and win five in a row. Only a large sample — typically 100+ trades — reveals whether the system has real edge.

The most dangerous conclusion from variance: quitting a valid edge because the short-term draw looks bad. Normal variance is what most traders mistake for system failure.

### 5. Gambler's fallacy

After a losing streak, the mind creates the illusion that the next trade is "due" to win. This is [[concepts/gamblers-fallacy]]: every trade is independent. A prior losing streak does not change the probability of the next trade. If your system has 50% win rate, the fifth loss in a row is still followed by a 50% chance on the next trade — not 82%, not 91%, still 50%.

The fallacy produces two dangerous responses: increasing size to "recover," and abandoning the system before its edge can express.

### 6. Position sizing mechanics

Dollar risk stays constant across trades; position size adjusts for stop loss distance. Bigger stop → smaller position. Smaller stop → larger position. This keeps monetary risk identical even when trade structure changes.

Practical guidance: keep risk per trade between 0.25% and 2%. At that range, a normal losing streak creates drawdown but not ruin.

### 7. Risk of ruin and loss asymmetry

[[concepts/risk-of-ruin]] is the probability that normal variance destroys capital before edge can express. It explodes non-linearly with risk per trade:

| Risk per trade | Probability of 50% drawdown |
|---|---|
| 1% | ~18% |
| 2% | ~65% |
| 5% | approaches certainty |

Doubling risk per trade does not double ruin probability — it multiplies it.

Loss asymmetry compounds the problem. Losses and gains are not symmetric:

| Loss | Gain required to recover |
|---|---|
| 10% | 11% |
| 30% | 43% |
| 50% | 100% |

Losing half the account requires doubling the remaining balance just to return to the start. This makes capital preservation worth more than extra upside.

### 8. The one question

After establishing the math: what is the one thing you know you're doing wrong that, if fixed, would completely change your trading? Common answers: judging the system after five trades, risking too much to feel something (seeking emotion rather than edge), confusing good outcomes with good execution, abandoning edge when variance appears.

The prescription: think in probabilities not outcomes, judge edge over large samples, risk small enough to survive variance, focus on execution not prediction.

## Connections

- [[concepts/expectancy]] — dedicated concept page
- [[concepts/risk-of-ruin]] — dedicated concept page
- [[concepts/gamblers-fallacy]] — dedicated concept page
- [[concepts/loss-asymmetry]] — why large losses are arithmetically harder to recover than they appear
- [[concepts/variance-in-trading]] — why short-term results don't validate or invalidate a system
- [[concepts/position-sizing]] — the lever that controls risk of ruin
- [[concepts/probabilistic-trading-mindset]] — Douglas's parallel teaching from a belief/psychology angle
- [[concepts/trading-edge]] — edge is the precondition; expectancy is how you measure it
- [[concepts/risk-reward-ratio]] — one of the two inputs to the expectancy formula
- [[concepts/law-of-small-numbers]] — the cognitive error behind quitting early and the gambler's fallacy

## Sources

- Raw: Mulham Trading YouTube video (~14 min)
