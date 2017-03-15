import React from 'react'

export default ({url, Page}) =>
  <Page url={url} name="Network Connectors">
    <h1>Network Connectors</h1>

    <p className="lead">
      Network Connectors communicate between your Tinymesh Gateway and the
      Tinymesh Cloud Service.
      Network Connectors relays UART data of a Tinymesh Gateway to a remote endpoint.
    </p>

    <h4>Different Network Connectors</h4>
    <p>
      There are two ways of connecting to the remote host:

      <ol>
        <li>Proxy the UART communication to a TCP/IP socket using Tiny Mesh as the authentication mechanism</li>
        <li>Communicating over HTTP with a token based authentication</li>
      </ol>
    </p>
    <p>
      The main distinction between the two being that the first acts as a
      transparent proxy between the UART and TCP/IP socket, while the second
      uses the <Page.link url="http-api/channel">/channels HTTP API</Page.link> with
      a high-level protocol.
    </p>

    <p>
      For most cases it's desired to use the first option, due to it being a
      simpler solution in terms of code and the second option is usually desirable
      when the connecting entity wants to perform some logic (ie local data storage,
      pushing data to a third party etc).
    </p>

    <h4>Supported Connectors</h4>
  </Page>
