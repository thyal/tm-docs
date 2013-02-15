---
title: Message Format
project: ts
version: 0.0.1+
document: tutorial
audience: beginner
keywords: [messages]
versions: false
toc: true
interest: [
"[[HTTP Create Message]]",
"[[HTTP Update Message]]",
"[[HTTP List Message]]",
"[[HTTP Fetch Message]]",
]
---

The structure of a messages is defined by the `type` field, it can be
one of the following: `command`, `event` or `serial`. The two later
are generally generated within a TinyMesh container and the first is
generated on the application side.

All messages share at least this common base structure. Depending on
the message type additional fields will be added.

```json
{
	"unique_id" : 0,
	"type"      : "",
}
```

## Command Messages

Command messages is the simplest message as it at the minimum only add
the `packet_number` and `command` fields. The following commands can
be used:

**Commands taking no arguments:**

```json
{
	"unique_id" : 0,
	"type"      : "command",
	"command"   : "get_cad|get_status|get_did|get_config|force_reset|get_path|set_gw_config_mode"
}
```

**Set Outputs:**


```json
{
	"unique_id" : 0,
	"type"      : "command",
	"command"   : "set_outputs",
	"output"    : { "gpio_X" : "0.255" }
}
```

**Set PWM:**

```json
{
	"unique_id" : 0,
	"type"      : "command",
	"command"   : "set_pwm",
	"pwm"       : "0..100"
}
```

**Set Config:**

```json
{
	"unique_id" : 0,
	"type"      : "command",
	"command"   : "set_config",
    "config"    : { "<config_param>"  : "value", .. }
}
```

**Send Serial Data:**

```json
{
	"unique_id" : 0,
	"type"      : "command",
	"command"   : "serial",
    "data"      : "serial payload....",
}
```
