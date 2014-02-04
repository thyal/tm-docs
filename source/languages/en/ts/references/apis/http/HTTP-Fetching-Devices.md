---
title: Fetch Device
project: ts
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: [api, http]
group_by: "Query Operations"
---

Short description

## Request

```bash
GET /.....
```

<div class="info">
	<div class="title">Link filters</div>
</div>

## Response

Normal status codes:

* `200 OK`

Typical error codes:

* `400 Bad Request` - if the format of the query in the URL is invalid
* `404 Not Found` - if the origin object of the walk was missing

Important headers:

* `Content-Type` - always `multipart/mixed`, with a boundary specified

## Example

```bash
```
