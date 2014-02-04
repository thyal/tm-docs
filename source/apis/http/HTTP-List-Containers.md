---
title: Fetch Container
project: tiny-solution
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: [api, http]
group_by: "Query Operations"
---

List all containers.

## Request

```bash
GET /container/
```

## Returns

A list of all container ID's.

## Response

**Normal status codes:**

* `200 OK`

**Error status codes:**

* `401 Unauthorized` - _when no user credentials are supplied_
* `403 Forbidden` - _when the user lacks permission to create a container_

**Important headers:**

* `Authorization` - _provide valid token if not already specified in url_

## Example

```bash
dev@lp:~ $ curl -D - api.tiny-solution.com/container
HTTP/1.1 200 Ok
Allow: GET, POST
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

["YWIK","AA2="]
```
