---
title: "Password Manager"
type: concept
tags: [security, passwords, authentication, digital-security]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# Password Manager

A password manager is a tool that stores and generates unique credentials so that one account breach does not automatically become many account breaches. Its real value is not convenience by itself. It is that it makes good password hygiene practical at scale.

## Why It Matters

The core security problem is password reuse. Humans are bad at inventing and remembering many strong, unrelated secrets. A password manager solves that by turning one strong master passphrase into a gate for many unique passwords.

That changes the whole account-security picture. Instead of one memorable password copied everywhere, each service can have its own strong credential. A breach at one site then does not give an attacker direct access to everything else.

## Tradeoff

A password manager is powerful because it concentrates defense. It is also risky for the same reason. It creates a single point of failure. If the device is compromised, the vault is badly configured, or the master passphrase is weak, a lot of security can fail at once.

That is why the tool is usually paired with [[concepts/two-factor-authentication|two-factor authentication]], a strong master passphrase, and cleaner device security. In some threat models, an intentionally low-tech solution may be better than a software vault.

## What To Ask

- Does this help me maintain unique passwords everywhere?
- How strong is the master passphrase protecting the vault?
- What happens if the device running it is compromised?
- Is this tool appropriate for my [[concepts/threat-modeling|threat model]], or am I adding complexity I cannot manage well?

## Sources

- [[sources/surveillance-self-defense-security-basics]]
