import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
  <Resource resource="message/:key" url={url} name="Messages" weight={15}>

    <Resource.Field field="key">
      The unique key that identifies the message
    </Resource.Field>

    <Resource.Field field="datetime">
      The assumed time, as a ISO 8061 datetime string, of when the message was generated at the device
    </Resource.Field>

    <Resource.Field field="received">
      The time, as a ISO 8061 datetime string, of when the message was received at the server
    </Resource.Field>

    <Resource.Field field="proto/tm">
      The field containing the Tinymesh packet (<Resource.Link resource="message/:key/event">event</Resource.Link>/
      <Resource.Link resource="message/:key/command">command</Resource.Link>)

      The field may be returned as a binary or a object depening on API in use.
    </Resource.Field>

    <h1>Message</h1>

    <p className="lead">
      The Tinymesh packet with additional metadata.
    </p>

    <p>
      An object representing any valid Tinymesh packet. The exact format may be
      a <Resource.Link resource="message/:key/event">event</Resource.Link> or
      a <Resource.Link resource="message/:key/command">command</Resource.Link>;
      corresponding to upstream (from device) and downstream (to device) communication
    </p>
  </Resource>

