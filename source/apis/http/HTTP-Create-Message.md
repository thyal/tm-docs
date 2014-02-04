---
title: Create Message
project: tiny-solution
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: [api, http, messages]
group_by: "Query Operations"
---

Create a new message for the device specified. The structure of the
message must be as defined in [[Message Formats|Message Format]]. Values like
`unique_id` and `system_id` are set by the system, whilst
`package_number` can optionally be specified. All other parameters are
required.

<div class="info">
 <div class="title">Message distribution</div>
 <p>
   Only messages of the type `command` will be sent to the mesh network.
   Creating `event` or `serial` messages from the API is discouraged.
 </p>
</div>

## Request

```bash
POST /message/:container/<:device|broadcast>
```

Takes a structured TinyMesh package or optionally, if `Content-Type`
equals `application/octet-stream`, a binary string. If the
input is binary, a complete TinyMesh message must be given. The
content is validated and must match the address information for the
device.

<div class="info">
 <div class="title">Broadcast messages</div>
 <p>
  By using _**broadcast**_ as the device id, will send the messages to
  all members in the container.
 </p>
</div>

<div class="info">
 <div class="title">Sending Binary</div>
 <p>
  When sending binary you should also set the `Content-Encoding`
  header if the content is encoded. Possible encoding are `binary`,
  `hex` or `base64`; default value is `binary`. Content should be
  encoded whenever possible.
 </p>
</div>


## Response

**Normal status codes:**

* `201 Created` - on successful creation, returns _message_ representation
* `204 No Content` - on successful creation, no content returned _(async)_

**Error codes:**

* `400 Bad Request` - when any errors where found in input


## Example

```bash
curl -D - api.tiny-solution.com/message/YqZi/ClP4aTE= -d '{ \
"type"    : "command", \
"command" : "serial", \
"payload" : "hello, world"}'

HTTP/1.1 201 Created
Allow: GET, POST, PUT
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

{"key":"YqZi/ClP4aTE=/20130201151318","type":"command",
"command":"serial","unique_id":51,"packet_number":177,
"payload":"hello, world"}
```
