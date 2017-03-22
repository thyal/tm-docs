import React from 'react'
import _ from 'lodash'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Authentication">
    <h1>TCP API version 1</h1>

    <p className="lead">
      Authentication using the Tinymesh is a simple challenge response protocol where the server
      requests the identity of the Gateway device and expects a <Resource.Link resource="message/:key/event#nid">
      event/nid</Resource.Link> in response.
    </p>

    <p>
      Identification is done by comparing the (<code>proto/tm.uid</code>, <code>proto/tm.nid</code>)
      pair with the information stored about the network. If such a pair exists and it's type is a
      <code>gateway</code> the connection may be authenticated.
    </p>

    <h3>UID auto provisioning</h3>

    <p>
      set uid to 0, the shift it to the right, or the left or up and down.
    </p>

    <h3>Handshake</h3>

    <p>
      During the initial connection some information will be deduced from the device, for instance
      configuration settings like <b>@todo-CRC-checksums</b>, <b>@todo - ACK/NAK</b> etc
      will be set either by requesting information from device or feature discovery -
      These options are covered in the <Page.link parent={url} url="tcp-api/linklevel.html">Protocol</Page.link>
    </p>

    <b>Succesfull handshake as seen by gateway</b>
    <pre>
      <code>
        rx: 10 00 00 00 00 00 03 10 00 00{'\n'}
        tx: 35 01 00 00 00 d3 ea 21 00 ... 02 12 00 00 00 12 32 .. .. 02 00 01 48 32 13{'\n'}
        rx: 06{'\n'}
      </code>
    </pre>

    <p>
      The authentication sequence follows this pattern:

      <ul>
        <li>Upstream sends <Resource.Link resource="message/:key/command#get_nid">command/get_nid</Resource.Link></li>
        <li>Downstream responds with <Resource.Link resource="message/:key/event#nid">event/nid</Resource.Link></li>
        <li>
          Upstream responds with <code>06</code>, a ACK byte, meaning packet was accepted

          <ul>
            <li>a) If authentication was successfull upstream will do nothing</li>
            <li>
              b) If authentication was unsuccessfull upstream will resend
              a <Resource.Link resource="message/:key/command#get_nid">command/get_nid</Resource.Link>,
              if authentication can be made within 3 tries steps the connection is dropped.
            </li>
          </ul>
        </li>
      </ul>
    </p>

    <p>
      If client can not be authenticated within 60 seconds the connection is dropped (this timeout
      may be changed at any time).
    </p>

    <p>
      Some clients buffer data and delivers said data when a connection is made, this data will be
      be queued until authentication. The queue is dropped if client credentials cant be established
      and stored once authentication has been made.
    </p>
  </Page>
