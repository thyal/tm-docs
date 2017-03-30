import React from 'react'

const connectURL = "https://release.tiny-mesh.com/tinymesh/guri"

const Executable = () =>
  <span>
    guri-<span>
      <span className="platform platform-win32">windows</span>
      <span className="platform platform-linux">linux</span>
      <span className="platform platform-mac">darwin</span>
      <span className="platform platform-source">dist</span>
    </span>-<span>
      <span className="arch arch-amd64">amd64</span>
      <span className="arch arch-386">386</span>
    </span><span className="platform platform-win32">.exe</span>
  </span>

const Downloader = () =>
  <div>
    <p className="platform-meta targets">
      <a className="button" href="#platform=win32">Windows</a>{' '}
      <a className="button" href="#platform=mac">Mac OS</a>{' '}
      <a className="button" href="#platform=linux">Linux</a>{' '}
      <a className="button" href="#platform=source">Source</a>
    </p>

    <h4>
      <span style={{fontWeight: 'bold'}}>Download GURI</span><br />
      <small>
        <span className="platform platform-win32">for Windows</span>
        <span className="platform platform-mac">for Mac OS</span>
        <span className="platform platform-linux">for Linux</span>
        <span className="platform platform-source">Source Code</span>
      </small>
    </h4>

    <p className="platform platform-win32 platform-mac platform-linux">
      <a
        href={connectURL}
        id="target-link"
        className="button button-primary">

        Download

        <span className="platform platform-win32">&nbsp;exe</span>
        <span className="platform platform-mac">&nbsp;app</span>
        {' '} <span id="target-arch">(64bit)</span>
      </a>
      <br />

      <span>
        Different architecture? <a href={connectURL}>See all download options</a>
      </span>
    </p>

    <p className="platform platform-source">
      <a
        href={connectURL + "/source"}
        className="button button-primary target-arch-all">

        Download (source code)
      </a>
      <br />


      Or clone the repository using Git from <a target="new" href="https://github.com/tinymesh/guri">tinymesh/guri</a>
    </p>
  </div>

const PortName = ({id}) =>
  <span>
    <span className="platform platform-win32">COM{id || "3"}</span>
    <span className="platform platform-linux">{id ? '/dev/ttyS' + id : '/dev/ttyUSB0'}</span>
    <span className="platform platform-mac">{id ? '/dev/ttyS' + id : '/dev/tty.usbserial-A5042CXY'}</span>
  </span>

const Usage = () =>
  <div>
    <b>Using GURI from the Command Line</b>
    <pre style={{overflow: 'hidden'}}>
      <code>
        &gt; <Executable /> -list{'\n'}
        path=<PortName id={1} /> usb?=false vid= pid= serial={'\n'}
        path=<b><PortName /></b> usb?=true vid=0403 pid=6001 serial=A5042CXY{'\n'}
        {'\n'}
        {'\n'}
        &gt; <Executable /> -auto-configure <b>-nid=aa:bb:cc:dd</b> <b>COM3</b>{'\n'}
        guri - version 0.0.1-alpha{'\n'}
        serial:open <PortName />{'\n'}
        remote: using TCP w/TLS{'\n'}
        upstream:recv[true] [10 0 0 0 0 0 3 16 0 0]{'\n'}
        downstream:recv[true] [35 1 0 0 0 1 0 0 0 ... ]{'\n'}
        upstream:recv[true] [6]{'\n'}
      </code>
    </pre>
  </div>

export default ({url, Root, Page, Resource}) =>
  <Page url={url}
        name="Connecting your Gateway"
        weight={30}>

    <div className="no-target target" id="platform-target">

      <h1>Connecting your gateway</h1>

      <p className="lead">
        To connect your Tinymesh Gateway a definition in the Tinymesh Cloud™ <em>(if you haven't
        defined your Network yet do so by using the <a href="https://cloud.tiny-mesh.com">Cloud Workbench</a>)</em>.<br />
        Navigate to your Network in the Cloud Workbench where you will find
        the <Resource.Link resource="network/:network" field="address">Network ID</Resource.Link> <em>(a 32 bits hexadecimal address)</em>.
      </p>

      <p>
        For our connection we will use <Page.link parent={url} url="reference-guide/network-connector/guri.html">GURI</Page.link>, a command line based Network Connector, to setup the link
        between the Tinymesh serialport and the upstream Cloud Service<a><sup>[1]</sup></a>.
      </p>

      <p>
        As seen in the example below we run the executable from the Command Line.
        you can use the argument <code>-list</code> to print all the available serial ports.
        Once you identified your serial port use it as argument to use that serial port for communication.
        You can see that we specify the <code>-auto-configure</code> and <code>-nid=&lt;Network ID&gt;</code> arguments,
        these allow us to automatically configure the device for Gateway operations. <b>Substitute the value
        of <code>-nid=..</code> with your Network ID</b>
      </p>

      <ol>
        <li><small>This software also make sure that he Tinymesh gateway device is correctly configured.</small></li>
      </ol>

      <div className="columns">
        <div className="column-left">
          <Downloader />
        </div>

        <div className="column-right">
          <Usage />
        </div>
      </div>

      <p>
        Check for the line <code>upstream:recv[] [6]</code> which tells us that
        the cloud Acknowledged the packet we sent. This means that we have successfully
        configured our device as a Gateway, to verify the that we the device authenticated
        check the Cloud Workbench.
      </p>

      <Page.Neighbours url={url} name="Connecting Your Gateway" className="inline-block" />
    </div>

    <script type="text/javascript" src={Root.link(url, 'js/ua-parser.min.js')} />
    <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
      var callback = function() {
        utils.platformTarget('platform-target');
      };

      window.onload = window.onhashchange = callback;
      `}}>
    </script>
  </Page>
