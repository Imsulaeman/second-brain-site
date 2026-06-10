---
title: "Packet Switching"
type: concept
tags: [web, networking, internet, transport]
created: 2026-06-10
updated: 2026-06-10
sources: 2
---

# Packet Switching

Packet switching is the architectural principle underlying how data moves across the internet. Instead of reserving a dedicated continuous channel between sender and receiver (circuit switching, the older telephone model), packet switching breaks data into small independent units — [[concepts/packets|packets]] — and sends each one separately through whatever route is available at the time.

The key properties that make this powerful:

- **No dedicated path required** — each packet can take a different route across the network. If one path is congested or down, packets reroute automatically.
- **Shared infrastructure** — many users' packets move through the same physical links simultaneously, which makes the network far more efficient than reserving a private channel per connection.
- **Resilience** — because no single route is required, partial network failures do not break the whole system. Traffic finds another way.
- **Reassembly at the destination** — packets carry sequence metadata so the receiving system can reconstruct the original data even if packets arrive out of order or via different paths.

This design is why the internet is structurally decentralized and hard to fully block or destroy: there is no single pipe to cut. It also explains a practical behavior every web user encounters — a slow page load is often a packet delay or loss at one segment of the route, not a failure of the whole connection.

Packet switching is the concept behind what [[sources/how-the-web-works-mdn]] describes as packets reassembling into pages. The mechanism is not just fragmentation — it is the routing freedom and shared infrastructure that fragmentation enables.

## Sources

- [[sources/how-the-web-works-mdn]]
- [[sources/the-world-wide-web-crash-course-computer-science-30]]
