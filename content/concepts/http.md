---
title: "HTTP"
type: concept
tags: [web, protocols, internet, networking]
created: 2026-06-08
updated: 2026-06-09
sources: 3
---

# HTTP

HTTP, short for Hypertext Transfer Protocol, is the basic request-response protocol browsers and servers use to exchange web resources. In the simplest version of the story, a [[concepts/web-browser|browser]] sends an HTTP request, a [[concepts/web-server|server]] sends back an HTTP response, and the browser then decides what to do with the returned resource.

That description is deliberately minimal, but it earns its place because it replaces magical language like "the site loads" with a visible sequence of events. A user enters a [[concepts/url|URL]], the browser makes a request, the server answers, and the browser may then make more requests for stylesheets, scripts, images, fonts, or data before the page is fully rendered.

The core mental move is to see HTTP as language rather than magic. A request says what resource is being asked for and what action is intended. In beginner examples this is often a `GET` request such as `GET /courses`. The server responds with the requested resource plus status information that tells the client how to interpret the result.

HTTP is therefore less an isolated networking term than a core part of how the visible web actually works. It sits underneath [[concepts/website|websites]], [[concepts/search-engine|search engines]], and most ordinary browsing, even when the user never notices it directly.

One reason the concept becomes practically useful quickly is that HTTP makes web success and failure legible through status codes. `200` means success. `301` means the resource moved. `400` means the request could not be processed as sent. `403` means forbidden. `404` means not found. `503` means the server is temporarily unable to handle the request. These codes are not mere trivia. They are the visible labels of different states in the request-response chain.

## Sources

- [[sources/browsing-the-web-mdn]]
- [[sources/how-the-web-works-mdn]]
- [[sources/the-world-wide-web-crash-course-computer-science-30]]
