---
title: Date Field
project: tiny-solution
version: 0.0.0+
document: api
toc: true
audience: advanced
keywords: []
group_by: "Query Fields"
---

The Date field is used to select a date time based on some simple
mathematical constructs. The field expects input formatted as ISO 8601
or the string literal `NOW` which represents the current server time.

You can manipulate the field by adding or subtracting time, the
commands can be chained together and are parsed from left to right.

The following commands are supported:

* `+[N][UNIT]` add _[UNIT]_ of time where _[N]_ is an integer.
* `-[N][UNIT]` subtract _[UNIT]_ of time where _[N]_ is an integer.

Unit can be one of the following: `MINUTE`, `HOUR`, `DAY`, `WEEK`,
`MONTH` and `YEAR`.


