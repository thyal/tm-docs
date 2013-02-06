---
title: HTTP Create Container
project: ts
version: 0.0.1+
document: api
toc: true
audience: advanced
keywords: [api, http, container]
group_by: "Query Operations"
---

Create a new container

## Request

```bash
POST /container/
```

Expects a object with containing the index `name`.


## Return

A object containing the indexes: the `key`, `name`, and list of `devices`.

## Response

**Normal status codes:**

* `201 Created` - _on successfull creation_
* `204 No Content` - _when return query parameter equals false_

**Error status codes:**

* `400 Bad Request` - _on errors?_
* `401 Unauthorized` - _when no user credentials are supplied_
* `403 Forbidden` - _when the user lacks permission to create a container_

**Important headers:**

* `Content-Type` - _if content is not JSON, specify mime_
* `Authorization` - _provide valid token if not already specified in url_

## Example

```bash
dev@lp:~ $ curl -D - api.tiny-solution.com/container -d "{name : \"First Container\"}"
HTTP/1.1 301 Created
Allow: GET, PUT
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

{"key":"YWIK","name":"First Container","devices":[]}
```
