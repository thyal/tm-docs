---
title: Sending Data with TinySolution
project: ts
version: 0.0.1+
document: tutorial
audience: beginner
keywords: [tutorial, fast-track]
prev: "[[Querying TinySolution]]"
up:   "[[The TinySolution Fast Track]]"
next: "[[Streaming Data]]"
versions: false
interest: [
"[[TinyMesh Messages]]",
"[[HTTP API]]",
"[[Querying Data]]",
]
---

This page describes how to transmit data to the TinyMesh™ using the [[HTTP API]].

## Message representation

TinySolution supports sending data in multiple formats, most notably
XML, JSON and binary. The first two are a structured data format which
allows for a much more flexible way of working with data. Nonetheless
we can send (and receive) raw binary data directly from the TinyMesh
if we know the required addressing information. As we will see
shortly, we can variate not only the content type we are sending, but
also the representation we want in return.

### Parameter Inference

We don't want you to remember all the addressing and package management
details, there for when sending messages we automatically add the
correct parameters for `unique_id`, `packet_number` and other required
fields. This lets you focus on the task at hand instead of worrying
about how to transform your business logic into TinyMesh messages.

## Sending data

When sending data, we only need to worry about the device id and our
payload. In the case of retrieving a status this gets relatively
simple:

```bash
curl -XPOST api.tiny-solution.com/messages/ABCD/0bee89b07a248 -d '{ \
"type"     : "command", \
"command"  : "get_status"}'
HTTP/1.1 301 Created
Allow: GET, POST
Date: Fri, 01 Feb 2013 15:44:18 GMT
Content-Length: x

{"key":"ABCD/0bee89b07a248/20130201154418","unique_id":1,"packet_number":1,
"type":"command","command":"get_status"}
```

All messages belongs to a device, when we break down the resource URL
we see that `ABCD/0bee89b07a248` is in reality device `0bee89b07a248`
in the container `ABCD`. If the device does not exists we would get a
`404 Not Found` error code in return. There is currently no limitation
on what types of messages you can send, but only `command` messages
will be forwarded to the TinyMesh container.
