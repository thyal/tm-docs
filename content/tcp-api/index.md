import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} weight={50} name="TCP API - v1" collapse>
    <h1>TCP API version 1</h1>

    <p className="lead">
      TCP API is the simplest way of communicating between a Tinymesh gateway and the upstream service.
    </p>

    <p>
      Under the hood it uses TCP/IP and the Tinymesh protocol for authentication and data
      transmission.
    </p>

    <h4>API Endpoints</h4>
    <table>
      <thead>
        <tr>
          <td>Type</td>
          <td>Endpoint</td>
          <td>Port</td>
          <td>Comment</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TLS/SSL enabled</td>
          <td>tcp.cloud.tiny-mesh.com</td>
          <td>7002</td>
          <td>Preferred transport</td>
        </tr>
        <tr>
          <td>Unencrypted</td>
          <td>tcp.cloud.tiny-mesh.com</td>
          <td>7001</td>
          <td>See <Page.link parent={url} url="tcp-api/security.html">security considerations</Page.link></td>
        </tr>
      </tbody>
    </table>
  </Page>
