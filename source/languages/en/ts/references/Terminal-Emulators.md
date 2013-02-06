---
title: Terminal Emulators
project: ts
version: 0.0.1+
document: tutorial
audience: beginner
keywords: [development]
versions: false
interest: [
"[[Network Connectors]]"
]
---

## Windows

For testing simple communications the [[RC232|http://www.radiocrafts.com/index.php?sideID=339&listeID=165&ledd1=165]]
tool should be enough, you can use it for basic communications as well
as configuration of TinyMesh devices.

There exists many other emulators ranging from HyperTerminal to
[[Doclight|http://www.docklight.de/]].


## Linux

Any Linux terminal can be used as terminal emulator, when connecting
a TinyMesh device a new tty device can be found under `/dev/ttyUSB_`.
To configure baud rate and other terminal options use the `stty` tool.

```bash
dev@lp:~ $ stty -F /dev/ttyUSB0 ignbrk -brkint -icrnl -imaxbel -onlcr -icanon -echo -isig echoe echok
```

Other tools include [[Minicom|http://freecode.com/projects/minicom]]
and [[Cutecom|http://cutecom.sourceforge.net/]].

