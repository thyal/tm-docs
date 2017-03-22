import React from 'react'
import _ from 'lodash'

export default ({url, Root, Page}) =>
  <Page url={url} name="Device Communication">
    <h1>Device Communication</h1>

    <p className="lead">
      Communication between a downstream device and upstream client can be achieved
      by sending and receiving messages.
    </p>

    <p>
      Tinymesh™ protocol supports a variety of messages from transmiting binary
      payloads, setting/unsetting GPIO pins, retreiving network meta information or
      configuring devices over the air. All outgoing messages are called <code>commands</code>.
      A Tinymesh™ enabled device may send messages by using the serial port,
      configuring GPIO triggers, automatically generated status messages (IMA) or
      as a response to commands, messages sent by a device are called <code>events</code>.
    </p>

    <p>
      Using the endpoints defined you can retreive message from the server or queue
      messages for the device. Additionally the <Page.link parent={url} url="http-api/query" /> endpoint
      may be used for querying the message store.
    </p>
  </Page>
