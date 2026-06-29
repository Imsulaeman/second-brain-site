---
title: "Tips for Empirical Alignment Research — Ethan Perez"
type: source
tags: [alignment, empirical, research, tips, ethan-perez]
created: 2026-06-29
updated: 2026-06-29
sources: 1
---

# Tips for Empirical Alignment Research — Ethan Perez

TLDR: collected tips for research (given to others/used self) that sped things up and helped right mindset for empirical AI alignment (scalable oversight, adv robustness, CoT faithfulness, process-based, model organisms of misalignment). Opinionated takes around what helped. Researchers successful different ways, but reasonable default.

## What Success Generally Looks Like

Specific criteria strong collaborators meet (rough weightings; vary by role/skills; junior upweight execution; high bar but 6-18mo practice reachable; not talent/brains bottleneck vs deliberate practice — was bad at some like impl speed ~6mo in, improved). North star.

- 70% Getting ideas to work quickly
  - 45% Implementation speed
    - Quickly implement well-scoped (talk idea today, tell tomorrow if worked).
    - High volume experiments (hard supervisor keep up in 30/60min meetings; filter important/decision-relevant; if long run, parallel or implement next).
    - Design minimal experiment to test mid/high-level idea (rarely compute/expt-time bottlenecked early; exceptions: >overnight no shorter way, or very impl-heavy).
    - Trade code quality/speed best for long-run (bias speed; improve when slows project).
    - Notice slow, quickly shamelessly ask help.
  - 25% Ability to get things to work
    - Things "just work"; if trying make number go up, it does. After iterate, method SOTA.
    - Suggest/choose good next steps fairly independently (between meetings; if 1h/wk + Slack, sufficient track/max valuable).
    - Diagnose why not working, make fixes.
    - Get ideas working others couldn't (effective coming good quick ideas, predict, try lots).
- 20% Driving the project direction
  - 10% Medium/low-level, day-to-day
    - Knowing/determining well-motivated Qs important, prioritize/design expts answer.
    - Good decisions approach/eval metrics (run right version first time).
    - Effective independently.
    - Notice unsure most important Q or lost, ask help.
    - Proactively propose/suggest great next (better than supervisor, thumbs up or minor).
  - 10% High-level/conceptual
    - Independently determine important directions (source/filter others or own ideas/reading/expts).
    - Notice could answer more important Q or lost, initiative deconfuse (doc, lead discussion, 1:1, external org meeting).
    - Spot great project ideas, "just go for it," try without asking, working prototype, derisk new on own.
- 5% Communicating ideas clearly: Slack messages/plots/presentations clear/easy understand (little time process, minimal back-forth); find supervisor/other feedback helpful/great in meetings.
- 5% Other (varies): great teammate (help opportunities, initiative improve, do needed even unexciting, find collaborators); easy manage (receptive feedback, low emotional energy add/require, transparent/communicate issues, high trust); great noticing/calling improvement (how working, supervisor better, team coord).

## Tactical Research Tips & Approach

Highly empirical: critical quick feedback, iterate rapidly. Jacob Steinhardt: "reduce uncertainty at the fastest possible rate" — with LM/alignment often reduce really quickly (single message GPT4 phone or Claude Slack). Huge win vs launch large training/API; 1+ OOM more info per unit time (careful derisk quickest possible). (Most ideas here around this; not project selection — important but orthogonal.)

## Workflow

"Getting models to do something" as quickly possible. General strategy used prototyping (generating evals, red teaming LMs w LMs, training w lang feedback, etc.). (If not direct for task e.g. interp, illustrative how prioritize expts.)

Try versions in this order (skip step only very strong reason):

- **Zero-shot, high-volume playgrounding idea in chat interface (ChatGPT, Claude.ai, Gemini)**:
  1. Send 10-100 messages various models, investigate behavior or prototype (e.g. some form situational awareness, or LMs generate eval data).
  2. Update prompt based behavior/mistakes — very explicit desired behavior, include all context in prompt, explicit instructions guide away common mistakes. (Relevant guides Anthropic, OpenAI prompt engineering.)

- **Manual few-shot prompting, playgrounding chat**:
  1. Add 1-10 gold examples what want model do; see improves behavior on task.

- **Few-shot prompting** — find source labeled data task, put as many examples prompt (even max context length model).

- **Best-of-N (BoN) sampling** — sample N times, pick best according classifier (prompted LM) or Reward/Preference Model (PM). Generally improves sample quality (sometimes quite a bit); often comparable/better reward RL (e.g. WebGPT). Doesn't need much hyperparam tune — temp 1 top-p 1 reasonable. Lower temp (e.g. 0.8) top-p (0.95) if need higher quality samples.

- **Supervised Finetuning** — Can take hyperparam tune get working well. Most important typically lr, batch size, # epochs. OpenAI finetuning API sets pretty good defaults + tips adjust (easy use). Recommend start that (switch open-source if needed after). Other tips:
  1. Make sure test loss goes below random chance. Compute test loss eval log prob uniform dist answers; e.g. 2-way classif, uniform 50% each, baseline loss -log(0.5).
  2. Look both loss and accuracy — sometimes show different (test loss worse while acc better).

- **RL(HF)** — Generally last resort (takes longer/more compute run expts; more complicated code).

## Other Practical Tips

1. If looking through lots sampled text:
  - Find some automatic, proxy metric capture what looking for. Looking raw samples good, but hard if otherwise need look lots (e.g. tune sampling hyperparam).
  - Do data-atlas visualization (e.g. UMAP dim reduce, then interactive/hoverable plot plotly — something like this evals.anthropic).
2. If sample quality not high enough, or model making too many mistakes (e.g. math or coding):
  - Lower temperature (e.g. 0, 0.6, or 0.8) or top-p (e.g. 0.8 or 0.95).
  - Use BoN sampling (if not already), higher N (8 alright, 100 great).
3. Learn keyboard shortcuts: for basically everything. Rarely touch mouse/trackpad. Help not lose flow (switch tabs, jump codebase, etc.). Pairing great way pick up new tips/tricks.
4. Always thinking what best next experiment run should be: When show experimental results (meetings or slack), include discussion proposed next possible steps immediately after (proposed prioritization). Best researchers iterate between running expts and deciding best next independently. Getting practice propose next helpful:
  - Seeding discussion what do next (person on project often most context what makes sense from looked results most closely).
  - Getting practice figuring what next expt run, get other collaborator feedback how thinking around what expt next could improved.
5. Plot data log-scaled axes, look clean trends (e.g. power laws): Many (most?) plots involving results LLMs probably one/both axes log-scaled (e.g. param count, data, compute, loss, many others). Moreover, plotting log-scale x and y lets spot power laws (look lines log-log). Common mistake: not notice power law, plotting wrong metric/axes. Power laws often show plotting loss vs other metric (e.g. model training compute). But might plot accuracy not loss, or loss without additionally log-scaling both. Could miss important observations like scaling trends following very predictable extrapolatable pattern. In best-of-N jailbreaking paper, only observed power laws plotting -log(attack success rate) (rather than attack success rate directly), then needed plot this metric log-scale (y) against log-scaled test-time compute (x), order observe power law.

## Reading Research Papers

Generally not very important — low value of information relative own experiments. Exceptions:
- Starting new project, need learn what’s done vs not before, know where make contribution. Also pick up tips/tricks domain, if actually relevant stuff working on.
- Middle project, really relevant paper comes out (read closely).
- Area alignment lot actually-relevant prior work done (e.g. adversarial robustness, backdoors).

See its placement in the generalist reading list under Project leadership / Ethan Perez tips: [[sources/a-reading-list-for-generalists-dylan-bowman]].

The criteria and workflow captured in [[concepts/tips-for-empirical-alignment-research]].

Related: [[concepts/polymath]] [[sources/a-reading-list-for-generalists-dylan-bowman]].
