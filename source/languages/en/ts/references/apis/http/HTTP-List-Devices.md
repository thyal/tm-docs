---
title: List devices
project: ts
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: [api, http]
group_by: "Query Operations"
---

List all the devices in a container

## Request

```bash
GET /device/<container>
```

Returns a list of device keys

## Response

**Normal status codes:**

* `200 OK` - on successful retrieval of device resources

**Error codes:**

* `404 Not Found` - if the container resource does not exits

## Example

```bash
dev@lp:~ $ curl api.tiny-solution.com/device/YWIK

HTTP/1.1 200 OK
Allow: GET, POST
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

["YWIK/ClP4aTE="]
```
```
