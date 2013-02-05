---
title: What is TinySolution
project: ts
version: 0.0.1+
document: tutorial
audience: beginner
keywords: [tutorial, fast-track]
prev: "[[The TinySolution Fast Track]]"
up:   "[[The TinySolution Fast Track]]"
next: "[[Connecting To TinySolution]]"
versions: false
interest: [
"[[Key Management]]",
"[[Containers]]",
]
---

This page provides a introduction to the TinySolution Architecture.

## How Does TinySolution Work?

TinySolution™ allows information to be exchanged over the Internet,
between physical hardware and high-level application software. TinySolution™
provides a communication infrastructure that allows application designers
to access TinyMesh™ devices via bi-directional, encrypted data streams,
using either raw binary data or structured documents using either XML or JSON.

TinySolution™ provides 2 interfaces, one low-level interface for
connecting TinyMesh™ containers and one high-level interface for
connecting applications. The notable difference being the low-level
binary interface is strictly real-time streams, whilst the high-level
interface has support for batch-oriented operations.

### How Can I Interface TinySolution?

All client applications will address the high-level API which utilises
the HTTP protocol as transport and consumes both XML and JSON. All the
data is hierarchically stored and easily accessible using most modern
HTTP libraries for your programming language. We will provide [[Client
Libraries]] for some of the common languages in the future.

For development, the absolute easiest way is to either use a
web-browser or `curl` to access data.

### What Data Can I Query

TinySolution™ containers maps directly to TinyMesh™ networks, each
network consists of 1 or more TinyMesh™ devices. Each device contains
a series of messages. All the data elements - containers, devices and
messages - can be accessed from the high-level [[HTTP API]].
