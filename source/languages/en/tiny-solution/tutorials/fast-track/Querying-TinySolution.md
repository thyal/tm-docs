---
title: Querying Data
project: tiny-solution
version: 0.0.1+
document: tutorial
audience: beginner
keywords: [tutorial, fast-track]
prev: "[[Connecting To TinySolution]]"
up:   "[[The TinySolution Fast Track]]"
next: "[[Sending Data]]"
versions: false
interest: [
"[[Containers]]",
"[[Streaming Data]]",
]
---

This page describes how to query data using the [[HTTP API]]

## Finding Devices

When a new device connects to TinySolution™, the device will automatically
be added to the Parent Container. The [[HTTP List Devices|HTTP Listing Devices]]
operation may be used to retrieve a list of all the Devices in the Container.

```bash
dev@lp:~ $ curl api.tiny-solution.com/container/ABCD

HTTP/1.1 200 OK
Allow: GET, PUT
Date: Fri, 01 Feb 2013 15:31:18 GMT
Content-Length: x

[{"key":"ABCD",name:"Container #ABCD","devices":["ABCD/0bee89b07a248"]}]
```

The key parameter is the Container ID, as previously entered in the
`Calibration Memory` of the TinyMesh™ Gateway Device; `name` in this
case is auto generated and `devices` is a list of IDs used to uniquely
identify a Device (the Gateway Device in this case). If you go ahead
and add a new Device to the TinyMesh™ Container, it will automatically
create a new Device Object and you will be able to see it in the devices array.

## Retrieving Messages

The most interesting data to look at, is the messages. Most likely you
will query a time series of message either by a Device or Container
using the [[HTTP Fetch Messages|HTTP Fetching Messages]] operation.
If you have added any rules like filtering, this will be applied
before the messages are returned in the format specified by the `Accept` header.

**Fetch messages from the container**

```bash
dev@lp:~ $ curl api.tiny-solution.com/messages/ABCD?date.from=2013-02-02T00:00:00Z

HTTP/1.1 200 OK
Allow: GET
Date: Fri, 01 Feb 2013 15:31:43 GMT
Content-Length: x

[{"key":"ABCD/0bee89b07a248/20130201151859","type":"event",
"detail":"get_cad","caddr":"ABCD", ..... }]
```

As seen above all queries must have a date range, by default the 
date.to field is set to the current time. The [[Date Field]] supports
some basic math operations like “2013-02-02T:00:00:00Z-1WEEK”, alternatively you
may use the string literal NOW to work with relative time; e.g.
NOW-1HOUR. All the dates must be formatted as a valid ISO 8601 date time.

### Filtering responses

TinySolution™'s flexibility is demonstrated by it's ability to
manipulate the result set. In addition to employing the dynamic parser
that is driving your business logic, you may filter the query result
using the `resp.filter` and `resp.exclude` parameters.

```bash
dev@lp:~ $ curl api.tiny-solution.com/messages/ABCD?date.from=NOW-1HOUR&resp.filter=key,caddr

HTTP/1.1 200 OK
Allow: GET
Date: Fri, 01 Feb 2013 15:33:18 GMT
Content-Length: x

[{"key":"ABCD/0bee89b07a248/20130201151942","caddr":"ABCD"}]
```

Using the `resp.filter` parameter will only return the fields specified,
while the `resp.exclude` parameter does the exact opposite, and removes
the specified fields. If you filter on a non-existing field, it will
have no effect.
