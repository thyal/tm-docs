---
title: Querying Data
project: ts
version: 0.0.1+
document: tutorial
audience: beginner
keywords: [tutorial, fast-track]
prev: "[[Connecting To TinySolution]]"
up:   "[[The TinySolution Fast Track]]"
next: "[[Sending Data]]"
versions: false
interest: [
"[[Key Management]]",
"[[Networks]]",
"[[Streaming Data]]",
]
---

This page describes how to query data using the [[HTTP API]]

## Finding devices

When a new device connects to TinySolution™, it's automatically added
to the parent container. The [[HTTP List Devices]] operation can be
used to retrieve a list of all the devices in a container.

```bash
curl api.tiny-solution.com/container/ABCD
HTTP/1.1 200 OK
Allow: GET, PUT
Date: Fri, 01 Feb 2013 15:31:18 GMT
Content-Length: x

[{"key":"ABCD",name:"Container #ABCD","devices":["ABCD/0bee89b07a248"]}]
```

The `key` parameter is the same as we entered in the calibration
memory of the TinyMesh module, `name` is in this case auto generated and
finally `devices` is a list of id's used to identify a device (the
gateway device in this case). If you go ahead and add a new device to
the TinyMesh™ container it will automatically create a device object
and you will be able to see it in the `devices` array.

## Retrieving Messages

The most interesting data to look at is the messages. Most likely you
would query a time series of message either by a device or by a
container using the [[HTTP Fetching Messages]] operation. All the
messages are then subjected to filtering and returned in the format
defined by the `Accept` header.

**Fetch messages from the container**
```bash
curl api.tiny-solution.com/messages/ABCD?date.from=2013-02-02T00:00:00Z
HTTP/1.1 200 OK
Allow: GET
Date: Fri, 01 Feb 2013 15:31:43 GMT
Content-Length: x

[{"key":"ABCD/0bee89b07a248/20130201151859","type":"event",
"detail":"get_cad","caddr":"ABCD", ..... }]
```

As seen above all queries must have a date range, by default the
date.to is set to the current time. The [[Date Field]] support some basic
math operations like "2013-02-02T:00:00:00Z-1WEEK", alternatively you
can use the string literal NOW to work with relative time; e.g.
"NOW-1HOUR". All the dates must be valid ISO 8601 datetimes.

### Filtering responses

TinySolution would not be very flexible if we could not manipulate the
result set. Additionally to the dynamic parser driving business logic
we can only query for certain parts of the result using `filter` and
`exclude` parameters.

```bash
curl api.tiny-solution.com/messages/ABCD?date.from=NOW-1HOUR&filter=key,caddr
HTTP/1.1 200 OK
Allow: GET, PUT
Date: Fri, 01 Feb 2013 15:33:18 GMT
Content-Length: x

[{"key":"ABCD/0bee89b07a248/20130201151942","caddr":"ABCD"}]
```

Using the `filter` parameter will only return the fields specified,
`exclude` does the exact opposite and removes the specified fields.
