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

This page describes how to transmit data to TinyMesh™ Devices using the [[HTTP API]].

## Message representation

TinySolution™ supports sending data in multiple formats, most notably
XML, JSON and binary. The first two are a structured data formats which
allow for a much more flexible way of working with data.  Nonetheless
we can send (and receive) binary data directly from the [[HTTP API|HTTP Creating Messages]]
if we know the required addressing information. The data format we
send data with can be varied using the `Accept` header field, when
sending data the `Content-Type` header field is used to specify the
format.

### Parameter Inference

To simplify Device addressing and packet management details when
sending a message, TinySolution™ will automatically add the correct
TinyMesh™ parameters for `unique_id`, `packet_number` and other required
fields. This lets you focus on the task at hand instead of worrying
about how to transform your business logic into TinyMesh™ messages.

## Sending data

When sending data, we only need to know the `device id` and the payload
data to be delivered. The following example shows the simplicity of
querying for Device status by sending a `get_status` command.

```bash
dev@lp:~ $ curl -XPOST api.tiny-solution.com/messages/ABCD/0bee89b07a248 -d \
'{"type" : "command", "command" : "get_status"}'

HTTP/1.1 301 Created
Allow: GET, POST
Date: Fri, 01 Feb 2013 15:44:18 GMT
Content-Length: x

{"key":"ABCD/0bee89b07a248/20130201154418","unique_id":1,"packet_number":1,
"type":"command","command":"get_status"}
```

When we break down the resource URL we see that `ABCD/0bee89b07a248`
in reality is Device `0bee89b07a248` in the Container `ABCD`. If the
device did not exist, we would get a `404 Not Found` error code in return.

<div class="info">
 <div class="title">Working with binary</div>
 <p>
  When working with raw binary data we may choose to return the binary
  as raw, hexadecimal or base64 encoded. The result will always
  return `application/octet-stream` for `Content-Type` and
  `Content-Transfer-Encoding` will be one of `binary`, `hex` or `base64`.
 </p>
</div>
