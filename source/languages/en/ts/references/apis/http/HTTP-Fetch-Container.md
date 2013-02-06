---
title: Fetch Container
project: ts
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: [api, http, containers]
group_by: "Query Operations"
---

Fetch information about a single container.

## Request

```bash
GET /container/<container>
```

## Response

**Normal status codes:**

* `200 OK`

**Error status codes:**

* `401 Unauthorized` - _when no user credentials are supplied_
* `403 Forbidden` - _when the user lacks permission to create a container_
* `404 Not Found` - _when container was not found_

**Important headers:**

* `Authorization` - _provide valid token if not already specified in url_

## Example

```bash
dev@lp:~ $ curl -D - api.tiny-solution.com/container/YWIK
HTTP/1.1 200 Ok
Allow: GET, PUT
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

{"key":"YWIK","name":"Updated Container","devices":[]}
```
