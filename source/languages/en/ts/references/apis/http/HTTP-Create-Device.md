---
title: Create Device
project: ts
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: [api, http-operation]
group_by: "Query Operations"
---

Creates a new device in a container.

## Request

```bash
POST /device/<container>
```

Expects an object with the following scheme:

<table>
 <tr>
  <th><b>Field</b></th>
  <th><b>Data type</b></th>
 </tr>
 <tr>
  <td><b>address*</b></td>
  <td>8 byte address encoded as [[Base64|http://en.wikipedia.org/wiki/Base64]]</td>
 </tr>
 <tr>
  <td><b>type</b></td>
  <td>The type of device, only supports lowercase characters and underscore. <i>(default: <u>device</u>)</i></td>
 </tr>
 <tr>
  <td><b>name</b></td>
  <td>Name of device encoded as UTF-8 string <i>(default: hex representation of address)</i></td>
 </tr>
</table>

## Response

**Normal status codes:**

* `204 No Content` - on successful creation, no content return _(async)_
* `301 Created` - on successful creation, returns _device_ representation

**Error codes:**

* `400 Bad Request` - when any errors where found in the input
* `404 Not Found` - when the container does not exists


## Example

```bash
dev@lp:~ $ curl api.tiny-solution.com/device/YWIK -d '{"address":"MCwwLDAsMSwwLDAsMCwx"}'

HTTP/1.1 301 Created
Location: api.tiny-solution.com/YWIK/ClP4aTE=
Allow: GET, POST
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

{"key":"YWIK/ClP4aTE=","address":"MCwwLDAsMSwwLDAsMCwx","type":"device","config":[]}
```
