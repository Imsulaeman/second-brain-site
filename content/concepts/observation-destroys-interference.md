---
title: "Observation Destroys Interference"
type: concept
tags: [physics, quantum-mechanics, measurement, observer-effect]
created: 2026-06-25
updated: 2026-06-25
sources: 1
---

# Observation Destroys Interference

In the double-slit experiment, electrons fired at a barrier with two open slits produce an interference pattern — the probability distribution of arrivals shows alternating bands of high and low probability. If you add a detector to determine which slit each electron passes through, the interference pattern vanishes. The distribution becomes classical: P₁₂ = P₁ + P₂, as if each electron simply went through one slit or the other independently.

This is not a calibration artifact or a problem with the detector design. It is a fundamental feature of quantum mechanics: any physical process capable of telling you which path a particle took necessarily disturbs the particle enough to destroy the interference.

## Why It Happens

To detect which slit an electron passes through, you must scatter something off it — at minimum, one photon. The photon carries momentum. When it scatters off the electron, it gives the electron an unpredictable momentum kick. The direction and magnitude of this kick is unknown (Heisenberg: the photon's position uncertainty when it scatters means its recoil direction is uncertain). This random momentum transfer changes the electron's path in an uncontrolled way, disrupting the precise phase relationship between the paths through the two slits. Interference requires phase coherence; the measurement destroys coherence.

If you use a low-energy (long-wavelength) photon to reduce the kick, the photon's wavelength becomes too long to resolve which slit (position uncertainty ≥ slit spacing). As wavelength increases, which-path resolution degrades — and the interference pattern gradually reappears. The tradeoff is exact: maximum which-path knowledge means zero interference; maximum interference means zero which-path knowledge.

## What This Is Not

It is not about conscious observers. The electron does not know whether a human looks at the detector. What matters is whether there is a physical interaction that *could* in principle allow which-path determination — whether a photon was scattered that carries the information, whether it was detected or not. The information's existence in the physical world is enough to destroy coherence.

It is not a disturbance we could eliminate with better technology. The uncertainty principle places an absolute minimum on the disturbance required to gain which-path information. There is no way to observe without disturbing; the two are linked by the mathematics of quantum mechanics.

## The Lesson

Measurement in quantum mechanics is not passive. A "measurement" is a physical interaction that entangles the measuring device with the system being measured. Once entangled, the phase relationship between the system's possible states is smeared out from the perspective of the system alone. The interference, which was a coherent superposition, becomes an incoherent mixture. This process is called decoherence.

Feynman puts it starkly: "We must conclude that *when we look at the electrons* the distribution of them on the screen is different than when we do not look."

## Connections

- [[concepts/double-slit-experiment]] — the experiment that demonstrates this phenomenon
- [[concepts/uncertainty-principle]] — the which-path / interference tradeoff is the uncertainty principle in action
- [[concepts/probability-amplitudes]] — coherence between amplitudes is what observation destroys
- [[concepts/quantum-probabilism]] — even without observation, we can only predict probabilities

## Sources

- [[sources/six-easy-pieces-feynman]]
