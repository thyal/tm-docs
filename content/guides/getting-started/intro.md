import React from 'react'

export default ({url, Root, Page, Resource}) =>
  <Page url={url}
        name="Introduction"
        weight={10}
        siblings={true}
        next="/guides/getting-started/initial-configuration.html">

    <h1>What is Tinymesh Cloud™?</h1>

    <p>
      Tinymesh Cloud™ allows information to be exchanged over the Internet, between physical Tinymesh hardware and high-level application software. Tinymesh Cloud™ provides communication infrastructure that allows application designers to access Tinymesh™ devices via bi-directional, encrypted data streams, using either raw binary data or structured documents using JSON.    
    </p>

    <h4>How can I interface Tinymesh Cloud™</h4>

    <p>
      All your applications will address the high-level API which utilises the HTTP
      protocol as transport and consumes JSON or binary data. <Resource.Link resource="device/:network/:device">Device</Resource.Link>{' '}
      and <Resource.Link resource="network/:network">Network</Resource.Link> metadata
      , along with communication utilities,
      can be easily be accessed using modern HTTP libraries available for all common languages.
    </p>

    <h4>What Data Can I Query</h4>
    <p>
      Tinymesh Cloud™ contains{' '}
      <Resource.Link resource="organization/:org">organizations</Resource.Link>,{' '}
      <Resource.Link resource="network/:network">networks</Resource.Link>,{' '}
      <Resource.Link resource="user">users</Resource.Link>,{' '}
      <Resource.Link resource="device/:network/:device">devices</Resource.Link> and{' '}
      <Resource.Link resource="message/:key">messages</Resource.Link>.
      All data can be queried and interacted with through the <Page.link url="http-api">HTTP API</Page.link>. A very common
      scenario is to provision a <Resource.Link resource="network/:network">networks</Resource.Link> and either consuming a realtime stream or process data batches at a given interval.
    </p>

    <h4>Some usefull terms</h4>

    <dl>
      <dt>Network</dt>
      <dd>A Tinymesh Network, consisting of some devices, access policies, provisioning rules etc</dd>

      <dt>Device</dt>
      <dd>A physical device connected to your Network; either a Gateway, Router, or End-Device</dd>

      <dt>Message</dt>
      <dd>A Event (transmitted from a Device) or a Command (sent to a Device)</dd>

      <dt>Network Connector</dt>
      <dd>A TCP/IP enabled device responsible for transferring data between a Gateway and the Tinymesh Cloud™</dd>

      <dt>Gateway Device</dt>
      <dd>A device that all data in the network goes through</dd>

      <dt>Router Device</dt>
      <dd>A device capable of routing Tinymesh Packets </dd>

      <dt>End-device</dt>
      <dd>A battery powered device, not capable of routing</dd>
    </dl>

    <Page.Neighbours url={url} name="Introduction" className="inline-block" />
  </Page>
