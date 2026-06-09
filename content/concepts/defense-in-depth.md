---
title: "Defense in Depth"
type: concept
tags: [security, risk, systems, digital-security]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# Defense in Depth

Defense in depth is the principle that important protection should not depend on a single safeguard. Instead, multiple layers cover different failure modes so that one broken barrier does not immediately collapse the whole system.

## Why It Exists

Security systems fail unevenly. A strong encrypted messenger does not protect exported files stored unencrypted on a laptop. A great password does not help much if account recovery is weak. A secure device can still leak through cloud sync, metadata, or human habit.

That is why layered design matters. Each safeguard blocks a different path: passwords, [[concepts/two-factor-authentication]], [[concepts/full-disk-encryption]], compartmentalized devices, and [[concepts/end-to-end-encryption]] each handle a different part of the exposure chain.

## The Key Discipline

Defense in depth is not the same as piling on tools. Badly layered complexity can create new confusion and new weak links. The useful version is deliberate layering guided by [[concepts/threat-modeling|threat modeling]]: add the layers that cover real risks, not the ones that merely look impressive.

## Sources

- [[sources/surveillance-self-defense-security-basics]]
