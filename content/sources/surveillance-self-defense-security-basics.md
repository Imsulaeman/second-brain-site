---
title: "Surveillance Self-Defense Security Basics"
type: source
tags: [security, privacy, surveillance, digital-security]
created: 2026-06-08
updated: 2026-06-09
sources: 1
file: "raw/Surveillance Self-Defense Security Basics (reingested).md"
---

# Surveillance Self-Defense Security Basics

This EFF guide is not mainly a tool list. It is a practical operating model for digital security built around [[concepts/threat-modeling|threat modeling]]. Its repeated claim is that security starts by asking what you are protecting, from whom, how likely the threat is, and what failure would cost. Without that frame, people either under-protect what matters or pile up impressive tools that do not match the real risk.

## Passwords, 2FA, And Account Recovery

The guide begins with the most common failure point: reused passwords. Its answer is not just "make stronger passwords," but build a system. Use unique credentials, prefer a [[concepts/password-manager|password manager]] when it fits the threat model, protect that manager with a strong master passphrase, and add [[concepts/two-factor-authentication|two-factor authentication]] where possible.

The source is especially good on tradeoffs. A password manager is powerful because it makes uniqueness practical, but it also creates a concentrated point of failure. A low-tech alternative like written credentials stored securely may be better for some people. The same tradeoff logic shows up in account recovery. Security questions are weak because truthful answers are often public facts, so fictional answers stored safely are better than honest but guessable ones.

The 2FA section adds another layer of prioritization. Authenticator apps and hardware keys are preferred over SMS because text messages are easier to redirect or intercept. Backup codes matter too, but they bring their own tradeoff: convenience versus additional stored secrets.

## Device Security And Full-Disk Encryption

The next move is to treat the device itself as an exposure point. A locked screen is not the same thing as data being protected at rest. The guide keeps returning to [[concepts/full-disk-encryption|full-disk encryption]] as the baseline defense for laptops, phones, and tablets because physical possession of a device should not automatically mean access to the data inside it.

Its most useful distinction is between ordinary device locking and actual encryption. The visual walkthrough makes that difference concrete: a passcode prompt may look reassuring, but if the underlying storage is not encrypted an adversary may still bypass the interface and read the drive directly. The raw also emphasizes that encryption is only as strong as the passphrase protecting it, and that some threats go beyond theft. Border searches, coercion, malware, and advanced attacks against memory all sit outside the comforting beginner picture where encryption solves everything by itself.

The secure-device section extends this logic. Sometimes the right move is to cordon sensitive work onto a separate machine, keep it updated, reduce what it does, keep it physically secure, or even keep it offline. The broad lesson is that security improves when important data is separated from ordinary convenience.

## Encryption As Layers, Not Magic

The encryption chapters are structured to stop a common confusion: people hear the same word used for laptops, HTTPS, VPNs, and messaging apps, then assume all encrypted systems protect the same thing. The guide carefully separates encryption at rest from encryption in transit, then distinguishes transport-layer protection from [[concepts/end-to-end-encryption|end-to-end encryption]].

That distinction matters because each layer blocks a different observer. Transport-layer encryption such as HTTPS protects the connection between your device and a service, but the service can still read the plaintext it receives. End-to-end encryption narrows that visibility further so the messaging provider itself cannot read the content. The source then adds a more mature point: real systems are layered. You may combine file encryption, drive encryption, full-disk encryption, and encrypted communications because different parts of the system fail differently.

The page's visual sequence does real teaching work here. The diagrams move from unencrypted transit, to transport encryption, to HTTPS, to end-to-end messaging, and finally to the combined picture where at-rest and in-transit protection stack. The conclusion is close to [[concepts/defense-in-depth|defense in depth]]: one safeguard is rarely enough because the weak point may sit elsewhere in the chain.

## Security Planning And Tool Choice

The "Your Security Plan" and "Choosing Your Tools" sections are really the philosophical center of the guide. They insist that security is a process, not a purchase. Expensive or dramatic tools are not automatically better. The right choice depends on the adversary, the stakes, and what tradeoffs a person can actually sustain.

That is why the guide asks structured planning questions: what do I want to protect, who do I want to protect it from, how bad are the consequences if I fail, how likely is the threat, how much trouble am I willing to go through, and who are my allies? Those questions turn security from vibe into design. They also explain why the guide is willing to recommend simple tactics in some cases and stronger technical measures in others.

The same perspective shapes tool evaluation. Look for transparency, honest discussion of limitations, a realistic update history, and evidence that the tool's creators have considered what happens if they themselves are compromised. The point is not brand trust. It is whether the tool's design and maintenance practices fit the threat.

## Communication, Metadata, And What Encryption Does Not Hide

The communications sections sharpen a limitation that many beginner security guides underplay: [[concepts/end-to-end-encryption|end-to-end encryption]] protects message content, not the fact of communication itself. Providers and network intermediaries may still learn who contacted whom, when, from where, and with what service. That pushes the guide naturally into [[concepts/communication-metadata|communication metadata]].

The metadata chapter is one of the strongest parts of the raw because it shows how revealing non-content data can be. A small sample of calls, emails, subject lines, timings, and locations can expose medical concerns, political activity, intimate relationships, or crisis moments without anyone reading the message body. The raw also makes the legal and infrastructural point: metadata is often easier for states or companies to collect than content because systems need some routing information in order to function at all.

This is where the guide's realism is most useful. Metadata minimization is possible in some tools, but not fully avoidable. So the practical move is not naive confidence. It is to understand what still leaks, who can access it, and whether the remaining exposure is acceptable under the threat model.

## Seven Steps As The Compression Layer

The closing "Seven Steps to Digital Security" section compresses the whole guide into a short operating checklist. Knowledge comes first. Security is limited by the weakest link. Simpler systems are often safer. Price is not a proxy for protection. Trust is unavoidable but should be explicit. No one plan is perfect. And whatever is secure today may stop being secure tomorrow.

That ending clarifies the guide's real contribution. It is not trying to make the reader feel technologically powerful. It is trying to make them think structurally: reduce weak links, prefer sustainable systems, normalize encryption where appropriate, and keep revising the plan as the environment changes.

## Related Concepts

- [[concepts/threat-modeling]]
- [[concepts/password-manager]]
- [[concepts/two-factor-authentication]]
- [[concepts/full-disk-encryption]]
- [[concepts/end-to-end-encryption]]
- [[concepts/defense-in-depth]]
- [[concepts/communication-metadata]]
- [[concepts/privacy]]

## Sources

- `raw/Surveillance Self-Defense Security Basics (reingested).md`
