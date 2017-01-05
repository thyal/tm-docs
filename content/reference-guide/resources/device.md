import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Resource resource="device/:network/:device" url={url} name="Device - @review" weight={30}>

    <Resource.Field field="key" readonly="true">
      The unique key, either given or randomly generated, within the network.
    </Resource.Field>

    <Resource.Field field="address" readonly="true">
      A unsigend 32-bit integer representing the Tinymesh UID (encoded as big-endian)
    </Resource.Field>

    <Resource.Field field="network" readonly="true">
      The <Resource.Link from={url} resource="network/:network">network</Resource.Link> which this device belongs to.
    </Resource.Field>

    <Resource.Field field="name">
      A UTF-8 encoded string used for humans to identify the device.
    </Resource.Field>

    <Resource.Field field="location">
      A set of user defined tags for location, each tag must be UTF-8 encoded and maximum 32 bytes long.
      Maximum size of the set is 32 items.
    </Resource.Field>

    <Resource.Field field="type">
      The type of device, must be one of the <Resource.Link from={url} resource="network/:network" field="type">types</Resource.Link> listed 
      in the <Resource.Link from={url} resource="network/:network">network definition</Resource.Link>.
    </Resource.Field>

    <Resource.Field field="provisioned">
      The state of the device, should be one of <code>active</code>, <code>passive</code> or <code>inactive</code>.
    </Resource.Field>

    <Resource.Field field="proto/tm.firmware" generated={true} lazy={true}>The firmware revision for this device</Resource.Field>
    <Resource.Field field="proto/tm.hardware" generated={true} lazy={true}>The hardware revision for this device</Resource.Field>
    <Resource.Field field="proto/tm.part"     generated={true} lazy={true}>The part number, as stored in config</Resource.Field>

    <Resource.Field field="meta.created"    generated={true}>ISO 8601 datetime of creation</Resource.Field>
    <Resource.Field field="meta.updated"    generated={true}>Last updates ISO 8601 datetime </Resource.Field>
    <Resource.Field field="meta.event/key"  generated={true}>The message key for last event</Resource.Field>
    <Resource.Field field="meta.event/date" generated={true}>Datetime of last received event for this device</Resource.Field>
    <Resource.Field field="meta.chan/connected" generated={true}>
      Time of last connection as a ISO 8601 datetime string (only applicable for<code>gateways</code>)
    </Resource.Field>
    <Resource.Field field="meta.chan/disconnected" generated={true}>
      Time the last connection ended. ISO 8601 datetime string (only applicable for<code>gateways</code>)
    </Resource.Field>

    <ReactMarkdown>
      # Device

      <p className="lead">
        Devices represent a physical Tinymesh device connected to a network.
      </p>

      <p>
        Devices are the main flow of communication, you can send <Endpoint.Link from={url} method="post" path="/message/:network/:device">messages</Endpoint.Link> or&nbsp;
        <Endpoint.Link method="get" path="/messages/:network/:device" from={url}>query- or stream data</Endpoint.Link>.
      </p>

      ### Device provisioning

      <p>
        Devices have different provisioning modes which changes the way system reacts to data from that device.

         * <code>active</code> &ndash; device reserves the address and can actively communicate
         * <code>passive</code> &ndash; device reserves the address and rejects all communication
         * <code>inactive</code> &ndash; device does not reserve the address and rejects all communication
      </p>

    </ReactMarkdown>

  </Resource>





