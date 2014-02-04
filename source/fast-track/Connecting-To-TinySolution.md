---
title: Connecting to TinySolution
project: tiny-solution
version: 0.0.1+
document: tutorial
audience: beginner
keywords: [tutorial, fast-track]
prev: "[[What Is TinySolution]]"
up:   "[[The TinySolution Fast Track]]"
next: "[[Querying TinySolution]]"
versions: false
interest: [
]
---

This page describes how to connect a new container to TinySolution.

## Gateway Device Configuration

A _Container_ connected to TinySolution requires a unique Container Address
to distinguish itself from other TinyMesh networks. The Container Address
is stored in the Calibration Memory of the Device and can be configured
by setting the Gateway Device in configuration mode.

To perform the configuration we expect you to be familiar with
configuring TinyMesh devices through the UART interface. If not you
should read the "Module Configuration" chapter in the TinyMesh data sheet.

<div class="info">
 <div class="title">TinyMesh Firmware Version</div>
 <p>
  To connect to the TinySolution web-service, the gateway module must
  use firmware revision _1.35_ or greater. Contact your local distributor
  for aid in flashing the Gateway Device.
 </p>
</div>


**Steps to provision a Gateway Device:** _(assumes an already configured Gateway Device)_

1. Connect the Gateway Device to a serial port interface
1. Set the Device in configuration mode
1. Using your favourite [[Terminal Emulator|Terminal Emulators]],
   setup the connection _(default baudrate: 19200)_
1. Edit the `Calibration Memory` by using the `HW` command
1. Input container address in address 23 to 26
1. Execute the `'0xFF'` command to terminate the `Calibration Memory` command
1. Edit the `Configuration Memory` by using the `M` command
1. Set address number 3 to `0`
1. Execute the `'0xFF'` command to terminate the `Configuration Memory` command
1. Execute the `X` command to set the device normal state

{{#<=0.0.1}}
<div class="info">
 <div class="title">ACK/NAK protocol</div>
 <p>
  When monitoring the communications you will see that all messages
  received trigger an automatic acknowledge response
  consisting of a single byte: 6. This data is consumed by the `Gateway
  Device` and is never passed into the mesh. This cannot currently disabled.
 </p>
</div>
{{/<=0.0.1}}


## Network Connector Configuration

To connect your TinyMesh installation with TinySolution, the Gateway
Device must be connected to a [[Network Connector|Network Connectors]] by it's UART interface.
There are 2 options:

1. *Production:* Using a [[GPRS|Network Connectors#GPRS]] modem or similar
1. *Development:* Running a [[RS232-TCP/IP|Network Connectors#Software-Solution]] proxy on a computer

**Connection information:**

<table>
 <tr>
  <th>Parameter</th>
  <th>Value</th>
  <th>Description</th>
 </tr>
 <tr>
  <td><b>IP Address</b></td>
  <td>5.10.65.227</td>
  <td>The IP address containing the TinySolution API endpoint</td>
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
  If you monitor the data going over the Gateway Device UART, you may
  observe the handshake. When a Gateway Device connects to
  TinySolution, a Get CAD (Container Address) message with the
  following decimal representation: `10 0 0 0 0 0 3 16 0 0` will be sent.
 </p>
 <p>
  The expected response is a [[Get CAD|Messages#event]]
  message. When received, to validate the authenticity, TinySolution will
  check the digital signature included in the message; if successful
  the Device is authenticated.
 </p>
</div>
