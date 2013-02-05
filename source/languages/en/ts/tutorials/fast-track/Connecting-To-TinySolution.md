---
title: Connecting to TinySolution
project: ts
version: 0.0.1+
document: tutorial
audience: beginner
keywords: [tutorial, fast-track]
prev: "[[What Is TinySolution]]"
up:   "[[The TinySolution Fast Track]]"
next: "[[Querying TinySolution]]"
versions: false
interest: [
"[[Containers]]",
"[[TinyMesh Configuration]]"
]
---

This page describes how you can connect a TinyMesh network to TinySolution.


## Gateway Device Configuration

All networks connected to TinySolution requires a unique [[Container Address|Containers#Container-Address]]
to perform a handshake. The [[Container Address|Containers#Container-Address]]
is stored in the calibration memory and can be accessed by setting the
Gateway Module in configuration mode (describe in the data sheet).

To perform the configuration we expect you to be familiar with
configuring TinyMesh devices through the UART interface. If not you
should read the "Module Configuration" chapter in the TinyMesh data sheet.

<div class="info">
 <div class="title">TinyMesh Firmware Version</div>
 <p>
  To connect to the TinySolution web-service, the gateway module must
  use firmware revision _1.34_ or greater. Contact your local distributor
  to aid you in flashing the gateway module.
 </p>
</div>


**Steps to provision a gateway device:** _(assumes an already configured
gateway device)_

1. Connect the Gateway Device to a serial port interface
1. Set the device in configuration mode
1. Using your favourite [[Terminal Emulator|Terminal Emulators]],
   setup the connection _(default baudrate: 19200)_.
1. Enter the `Calibration Memory` by using the `HW` command.
1. Input container address in address 23 to 26.
1. Exit calibration.

The example below shows a session where we set container address to
`ABCD`; _all lines starting with <u>3e</u> are outputted from the
device._

```
3E __ __ __|__ __ __ __  >_______
48 57 __ __|__ __ __ __  HW______
3E __ __ __|__ __ __ __  >_______
17 41 18 42|19 43 1A 44  ABCD
FF __ __ __|__ __ __ __  ÿ_______
3E __ __ __|__ __ __ __  >_______
58 __ __ __|__ __ __ __  X_______
```

{{#<=0.0.1}}
<div class="info">
 <div class="title">ACK/NAK protocol</div>
 <p>
  All messages received automatically triggers a acknowledge response
  consisting of a single byte: 6. This data is consumed by the `Gateway
  Module` and is never passed into the mesh. This cannot currently disabled.
 </p>
</div>
{{/<=0.0.1}}


## Network Connector Configuration

To extend TinyMesh network layer onto the TCP/IP stack the gateway
module must be connected to a [[Network Connector|Network Connectors]] by UART. There are
2 common options:

1. *Development:* Running a [[RS232-TCP/IP|Network Connectors#GURI]] proxy on a computer
2. *Production:* Using a [[GPRS|Network Connectors#GPRS]] modem or similar

The following information can be used for connecting:

<table>
 <tr>
  <th>Parameter</th>
  <th>Value</th>
  <th>Description</th>
 </tr>
 <tr>
  <td><b>IP Address</b></td>
  <td>5.10.65.227</td>
  <td>The IP address containing TinyMesh API endpoin</td>
 </tr>
 <tr>
  <td><b>Hostname</b></td>
  <td>tm.endpoint.api.tiny-solution.com</td>
  <td>The DNS hostname for the TinyMesh API endpoint</td>
 </tr>
 <tr>
  <td><b>Port</b></td>
  <td>7001</td>
  <td>The remote port used for communication</td>
 </tr>
</table>


## How TinySolution Identifies Devices

When a device connects to TinySolution a handshake is performed. When
connecting the device is asked for it's CAD (Container Address) with
the following command (decimal representation):

```erlang
10 0 0 0 0 0 3 16 0 0
```

The expected response is a [[Get CAD|Messages#event]]
message. When received, to validate the authenticity, TinySolution will
check the digital signature included in the message; if successful
the device is authenticated.

There might be race-condition where the device sends a message before
the [[Get CAD|Messages#event]] command is received, if so TinySolution will buffer that
message until the device is successfully authorized or the connection
is terminated.
