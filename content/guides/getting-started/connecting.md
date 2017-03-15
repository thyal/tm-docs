import React from 'react'

export default ({url, Root, Page}) =>
  <Page url={url}
        name="Connecting your Gateway"
        weight={30}>

    <h1>Connecting your gateway</h1>

    <p>
      After you have configured your gateway (previous step) it can be connected to the Cloud Service.
      This can be done by using a <Page.link url="reference-guide/network-connector">Network Connector</Page.link>.
    </p>

    <p>
      For field deployments you would want a dedicated machine or embedded device
      to handle this for you but for testing and development we will use software
      that we can run directly from our computer.
    </p>

    <p>
      Download the <a href="https://github.com/tinymesh/guri/releases">GURI application</a> for
      your platform and run it from the command line using the following.
    </p>

    <p>
      If you are unfamiliar with using the command line it may be opened by running <code>cmd.exe</code> under Windows.
      Once you have opened the terminal you must navigate to the folder where you saved <code>GURI</code>.
      This can be done by issuing the command <code>cd</code> followed with the path to the directory it was saved
    </p>

    <p>
      First we will list all the available ports, then we can use the result to open the right serialport (easily identified by looking for the line <code>usb?=true</code>)

      <h6>For Windows</h6>
      <pre>
        <code>
          > guri-windows-amd64.exe --list{'\n'}
          path=COM1 usb?=false vid= pid= serial={'\n'}
          path=COM7 <b>usb?=true</b> vid=0403 pid=6001 serial=A5042CTA{'\n'}
{'\n'}
          > guri-windows-amd64.exe --reconnect=true COM3{'\n'}
        </code>
      </pre>

      <h6>For Linux</h6>
      <pre>
        <code>
          $ ./guri-linux-amd64 --list{'\n'}
          path=/dev/ttyS0 usb?=false vid= pid= serial={'\n'}
          path=/dev/ttyUSB0 <b>usb?=true</b> vid=0403 pid=6001 serial=A5042CTA{'\n'}
{'\n'}
          $ ./guri-linux-amd64 --reconnect=true /dev/ttyUSB0{'\n'}
        </code>
      </pre>
    </p>

    <p>
    Once connected you will some output:
    <pre>
        <code>
          2017/03/15 19:31:48.118130 guri - version 0.0.1-alpha{'\n'}
          2017/03/15 19:31:48.118208 serial:open /dev/ttyUSB0{'\n'}
          2017/03/15 19:31:48.119081 remote: using TCP w/TLS{'\n'}
          2017/03/15 19:31:56.097801 upstream:recv[true] [10 0 0 0 0 0 3 16 0 0]{'\n'}
          2017/03/15 19:31:56.126250 downstream:recv[true] [35 1 0 0 0 1 0 0 0 0 0 0 0 ...]{'\n'}
          2017/03/15 19:31:56.426717 upstream:recv[true] [6]{'\n'}
          ...
        </code>
      </pre>
    </p>

    <p>
      Next up we will use the API's available to communicate with the devices in our Network.
    </p>

    <Page.Neighbours url={url} name="Connecting Your Gateway" className="inline-block" />
  </Page>
