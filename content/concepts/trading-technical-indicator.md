---
title: "Trading Technical Indicators"
type: concept
tags: [technical-analysis, trading, charts, momentum, trends]
created: 2026-06-18
updated: 2026-06-18
sources: 1
---

Technical indicators are math applied to price and volume — overlays or sub-charts that compress market behavior into lines, histograms, or candlestick patterns. CFI splits them into **trend indicators** (which way is price moving?) and **momentum indicators** (how hard is it moving?). Neither type is edge by itself; they are filters, confirmation tools, and vocabulary for reading charts inside [[concepts/fundamental-vs-technical-analysis|technical analysis]].

The failure mode is indicator overload. Retail platforms ship dozens of tools; what works on one symbol or timeframe may fail on another ([[concepts/market-specialization]]). Treat indicators as a **stack** — trend context, momentum confirmation, [[concepts/support-and-resistance|structure]], then [[concepts/risk-reward-ratio|risk/reward]] — not as standalone buy/sell oracles.

## Trend indicators

**Moving averages** — smooth price over N periods. Common sets: 20/50/200 on dailies; 10/21 EMAs on short scalps. Crossovers signal regime shifts; see [[concepts/golden-cross-death-cross]] for the 50/200 institutional benchmark.

**ADX (Average Directional Index)** — Welles Wilder's measure of **trend strength**, not direction. Shown 0–100 in a sub-chart. Below ~25 (some use 20) = range-bound chop; above 25 = genuine trend forming; 25–50 moderate; 50–100 strong. Rising ADX slope can warn of a developing trend before the line crosses 25 — but slopes can reverse early (false starts). Pair ADX with direction tools: e.g. breakout through [[concepts/support-and-resistance|support/resistance]] plus rising ADX suggests continuation, not a one-bar fake. ADX divergence (price up, ADX falling) can flag fading momentum.

**Triangle patterns** — price compresses between converging trendlines: ascending (bullish breakout bias), descending (bearish), symmetrical (break either way). Traders wait for **breakout confirmation** before acting; stops often sit beyond the triangle's opposite boundary.

## Momentum indicators

**MACD (Moving Average Convergence Divergence)** — Gerald Appel's oscillator: typically 12-day EMA minus 26-day EMA, with a 9-day signal line. MACD crossing **above** signal = bullish crossover; below = bearish. Distance from zero reflects momentum intensity. MACD **divergence** from price (new price high, MACD not confirming) is widely read as trend-exhaustion warning — but shallow crossovers and volatile underlyings produce noise. CFI's habit: combine MACD with a trend filter (e.g. moving average) so entries require both price level and momentum alignment.

**RSI and Stochastic** — other common momentum oscillators CFI groups with MACD/ADX; measure overbought/oversold relative to recent range. Same caveat: extremes can persist in strong trends.

## Breadth and sentiment

**TRIN (Trading Index / Arms Index)** — Richard Arms' **market breadth** oscillator for index traders (S&P 500, NASDAQ). Formula: (advancing issues ÷ declining issues) ÷ (advancing volume ÷ declining volume). Interpretation is **inverted**: low TRIN (&lt;0.50 classically) = buying pressure, possibly overbought; high TRIN (&gt;3.00) = selling pressure, possibly oversold; ~1.00 = balance. The "textbook" 0.50/3.00 bands are loose — analysts often calibrate extremes to the current regime (e.g. 0.75–2.25). TRIN is volatile intraday and prone to false signals; many smooth with a 10-day TRIN moving average. Leading indicator reputation: may turn a day or two before the index — but CFI stresses **confirming price action** before trading reversals. Oversold TRIN buys historically fared better than overbought TRIN shorts in their example chart.

## Price-action patterns

**Pin bars (hammers)** — single-candle **rejection**: long tail (two to three times the body), tiny body, little or no wick on the opposite side. Bullish pin = buyers rejected lower prices; bearish pin = sellers rejected higher prices. Strength rises at prior support/resistance, pivots, or Fibonacci levels.

CFI's pin-bar scalp (5-minute chart): price extended away from 10- and 21-period EMAs; several consecutive bars in one direction; pin bar forms → bet on mean reversion. Short-term tool — can occasionally front-run a larger reversal, but scalping noise dominates.

## How to use the stack

1. **Regime** — trending vs ranging (ADX, moving averages, [[concepts/golden-cross-death-cross]]).
2. **Structure** — support/resistance, triangles, breakouts.
3. **Momentum** — MACD crossover or divergence, RSI/Stochastic if used.
4. **Breadth** (index context) — TRIN extremes vs equilibrium.
5. **Trigger** — pin bar or breakout with defined stop and [[concepts/risk-reward-ratio|risk/reward]].

[[concepts/random-walk-theory]] says none of this systematically beats the market; [[concepts/trading-edge]] says some traders still extract value from disciplined process. Livermore's [[concepts/line-of-least-resistance]] and [[concepts/sitting-tight]] are the psychological complement — indicators suggest; they do not replace invalidation and size discipline.

## Sources

- [[sources/the-complete-guide-to-trading]] — ADX, MACD, TRIN, triangles, pin-bar scalp, trend/momentum split
- [[concepts/fundamental-vs-technical-analysis]] — where indicators sit in the TA camp
- [[concepts/golden-cross-death-cross]] — MA crossover trend system
- [[concepts/support-and-resistance]] — structure for pin bars and breakouts