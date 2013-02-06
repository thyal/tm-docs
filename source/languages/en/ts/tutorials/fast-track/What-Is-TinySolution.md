---
title: What is TinySolution
project: ts
version: 0.0.1+
document: tutorial
audience: beginner
keywords: [tutorial, fast-track]
prev: "[[The TinySolution Fast Track]]"
up:   "[[The TinySolution Fast Track]]"
next: "[[Connecting To TinySolution]]"
versions: false
interest: [
]
---

TinySolution™ allows information to be exchanged over the Internet,
between physical hardware and high-level application software. TinySolution™
provides a communication infrastructure that allows application designers
to access TinyMesh™ devices via bi-directional, encrypted data streams,
using either raw binary data or structured documents using either XML or JSON.

TinySolution™ provides 2 interfaces, one low-level interface for
connecting TinyMesh™ containers and one high-level interface for
connecting applications. The notable difference being the low-level
binary interface is exposed only to TinyMesh devices, whilst the
high-level interface is the one used by your applications.


### How Can I Interface TinySolution?

All client applications will address the high-level API which utilises
the HTTP protocol as transport and consumes both XML, JSON and binary. 
All data is stored hierarchically and easily accessible using most modern
HTTP libraries for your programming language. We will provide [[Client
Libraries]] for some of the common languages in the future.

For development, the absolute easiest way is to interface TinySolution
is either using your web-browser, `curl` or similar tool.

<div class="info">
 Throughout this guide we use `curl` in our example, some of the examples
 can be viewed in your web-browser. Check out [[Client Libraries]] for
 other alternative to `curl`
</div>

### What Data Can I Query

TinySolution™ containers has a 1 to 1 mapping with a TinyMesh installation,
each container consists of 1 or more TinyMesh™ devices. Each device contains
a series of messages. All the data elements - _containers, devices and
messages_ - can be accessed from the high-level [[HTTP API]].


### Terminology

<table>
 <theaD>
  <tr>
   <th><b>Term</b></th>
   <th><b>Description</b></th>
  </tr>
 </thead>
 <tbody>
  <tr><td><b>Container</b></td>     <td>A TinyMesh installation</td></tr>
  <tr><td><b>Device</b></td>        <td>The TinyMesh device</td></tr>
  <tr><td><b>Message</b></td>       <td>A single message originating from a _Device_</td></tr>
  <tr><td><b>Gateway Device</b></td><td>The TinyMesh device serving as gateway</td></tr>
  <tr><td><b>Network Connector</b></td>
   <td>A TCP/IP enabled device capable of communicating with the
    <i>Gateway Device</i> UART as well as the TinySolution endpoint.
   </td></tr>
 </tbody>
</table>
