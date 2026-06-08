---
title: "Situational Awareness"
type: source
tags: [ai, agi, superintelligence, national-security, compute, scaling, alignment, geopolitics, leopold-aschenbrenner]
created: 2026-05-16
updated: 2026-05-16
sources: 1
author: "Leopold Aschenbrenner"
file: "raw/Situational Awareness (ingested).pdf"
pages: 165
---

# Situational Awareness

**Source:** Leopold Aschenbrenner - *Situational Awareness: The Decade Ahead* (June 2024, ~165 pages)
**Entity:** [[entities/leopold-aschenbrenner]]
**Context:** Written by a former OpenAI researcher (Superalignment team under Ilya Sutskever) shortly after leaving the company. Published as a long-form essay series laying out a concrete scenario for AGI and superintelligence arriving before 2030, and arguing the US national security state must treat it accordingly.

---

## Summary

Aschenbrenner's central claim: the path from current AI to superintelligence is remarkably short, perhaps ~4 years from the time of writing (2024). He measures AI progress in "orders of magnitude" (OOMs) of effective compute. By extrapolating three drivers -- compute scaleup, algorithmic efficiency, and "unhobbling" -- he projects that AI systems will reach automated-AI-researcher level by ~2027, triggering an intelligence explosion that compresses a decade of further progress into roughly one year, yielding superintelligence by ~2028-2030.

The essay is not primarily a technical forecast. It is a national security argument: superintelligence will be the most powerful weapon ever built, and whoever leads will have decisive military advantage. The US currently leads but is squandering that lead through catastrophically poor security at AI labs, regulatory barriers to building compute infrastructure domestically, and a failure to take the alignment problem seriously enough. Aschenbrenner argues the inevitable endpoint is a government-led AGI project ("The Project"), analogous to the Manhattan Project, likely forming around 2027-28.

## Structure

| Part | Title | Pages | Core Argument |
|------|-------|-------|---------------|
| I | Counting the OOMs | 7-45 | ~5 OOMs of effective compute gain by 2027 via three drivers; AGI by ~2027 |
| II | From AGI to Superintelligence | 46-73 | Intelligence explosion: 100M automated AI researchers at 100x speed; decade of progress in ~1 year |
| IIIa | Racing to the Trillion-Dollar Cluster | 75-88 | Physical infrastructure scaling from $500M to $1T+ clusters; power as binding constraint |
| IIIb | Lock Down the Labs | 89-104 | AI lab security is catastrophically inadequate; CCP espionage threat to model weights and algorithmic secrets |
| IIIc | Superalignment | 105-125 | RLHF won't scale to superhuman systems; research bets for aligning somewhat-superhuman models; automated alignment research |
| IIId | The Free World Must Prevail | 126-140 | Superintelligence as decisive military advantage; China can be competitive; authoritarian peril; healthy lead needed for safety |
| IV | The Project | 141-155 | Government AGI project is inevitable; USG will wake up ~2027; needs sane chain of command, democratic coalition, nonproliferation regime |
| V | Parting Thoughts | 156-160 | "AGI Realism" as third way between doomers and e/accs; the stakes are civilizational |

## Part I: Counting the OOMs

**The OOMs framework.** Aschenbrenner measures AI progress not by benchmarks but by orders of magnitude of effective compute. From GPT-2 (2019) to GPT-4 (2023), AI systems gained roughly 5 OOMs of effective compute. He claims this took us from "preschooler" to "smart high-schooler" level. Projecting forward ~4 more years:

**Three drivers of progress:**
1. **Compute scaleup** (~0.5 OOM/year): Training cluster investment growing ~3x/year. From $500M (GPT-4 era) to $100B+ clusters by 2027-28.
2. **Algorithmic efficiency** (~0.5 OOM/year): Better architectures, training methods, data curation. Historically halving compute needed for equivalent performance roughly every ~1-2 years.
3. **Unhobbling** (large, harder to quantify): RLHF, chain-of-thought, tool use, scaffolding, longer context, agentic capabilities. These unlock latent model capability without more compute. The trajectory: chatbot -> agent -> drop-in remote worker.

**The data wall.** Internet training data is nearly exhausted. The next paradigm -- synthetic data, self-play, RL -- is where the key algorithmic breakthroughs for AGI will come. These breakthroughs are being developed right now at frontier labs and represent the most valuable secrets in AI.

**Timeline.** By ~2027, the combination of these three drivers yields systems at the level of an automated AI researcher -- able to do the work of a top ML engineer/researcher. This is the threshold that triggers Part II.

## Part II: From AGI to Superintelligence

**The intelligence explosion.** Once AI systems can automate AI research itself, progress compounds explosively. Aschenbrenner's model: 100 million automated AI researchers, each running at 100x human speed (no sleep, instant communication, perfect memory). This could compress a decade of algorithmic progress into ~1 year, yielding 5+ additional OOMs on top of AGI.

**Bottlenecks analyzed:**
- **Compute for experiments:** Automated researchers still need GPU-hours to test ideas. But the intelligence explosion coincides with massive cluster buildout, and smarter researchers will be more compute-efficient.
- **Complementarities / long tail:** Some capabilities may resist pure algorithmic improvement. But the automated researchers will find creative workarounds and the sheer volume of research attempts overwhelms any single bottleneck.
- **Diminishing returns:** Ideas may get harder to find. But this is offset by the sheer number and speed of researchers.

**Power of superintelligence.** Aschenbrenner argues superintelligence would provide:
- Decisive military advantage (comparable to the Gulf War's tech gap, but far larger)
- Acceleration of all science and technology (compressing a century into years)
- Economic explosion (growth rates in the tens of percent annually)
- Potential to overthrow governments, develop novel WMDs, or lock in authoritarian control permanently

**Growth mode shifts:** Hunting (230K-year doubling time) -> farming (860 years) -> industry (15 years) -> superintelligence (months to years?). Each transition was driven by a qualitative change in how knowledge compounds.

## Part IIIa: Racing to the Trillion-Dollar Cluster

**Infrastructure scaling table:**

| Year | Cluster Cost | Power |
|------|-------------|-------|
| 2022 | ~$500M | ~10 MW |
| 2024 | ~$2-5B | ~50 MW |
| 2026 | ~$20-50B | ~1 GW |
| 2028 | ~$100B-500B | ~10 GW |
| 2030 | ~$1T+ | ~100 GW |

**Power is the binding constraint.** A 100GW cluster would require ~20% of current US electricity generation. US power generation has barely grown 5% in the last decade. Regulatory barriers (NEPA, permitting, utility regulation) stand in the way of fast buildout. Natural gas is the obvious near-term solution and is physically feasible.

**Historical precedents for scale.** $1T/year AI investment (~3% of GDP) would be among the largest capital buildouts ever but not unprecedented: Manhattan/Apollo (~0.4% GDP), telecom buildout 1996-2001 (~$1T), British railway investment (40% of GDP over a decade), wartime borrowing (60-100% of GDP).

**Revenue justification.** $100B AI revenue run rate for a single big tech company is plausible by mid-2026. At $10T+ company valuations, the investment pays for itself.

**"The Clusters of Democracy."** Aschenbrenner argues the national interest demands these clusters be built in the US, not in Middle Eastern autocracies offering cheap power. Building AGI infrastructure abroad risks the weights being stolen and puts critical national security assets at the mercy of dictators.

## Part IIIb: Lock Down the Labs

**The threat.** Two key assets to protect: model weights (the finished AI system) and algorithmic secrets (the breakthroughs that make AGI possible). Algorithmic secrets are arguably more urgent to secure because they're being developed right now, before AGI-level weight security is needed.

**Current state is catastrophic.** AI labs treat security as an afterthought. No background checks, minimal siloing, secrets stored on hackable SaaS services, researchers discussing breakthroughs at parties. Google DeepMind admits being at "security level 0" on their own framework. State actors (China, Russia, North Korea, Iran) have demonstrated ability to penetrate far more secure targets.

**Algorithmic secrets matter more than compute.** Algorithmic progress is roughly as important as compute scaleup. Stealing the key breakthroughs could be equivalent to giving an adversary 10-100x more compute. Export controls on chips (a ~3x cost increase for China) are less impactful than the algorithmic secrets being leaked freely.

**What "supersecurity" requires.** Fully airgapped datacenters, SCIF-level working conditions, extreme personnel vetting, multi-key code signoff, NSA-level pen testing. Only achievable with government cooperation. Quantitative trading firms manage to keep secrets under similar constraints -- it is possible.

**Timeline pressure.** Within 12-24 months of writing, key AGI algorithmic breakthroughs will have leaked to the CCP. This will be the national security establishment's greatest regret.

## Part IIIc: Superalignment

**The core problem.** RLHF works because humans can evaluate AI outputs. But when AI systems are much smarter than humans, human evaluation breaks down. A superhuman coder generating a million lines in a novel programming language cannot be meaningfully supervised by human RLHF raters.

**Why the intelligence explosion makes it terrifying.** The transition from familiar AGI (where RLHF++ works) to alien superintelligence (where it doesn't) may happen in less than a year. The stakes go from low (chatbot says something bad) to catastrophic (superintelligence self-exfiltrates, develops weapons, deceives operators) almost overnight.

**Research bets for "muddling through":**
1. **Evaluation > generation:** Humans can spot bad outputs easier than produce good ones, extending supervision range somewhat.
2. **Scalable oversight:** AI assistants help humans supervise other AIs (debate, recursive reward modeling, prover-verifier games).
3. **Generalization:** Alignment from easy-to-supervise tasks may generalize to hard tasks. Weak-to-strong generalization experiments show promise.
4. **Interpretability:** Mechanistic (bottom-up, very hard), top-down (lie detectors, representation engineering, more tractable), and chain-of-thought (legibility and faithfulness of reasoning traces).
5. **Adversarial testing:** Red-teaming, planted backdoor detection, alignment measurement science.

**Automated alignment research.** Ultimately, somewhat-superhuman AI systems must be trusted enough to automate alignment research for even more powerful systems. This is the critical dependency.

**Superdefense.** Multiple layers beyond alignment: airgapped clusters, monitoring systems, control protocols (weaker trusted models policing stronger untrusted ones), targeted capability limitations, training method restrictions.

**Aschenbrenner's stance.** Optimistic on technical tractability (deep learning generalizes benignly in many cases, CoT provides interpretability for early AGIs). Worried about the institutional competence and willingness to make costly tradeoffs during the intelligence explosion.

## Part IIId: The Free World Must Prevail

**Decisive military advantage.** Superintelligence could compress a century of military technological progress into years. The Gulf War demonstrated what a 20-30 year tech lead means: total dominance despite numerical parity. A superintelligence lead would be far more decisive -- potentially enough to neutralize even nuclear deterrents through advanced sensor networks, drone swarms, and missile defense.

**China can be competitive.** China can manufacture 7nm AI chips (Huawei Ascend 910B, ~2-3x worse perf/$ than Nvidia). China has built as much new electricity capacity in the last decade as the entire current US capacity. China's path: outbuild the US on infrastructure and steal the algorithms. Current AI lab security makes the algorithmic theft trivially easy.

**The authoritarian peril.** A dictator with superintelligence could permanently lock in power: AI-controlled robotic police, mass surveillance, perfect loyalty enforcement. Past dictatorships were never permanent because coups and rebellions were possible. Superintelligence could eliminate those threats entirely, enabling permanent totalitarian rule.

**A healthy lead is decisive for safety.** A 2-year lead means margin for safety research, time to make costly tradeoffs (delaying training runs, dedicating compute to alignment). A 2-month lead means a desperate race with no margin for error. The only path to stable safety: American-led democratic coalition with enough lead to "spend" some of it on alignment.

## Part IV: The Project

**The prediction.** By 2027-28, the USG will wake up to AGI as a national security priority and form a government-led AGI project. This is Aschenbrenner's main descriptive (not normative) claim. The analogy: as with COVID, the Manhattan Project, and WWII mobilization, the government response will be late, crude, and dramatic.

**Why it's necessary:**
- Security against state-level espionage requires government infrastructure
- A sane chain of command for technology comparable to nuclear weapons
- Coordination for safety tradeoffs during the intelligence explosion
- Democratic coalition-building and nonproliferation regime
- No startup can handle what amounts to the nation's most important defense project

**How it might look.** Not literal nationalization but a Boeing/Lockheed-style defense contracting relationship. Leading labs "voluntarily" merge into the national effort. Congress appropriates trillions. International coalition modeled on the Quebec Agreement (US-UK nuclear cooperation pact). Nonproliferation regime modeled on Atoms for Peace / NPT.

**The endgame.** By 27/28 the intelligence explosion is underway; by 2030 superintelligence arrives. The task: build AGI securely, manage the intelligence explosion, deploy superintelligence defensively, stabilize the international situation, develop a nonproliferation regime, and somehow keep things from going off the rails.

## Part V: AGI Realism

Aschenbrenner defines "AGI Realism" as a third position between doomers (pause AI) and e/accs (deny the risks):

1. **Superintelligence is a matter of national security.** Not another cool tech boom -- the most powerful weapon ever built.
2. **America must lead.** The only realistic path to safe AGI. Rapid infrastructure buildout, proper security, national interest first.
3. **We need to not screw it up.** Real safety risks from both misalignment and misuse. Requires seriousness, not improvisation.

## Connections

- [[entities/leopold-aschenbrenner]] - Author
- [[concepts/intelligence-explosion]] - Core thesis: automated AI research compounding into superintelligence
- [[concepts/ooms-framework]] - Measuring AI progress in orders of magnitude of effective compute
- [[concepts/superalignment-problem]] - Controlling AI systems much smarter than humans
- [[concepts/agi-as-national-security]] - Superintelligence as decisive military/economic advantage requiring government involvement
- [[sources/something-is-different-about-2026]] - Dan Koe's 2026 piece echoes the "skills abstracting upward" and "judgment over execution" themes
- [[sources/the-complete-collection-howard-marks]] - Marks' cycle psychology and overconfidence parallels apply to the AI investment boom dynamics Aschenbrenner describes
- [[concepts/agentic-coding-workflows]] - The "drop-in remote worker" trajectory connects to current agentic AI coding patterns
- [[concepts/specific-knowledge]] - Naval's concept of knowledge that can't be trained or outsourced gains urgency in a world where most execution gets automated

## Sources

- This page summarizes `raw/Situational Awareness (ingested).pdf`.
