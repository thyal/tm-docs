---
title: What is TinySolution
project: tiny-solution
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
between physical TinyMesh hardware and high-level application software. TinySolution™
provides a communication infrastructure that allows application designers
to access TinyMesh™ devices via bi-directional, encrypted data streams,
using either raw binary data or structured documents using either [[XML|http://en.wikipedia.org/wiki/XML]] or [[JSON|http://en.wikipedia.org/wiki/JSON]].

TinySolution™ provides two interfaces, a low-level interface for
connecting TinyMesh™ networks (also known as container) and a high-level interface for
connecting your applications. The notable difference being the low-level
binary interface is exposed only to TinyMesh devices, whilst the
high-level interface is the one used by your applications.


### How Can I Interface TinySolution?

All your applications will address the high-level API which utilises
the HTTP protocol as transport and consumes XML, JSON and binary.
All data is stored hierarchically and is easily accessible using most modern
HTTP libraries for your programming language. We will provide [[Client
Libraries]] for some of the common languages in the future.

For development, the easiest way to interface TinySolution is either
using your web-browser, `curl` or similar tools.

<div class="info">
 Throughout this guide we use <code>curl</code> in our example, some of the examples
 may be viewed in your web-browser. Check out [[Client Libraries]] for
 other alternatives to <code>curl</code>
</div>

### What Data Can I Query

TinySolution™ Containers have a one to one mapping with a TinyMesh network,
each Container consists of one or more TinyMesh™ devices. Each Device
stores a series of Message. All the data elements - _Containers,
Devices and Messages_ - can be accessed from the high-level [[HTTP API]].

### Terminology

<table>
 <thead>
  <tr>
   <th><b>Term</b></th>
   <th><b>Description</b></th>
  </tr>
 </thead>
 <tbody>
  <tr><td><b>Container</b></td>     <td>A TinyMesh network</td></tr>
  <tr><td><b>Device</b></td>        <td>The TinyMesh device</td></tr>
  <tr><td><b>Message</b></td>       <td>A single message originating from a _Device_</td></tr>
  <tr><td><b>Gateway Device</b></td><td>The TinyMesh device serving as Gateway</td></tr>
  <tr><td><b>Network Connector</b></td>
   <td>A TCP/IP enabled device capable of communicating with the
    <i>Gateway Device</i> UART as well as the TinySolution endpoint.
   </td></tr>
 </tbody>
</table>
