---
title: Network Connectors
project: ts
version: 0.0.1
document: cookbook
toc: true
index: true
audience: beginner
keywords: [faq, network-connector]
versions: false
---

A Network Connector is a device or piece of software responsible for
connecting a TinyMesh gateway device with TinySolution. Usually you
will use a Software variant during development and testing then move
on to a hardware solution for production.


## Hardware Solutions

When deploying a production environment to the field we recommend
using a dedicated hardware solution responsible for communicating with
TinySolution. This type of solution will typically be a GPRS modem or
a different embedded device connected to the internet.

What type of solution you choose is dictated by uptime requirements
and the physical installation site.

### GPRS

For GPRS modems you can acquire a TinyMesh enabled plug-in card for the
[[Sierra Wireless AirLink|http://www.sierrawireless.com/en/productsandservices/AirLink/Programmable_Modems/Fastrack_Xtend_EDGE.aspx]].


## Software Solutions

We offer a free software solution based on [[Twisted|http://twistedmatrix.com]] to serve as a RS232-TCP/IP proxy. It can run on any platform
supporting the [[Python programming language|http://python.org/]].

Source code and installation instructions can be [[found
here|http://github.com/tinymesh/GURI]]
