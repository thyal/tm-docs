import React from 'react'

export default ({url, Page, Resource}) =>
  <div>
    <Resource resource="connector/guri" url={url} name="GURI">
      <h1>GURI</h1>

      <p className="lead">
        Command line tool for communicating serialport data with remote TCP, or TLS endpoint.
      </p>


      <h4>Installation</h4>
      <p>
        The executable is statically compiled can used without any installation.
        Download the correct release for your platform from{' '}
        <a href="https://github.com/tinymesh/guri/release">our GitHub Release page</a>
      </p>


      <h4>Usage</h4>


      <p className="alert alert-info">
        This Network Connector does not support auto-provisioning and you must configure
        the Tinymesh Gateway separately.
        See the <Page.link url="guides/getting-started">Getting Started</Page.link> guide
        for more information.
      </p>

      <p>
        Connecting to the <Page.link url="tcp-api">TCP API</Page.link> is done by opening
        a bidirectional pipe between the serialport and the upstream socket.
      </p>
      <pre>
        <code>
          # On Windows serialports are named COM??{'\n'}
          guri-windows-386.exe COM13{'\n'}
          {'\n'}
          # On Linux all USB serialports are typically named /dev/ttyUSB??{'\n'}
          ./guri-linux-amd64 /dev/ttyUSB0
        </code>
      </pre>

      <h4>Disabling TLS</h4>
      <p>
        In some cases you may not be able to use the encrypted TLS API due to firewall
        restrictions. In such cases you can use use the unencrypted TCP Endpoint.

        <pre>
          <code>
            # use the --tls flag to control TLS usage set the correct port using --remote{'\n'}
            ./guri-linux-amd64 --tls=false --remote=tcp.cloud.tiny-mesh.com:7001
          </code>
        </pre>
      </p>

      <p>
        <b>Note that
        this is not recommended as sending unencrypted data enables a potential attacker to
        intercept, read, or modify data being communicated. Consider using the{' '}
        <Page.link url="http-api">HTTP API</Page.link> or other methods to connect your gatway.</b>
      </p>

    </Resource>
  </div>
