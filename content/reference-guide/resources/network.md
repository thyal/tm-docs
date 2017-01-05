import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Resource resource="network/:network" url={url} name="Network" weight={15}>

    <Resource.Field field="key">
      The unique identifier for the network
    </Resource.Field>
    <Resource.Field field="parents">
      A set of entities with access to the network, each entity is a string in the form
      <code>&lt;type&gt;/&lt;resource&gt;</code>. Example <code>organization/tinymesh</code> or
      <code>user/demo@tiny-mesh.com</code>
    </Resource.Field>
    <Resource.Field field="address">
      A unsigend 32-bit integer representing the Tinymesh NID (encoded as big-endian)
    </Resource.Field>
    <Resource.Field field="name">
      A UTF-8 encoded string used for humans to identify the network.
    </Resource.Field>
    <Resource.Field field="location">
      A set of user defined tags for location, each tag must be UTF-8 encoded and maximum 32 bytes long.
      Maximum size of the set is 32 items.
    </Resource.Field>
    <Resource.Field field="provision.default">
      The default provisioning, the modes are described 
      in <Resource.Link from={url} resource="device/:network/:device" field="provisioned">devices</Resource.Link>
    </Resource.Field>
    <Resource.Field field="provision.type">
      The default <code>type</code> for automatically created <Resource.Link from={url} resource="device/:network/:device">devices</Resource.Link>
    </Resource.Field>
    <Resource.Field field="devices">
      A list of <Resource.Link from={url} resource="device/:network/:device">device keys</Resource.Link> in the network
    </Resource.Field>
    <Resource.Field field="channels">
      A list of available <Resource.Link from={url} resource="channel/:chan">channels</Resource.Link>
    </Resource.Field>
    <Resource.Field field="groups">
      A list of groups (maximum 256) available for multicast, currently unsupported.
    </Resource.Field>
    <Resource.Field field="types">
      A set of types (defaults to <code>end-device, gateway and device</code>) used to differentiate
      between different devices.
    </Resource.Field>

    <Resource.Field field="meta.created" generated={true}>ISO 8601 datetime of creation</Resource.Field>
    <Resource.Field field="meta.updated" generated={true}>Last updates ISO 8601 datetime </Resource.Field>

    <ReactMarkdown>
      # Network resource

      <p className="lead">
        Networks groups a set of <Resource.Link from={url} resource="device/:network/:device">devices</Resource.Link> into
        one logical unit.
      </p>

      <p>
        Networks provides some default settings like <code>types</code> and <code>provisioning</code>,
        and the ability to restrict access using ACL's.
      </p>

    </ReactMarkdown>

  </Resource>
