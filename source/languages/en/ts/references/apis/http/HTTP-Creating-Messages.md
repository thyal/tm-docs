---
title: Create Message
project: ts
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: [api, http]
group_by: "Query Operations"
---

Create a new message for the device specified. The structure of the
message must be as defined in [[Message Format]]. Values like
`unique_id` and `system_id` are set by the system, whilst
`package_number` can optionaly be specified. All other parameters are
required.

<div class="info">
 <div class="title">Delivering messages to TinyMesh modules</div>
 <p>
   Only messages of the type `command` will be sent to the mesh network.
   Creating `event` or `serial` messages from the API is discouraged.
 </p>
</div>

## Request

```bash
POST /message/<container>/[<device>|broadcast]
```

<div class="info">
 <div class="title">Broadcast messages</div>
 <p>
  By using _**broadcast**_ as the device id, the message will be
  sent to all members in the container.
 </p>
</div>

## Response

**Normal status codes:**

* `201 Created` - _on successfull creation_
* `204 No Content` - _when return query parameter equals false_

**Error status codes:**

* `400 Bad Request` - _on errors?_
* `401 Unauthorized` - _when no user credentials are supplied_
* `403 Forbidden` - _when the user lacks permission to create a container_

Important headers:

* `Content-Type` - _if content is not JSON, specify mime_
* `Authorization` - _provide valid token if not already specified in url_

## Example

```bash
curl -D - api.tiny-solution.com/message/YqZi/0bee89b07a248 -d "{ \
\"type\"    : \"command\", \
\"command\" : \"serial\", \
\"payload\" : \"hello, world\"}"

HTTP/1.1 301 Created
Allow: GET, POST, PUT
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

{"key":"YqZi/0bee89b07a248/20130201151318/command","type":"command",
"command":"serial","unique_id":51,"packet_number":177,
"payload":"hello, world"}
```
