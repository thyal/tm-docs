---
title: Fetch Device
project: tiny-solution
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: [api, http]
group_by: "Query Operations"
---

Fetch device representation.

## Request

```bash
GET /device/<container>/<device>
```

Returns an object with fields specified in [[HTTP Create Device|HTTP Create Device#Request]]

## Response

**Normal status codes:**

* `200 OK` - on successful retrieval of the device

**Error codes:**

* `404 Not Found` - if the device was not found

## Example

```bash
dev@lp:~ $ curl api.tiny-solution.com/device/YWIK/ClP4aTE=

HTTP/1.1 200 OK
Allow: GET, PUT
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

{"key":"YWIK/ClP4aTE=","address":"MCwwLDAsMSwwLDAsMCwx","type":"device","config":[]}
```
