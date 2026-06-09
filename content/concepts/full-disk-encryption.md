---
title: "Full-Disk Encryption"
type: concept
tags: [security, encryption, devices, digital-security]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# Full-Disk Encryption

Full-disk encryption protects the data stored on a device by encrypting the drive itself rather than only locking the screen or encrypting a few files. Its purpose is simple: physical possession of the device should not automatically mean readable access to the data.

## What It Protects Against

This mainly defends against loss, theft, seizure, and casual physical access. If a laptop is stolen or a phone is taken, encrypted storage raises the attack from "open the files" to "break or obtain the key."

That is why it matters to distinguish device lock from actual encryption. A passcode prompt may look secure while the storage underneath is still accessible through other means.

## What It Does Not Solve

Full-disk encryption is not magic. If the passphrase is weak, the device is unlocked, the user is coerced, or malware is already running, the protection becomes much weaker. It also does not remove the need for safer habits, updates, backups, or better compartmentalization.

The concept fits naturally inside [[concepts/defense-in-depth|defense in depth]]: strong storage protection is one layer, not the whole plan.

## Practical Standard

For ordinary digital security, full-disk encryption is closer to baseline hygiene than to elite practice. The real question is usually not whether to use it, but whether it is actually enabled and paired with a strong passphrase.

## Sources

- [[sources/surveillance-self-defense-security-basics]]
