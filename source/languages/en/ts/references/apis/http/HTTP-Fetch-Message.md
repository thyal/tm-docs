---
title: Fetch Message
project: ts
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: [api, http, messages]
group_by: "Query Operations"
---

Fetch a single message.


## Request

```bash
GET /message/:container/:device/:message
```

Returns a object containing fields according to [[Message Formats|Message Format]]
or the binary TinyMesh message if `Accept` header is set to accept
`application/octet-stream`.


## Response

**Normal status codes:**

* `200 OK` - on successful retrieval of message

**Error codes:**

* `404 Not Found` - when the message was not found


## Example

```bash
curl -D - api.tiny-solution.com/message/YqZi/ClP4aTE=/20130201151318 

HTTP/1.1 200 Created
Allow: GET
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

{"key":"YqZi/ClP4aTE=/20130201151318","type":"command",
"command":"serial","unique_id":51,"packet_number":177,
"payload":"hello, world"}
```
