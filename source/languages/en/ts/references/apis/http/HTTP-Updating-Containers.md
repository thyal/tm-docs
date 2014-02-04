---
title: Update Container
project: ts
version: 0.0.1+
document: api
toc: true
audience: advanced
keywords: [api, http, container]
group_by: "Query Operations"
---

Update container information

## Request

```bash
PUT /container/YWiK
```

## Response

**Normal status codes:**

* `200 OK` - _on successfull update_
* `204 No Content` - _when the **return** query parameter equals false_

**Error codes:**

* `400 Bad Request` - _if the format of the query in the URL is invalid_
* `404 Not Found` - _if the origin object of the walk was missing_

**Important headers:**

* `Content-Type` - _if content is not JSON, specify mime_
* `Authorization` - _provide valid token if not already specified in url_

## Example

```bash
curl -X PUT -D - api.tiny-solution.com/container/YWIK -d "{name : \"Container update\"}"
HTTP/1.1 200 Ok
Allow: GET, POST, PUT
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

{"key":"YWIK","name":"Container update"}
```
