---
title: CURL library
project: tiny-solution
version: 0.0.1
document: cookbook
toc: false
index: true
audience: beginner
keywords: [client-libraries]
simple: true
versions: false
---

# CURL

[[CURL|http://www.curl.haxx.se/]] is a program that easily lets you
communicate with HTTP(S) based service on Unix based systems (or using
[[Cygwin|http://www.cygwin.com/]]/[[MinGW|http://www.mingw.org/]]
for Windows based systems).

<div class="info">
 <div class="title">Using CURL</div>
 <p>
  `curl` should only be used to verify information or testing out the
   API itself, *<b><u>DO NOT</u></b>* use curl in your code.
 </p>
</div>

## Basic example

Curl is incredible versatile, and with just a few flags you can
manipulate the most important parts of the request. The most important
flags are:

<table>
 <tr>
  <th><b>Argument</b></th>
  <th><b>Description</b></th>
 </tr>
 <tr>
  <td><i>-d @[file]</i></td>
  <td>Send a POST request using contents of file <i>[file]</i></td>
 </tr>
 <tr>
  <td><i>-d [data]</i></td>
  <td>Send a POST request including <i>[data]</i></td>
 </tr>
 <tr>
  <td><i>-X [method]</i></td>
  <td>Perform a request using <i>[method]</i> as the request method</td>
 </tr>
 <tr>
  <td><i>-H [header]</i></td>
  <td>Append <i>[header]</i> to the request</td>
</table>


**To get a better overview of CURL and what you can do with it, be
sure to read the man pages**


View other [[Client Libraries]]
