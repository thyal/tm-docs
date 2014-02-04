---
title: HTTP API
project: tiny-solution
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


<div class="col">
## Container operations

Containers are used to group physical installations, it provides
default a configuration for all devices.

* [[HTTP Create Container]]
* [[HTTP Update Container]]
* [[HTTP Fetch Container]]
* [[HTTP List Containers]]

## Device operations

Each device consists of a configuration, meta data and is used to
identify message origin.

* [[HTTP Create Device]]
* [[HTTP Fetch Device]]
* [[HTTP Update Device]]
* [[HTTP List Devices]]

## Message operations

* [[HTTP Create Message]]
* [[HTTP Fetch Message]]
* [[HTTP List Messages]]

# Appendix

* [[Date Field]]
