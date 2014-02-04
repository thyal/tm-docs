---
title: Set Default Container Configuration
project: ts
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: [api, http, container]
group_by: "Query Operations"
---

Set the default configuration options for a container. When set, all
nodes connecting will automatically be configured.

## Request

```bash
GET /container/YWIK/
```

## Response

**Normal status codes:**

* `200 OK` - _on successfull update_
* `204 No Content` - _when return query parameter equals false_

**Error status codes:**

* `400 Bad Request` - _when configuration is invalid_
* `404 Not Found` - _when container does not previously exist_

**Important headers:**

* `Content-Type` - _when content is not JSON, specify mime_
* `Authorization` - _provide valid token if not already specified in url_

## Example

Set default configuration for system_id and rf_channel.

```bash
curl -X PUT -D - api.tiny-solution.com/container/YWIK -d "{config :{\
	system_id  : 13,
	rf_channel : 4
}}"

HTTP/1.1 200 Ok
Allow: GET, POST, PUT
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

{"key":"YWIK","name":"Container update","config":{"system_id":13,"rf_channel":4}}
```
