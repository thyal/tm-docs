---
title: Update Device
project: tiny-solution
version: 0.0.1+
document: api
toc: true
audience: advanced
keywords: [api, http, device]
group_by: "Query Operations"
---

Update the representation of a _device_

## Request

```bash
PUT /device/<container>/<device>
```

Takes an object and updates the representation of the device with the
new fields. The supported fields are specified in [[HTTP Create Device|HTTP Create Device#Request]].

By default this operation replaces the current representation of the
device. To perform a partial update use the `patch=true` query
parameter.


## Response

**Normal status codes:**

* `200 OK` - on successful update, returns _device_ representation
* `204 OK` - on successful update, no content return _(async)_

**Error codes:**

* `400 Bad Request` - when any input errors occured
* `404 Not Found` - when the _container_ does not exist

## Example

```bash
dev@lp:~ $ curl api.tiny-solution.com/device/YWIK -d '{"address":"MCwwLDAsMSwwLDAsMCwx"}'

HTTP/1.1 200 Created
Location: api.tiny-solution.com/YWIK/ClP4aTE=
Allow: GET, POST
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

{"key":"YWIK/ClP4aTE=","address":"MCwwLDAsMSwwLDAsMCwx","type":"device","config":[]}
```
