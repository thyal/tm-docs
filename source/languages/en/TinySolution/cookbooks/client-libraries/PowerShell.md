---
title: PowerShell
project: ts
version: 0.0.1
document: cookbook
toc: false
index: true
audience: beginner
keywords: [client-libraries]
simple: true
versions: false
---

# PowerShell

PowerShell is shell running on most systems running with .NET
Framework. It's can be used as replacement for [[CURL]] on Windows
systems.

## Basic example

The short snippet below can be used to call the API from PowerShell,
save it to your computer and run it by opening PowerShell.

**ts-call.ps1**: Short code snippet to test API from PowerShell

```powershell
param($url)

$req = new-object System.Net.WebClient;
$req.Headers.Add("Accept", "application/xml")
([xml]$req.DownloadString($url)).OuterXML
```

You can now call `ts-call.ps1 http://api.tiny-solution.com/...` from 
a PowerShell session. Refer to [[System.Net.WebClient|http://msdn.microsoft.com/en-us/library/system.net.webclient.aspx]]
for how to manipulate the request further.

<div class="info">
 <div class="title">Execution Policies</div>
 <p>
  To use it you need to set the `execution policy` on your system, ask
  your system administrator to do this or [[read this
  page|http://technet.microsoft.com/library/hh847748.aspx]]. Make sure
  you understand the security implications of doing this.
 </p>
</div>

View other [[Client Libraries]]
