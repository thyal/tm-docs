---
title: HTTP API
project: ts
version: 0.0.1+
document: api
toc: true
audience: advanced
keywords: [api, http]
index: true
---

The TinySolution HTTP API is the prefered way of performing queries
from a client's application. This overview provides examples of the
operations that can be done over HTTP and is a guide during
application development aswell as testing hardware implementations.

Most examples can be tested using a web-browser, but parts working
with raw binary data will require `curl` or similar to perform.


## Container operations

Containers are used to group physical installations, it provides
default a configuration for all devices.

* [[HTTP Creating Containers]]
* [[HTTP Updating Containers]]
* [[HTTP Fetching Containers]]
* [[HTTP Set Default Container Configuration]]

## Device operations

Each device consists of a configuration

* [[HTTP Creating Devices]]
* [[HTTP Fetching Devices]]
* [[HTTP Updating Device Configuration]]
* [[HTTP Updating Device State]]

## Message operations

* [[HTTP Creating Messages]]
* [[HTTP Fetching Messages]]
* [[HTTP Streaming-Messages]]

