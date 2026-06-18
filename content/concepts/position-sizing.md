---
title: "Position Sizing"
type: concept
tags: [trading, investing, risk-management, ergodicity, survival, sizing]
created: 2026-05-10
updated: 2026-06-18
sources: 10
---

# Position Sizing

Position sizing is the rule for how much capital to put at risk in a trade or investment. It is the bridge between having an idea and surviving the consequences of being wrong.

The beginner version is simple: **define the maximum acceptable loss before entry, then choose size from that loss limit.** Do not choose size from excitement, conviction, or how much money you want to make.

---

## Why It Matters

Sizing is not an afterthought. In repeated-risk games, bad sizing can ruin a trader even when the underlying idea has positive expected value. This is the practical trading implication of [[concepts/ergodicity]]: one person's path through time matters more than the average outcome across all possible worlds.

The question is not only "Is this a good trade?" but:

- Can I survive being wrong?
- Can I survive being right too early?
- Can I survive a streak of losses?
- Can I keep learning after this trade?

If the answer is no, the size is too large.

Sizing pairs with [[concepts/risk-reward-ratio]]: CFI's master-trader rule is to skip trades where potential gain is small relative to defined stop risk — no size can rescue negative expectancy setups.

[[sources/trading-in-the-zone]] adds a psychological gate: size must be small enough that you **[[concepts/accepting-risk-in-trading|accept the risk]]** of the full 20-trade sample worst case — otherwise fear, not math, drives execution. Predefining risk is principle #2 of [[concepts/seven-principles-of-consistency]]; if it takes willpower each time, the belief is not yet installed.

---

## The Basic Formula

```text
position size = allowed loss / distance to invalidation
```

Example:

- Account: 10,000
- Max risk: 1% = 100
- Entry: 50
- Invalidation/stop: 45
- Risk per share: 5
- Position size: 100 / 5 = 20 shares

The important part is not the exact percentage. The important part is that loss is chosen before ego gets involved.

[[sources/art-of-trading-with-light-su-zhu-and-hasu]] adds a useful refinement: invalidation should usually exist at two levels. There is the price-level invalidation that tells you where the market has moved far enough against you to force review or exit. And there is thesis invalidation, where the facts, structure, or market behavior that justified the trade have broken down even if price has not cleanly hit a stop.

---

## Beginner Sizing Rules

- Risk tiny while learning.
- Size down after rule-breaking losses.
- Never size up to "make it back."
- Never use leverage to compensate for weak edge.
- Increase size only after repeated evidence of process quality.
- Keep most capital outside the learning account.
- Treat every large emotional reaction as evidence the position is too big.

[[sources/dealing-with-loss]] makes the psychological point: after a major loss, anchoring to the old high-water mark creates the urge to recover quickly. That urge is exactly how traders turn one loss into a second, larger loss.

---

## Sizing vs Conviction

Conviction is not enough. A trader can be highly confident and still wrong, early, illiquid, or unable to withstand volatility.

Better sizing considers:

| Factor | Sizing Implication |
|---|---|
| Edge quality | Better edge can justify more size, but only after evidence. |
| Volatility | Higher volatility requires smaller size. |
| Liquidity | Harder exits require smaller size. |
| Leverage | Leverage demands stricter limits. |
| Correlation | Similar positions should be treated as one larger bet. |
| Emotional pressure | If it distorts behavior, size is too high. |

## Taleb's Tail-Risk Warning

[[sources/fooled-by-randomness]] sharpens the sizing rule: size must be designed around bad [[concepts/alternative-histories]], not the path that happened recently. High confidence after a winning streak is especially dangerous if the strategy has negative [[concepts/skewness-and-asymmetry|skew]]: many small wins can train a trader to increase size right before the rare loss arrives.

Practical addition: before increasing size, ask whether recent performance proves edge or merely proves survival in a favorable sample.

---

## Liquidity-Adjusted Sizing

At larger capital sizes, price impact becomes a material cost. [[sources/art-of-trading-with-light-su-zhu-and-hasu]] makes this explicit: a large player cannot always enter or exit cleanly. They may have to buy on the way down and sell on the way up — not because they chose to, but because that is the only way to build or exit a position without moving the market against themselves. Slippage and price impact eat into expected value in ways that are invisible in small-position thinking.

The implication: the larger the position, the higher the required EV threshold before entry. A marginal edge at small size might have negative expected value at large size once price impact is accounted for. Ignoring this is how large players routinely subsidize their own entries and exits.

Practical corollary: if the exit liquidity will not be there when you are wrong, the position is too large regardless of conviction.

## Connection To Edge

[[concepts/kelly-criterion]] gives the theoretical growth-optimal fraction when edge and payoff distribution are known; [[sources/understanding-the-kelly-criterion]] and [[sources/the-kelly-criterion-thorp-2006]] both recommend **fractional Kelly** in practice because edge estimates err high and drawdowns at full Kelly are brutal. Stop-based sizing in this page remains the better default for discretionary traders; Kelly is the ceiling check.

Sizing should follow [[concepts/trading-edge]], not replace it. A weak idea does not become good because the size is small; a good idea can become fatal because the size is too large.

The order should be:

1. Identify the edge.
2. Define invalidation.
3. Estimate downside and exit liquidity.
4. Choose size.
5. Journal the decision.

---

## Sources

- [[sources/fooled-by-randomness]]
- [[concepts/ergodicity]]
- [[concepts/kelly-criterion]]
- [[sources/the-jackpot-age]]
- [[sources/dealing-with-loss]]
- [[sources/life-lessons-from-trading]]
- [[sources/art-of-trading-with-light-su-zhu-and-hasu]]
- [[synthesis/beginner-trader-investor-learning-path]]
- [[sources/the-complete-guide-to-trading]]
- [[sources/trading-in-the-zone]] — accept 20-trade worst-case risk; predefine as identity not effort
- [[sources/understanding-the-kelly-criterion]] — portfolio Kelly, fractional sizing, overbetting warnings
