---
title: List Messages
project: ts
version: 0.0.1+
document: api
toc: true
audience: advanced
keywords: [api, http]
group_by: "Query Operations"
---

Fetch a list of messages.

## Request

```bash
GET /messages/:container/<:device>
```

Returns a list of message objects

**The following query parameters can be used to narrow the search
result:**

* `date.from` - A [[ISO 8601 date time|Date Field]] to limit the results
* `date.to`   - A [[ISO 8601 date time|Date Field]] to limit the results
* `qf`        - A comma separated list of fields to match. (currently only `type:_` and `detail:_` is supported)
* `limit`     - Only return N amount of rows

**The following query parameters can be used to filter the results:**

* `resp.filter`  - A comma separated list of fields to include in result set
* `resp.exclude` - A comma separated list of fields to exclude in result set
* `sort.field`   - The field to sort by, use `true` to sort by value
* `sort.reverse` - `true|false` indicating whether to reverse results

If no messages are found, an empty list will be returned.

#### Streaming

Messages can be streamed by adding the `stream` query parameter, the
value is either `true` or a [[ISO 8601 date time|Date Field]]
indicating what time to stop streaming.

If `limit` is given, streaming will stop when the limit is reached.

## Response

**Normal status codes:**

* `200 OK` - on successful retrieval of messages
<div class="info">
 <p>An empty result set is considered successful. An empty list will
be returned if there was not matches.
 </p>
</div>

**Error codes:**

* `400 Bad Request` - when there was an error with the query parameters
* `404 Not Found` - when the _container_ or _device_ was not found

## Example #1

```bash
curl -D - api.tiny-solution.com/messages/YWIK
HTTP/1.1 200 Ok
Allow: GET, POST, PUT
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

[{"key":"YqZi/ClP4aTE=/20130201151318","type":"command",
"command":"serial","unique_id":51,"packet_number":177,
"payload":"hello, world"}]
```

## Example #2 - Streaming
```bash
curl -D - api.tiny-solution.com/messages/YWIK?stream=true&limit=1
HTTP/1.1 200 Ok
Allow: GET, POST, PUT
Date: Fri, 01 Feb 2013 15:13:18 GMT
Content-Length: x

[{"key":"YqZi/ClP4aTE=/20130201181318","type":"command",
"command":"serial","unique_id":51,"packet_number":178,
"payload":"hello, world 2"}]
```
