---
title: Streaming Data
project: tiny-solution
version: 0.0.1+
document: tutorial
audience: beginner
keywords: [tutorial, fast-track]
prev: "[[Sending Data]]"
up:   "[[The TinySolution Fast Track]]"
versions: false
interest: [
"[[HTTP Streaming Data]]",
"[[Querying Data]]",
]
---

To instantaneously receive data from Devices in a Container, you may
enable data streaming from TinySolution™. Streaming is an add-on
feature to the [[Query Module|Querying Data]], this includes
functionality like filtering and time ranges aswell.


## Stream data infinitely

By default there is no limitation on how long you may stream data.
The data is sent as chunks over HTTP, the connection is kept until
the client disconnects.

```bash
curl api.tiny-solution.com/messages/ABCD?stream=true&filter=key
HTTP/1.1 200 OK
Allow: GET
Date: Fri 01 Feb 2013 15:59:31 GMT
Content-Type: application/json
Transfer-Encoding: chunked

["ABCD/0bee89b07a248/20130201160221"]
```

<div class="info">
 <div class="title">Data returned as JSON list</div>
 <p>
  When returning JSON, all data is wrapped in a list, as the keys
  in a JSON object are uniquely identified in contrast to XML.
 </p>
</div>

### Stream for a defined time range

Just as easy we may stream until a certain date, this is done by
setting the `date.to` query parameter somewhere into the future (for
instance by using `NOW+1HOUR`). If the date has already passed, the
connection will close.

<div class="info">
 <div class="title">Resuming a stream</div>
 <p>
  If the client disconnects, it may resume the stream by
  setting the `Last-Event-ID` HTTP Header to the ID of the last
  received message.
 </p>
</div>
