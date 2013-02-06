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

This page describes how you can connect a TinyMesh container to TinySolution.


## Gateway Device Configuration

A _container_ connected to TinySolution requires a unique [[Container Address|Containers#Container-Address]]
to perform a handshake. The [[Container Address|Containers#Container-Address]]
is stored in the calibration memory of the device and can be configured
by setting the Gateway Device in configuration mode.

To perform the configuration we expect you to be familiar with
configuring TinyMesh devices through the UART interface. If not you
should read the "Module Configuration" chapter in the TinyMesh data sheet.

<div class="info">
 <div class="title">TinyMesh Firmware Version</div>
 <p>
  To connect to the TinySolution web-service, the gateway module must
  use firmware revision _1.34_ or greater. Contact your local distributor
  for aid in flashing the gateway device.
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
  All messages received triggers an automatic acknowledge response
  consisting of a single byte: 6. This data is consumed by the `Gateway
  Devie` and is never passed into the mesh. This cannot currently disabled.
 </p>
</div>
{{/<=0.0.1}}


## Network Connector Configuration

To connect your TinyMesh installation with TinySolution the gateway 
device must be connected to a [[Network Connector|Network Connectors]] by UART.
There are 2 common options:

1. *Production:* Using a [[GPRS|Network Connectors#GPRS]] modem or similar
1. *Development:* Running a [[RS232-TCP/IP|Network Connectors#Software-Solution]] proxy on a computer

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


<div class="info">
 <div class="title">How TinySolution Identifies Devices</div>
 <p>
  If you monitor the data going over the gateway device UART you can
  observe the handshake. When connecting the gateway device
  TinySolution will send a Get CAD (Container Address) message which
  has the following decimal representation: `10 0 0 0 0 0 3 16 0 0`.
 </p>
 <p>
  The expected response is a [[Get CAD|Messages#event]]
  message. When received, to validate the authenticity, TinySolution will
  check the digital signature included in the message; if successful
  the device is authenticated.
 </p>
</div>
