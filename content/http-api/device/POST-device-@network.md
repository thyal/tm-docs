import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="device"
      method="post"
      path="/device/:network"
      weight={30}>

      <Endpoint.Return code="201">
         The created <Resource.Link resource="device/:network/:device">device resources</Resource.Link> object
      </Endpoint.Return>

      <Endpoint.Return code="401">
         Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link> when
         no authentication given
      </Endpoint.Return>

      <Endpoint.Return code="404">
         Returns a <Resource.Link resource="error/not-found">error object</Resource.Link> when
         authentication failed, no access to the resource or network not found
      </Endpoint.Return>

      <Endpoint.Return code="409">
         Returns a <Resource.Link resource="error/conflict">error object</Resource.Link> if the
         address have been allocated by a different device already
      </Endpoint.Return>

      <p>
         Creates a new <Resource.Link resource="device/:network/:device">device</Resource.Link> under
         the <Resource.Link resource="network/:network">Network</Resource.Link> defined by the <code>:network</code> parameter.
      </p>

      <p>
        A succesful request returns the new <Resource.Link resource="device/:network/:device">device</Resource.Link> resource
        in the body and the new URI in the <code>Location</code> header.
      </p>

      <h4>Conflicts and UID resolution</h4>

      <p>
        Every device have a unique 32bit address, only one active device may use the address at any
        time. If an attempt to create a device with an address already in use a <code>409 Conflict</code> response
        will be returned.  The devices provisioning state control if the device should allocate the
        address or not - both <code>active</code> and <code>passive</code> states allocates the address.
      </p>

      <h4>User-defined device keys</h4>

      <p>
        By default a new device will be assigned a automatically generated id by the system. When
        creating a device with this endpoint you may specify the <code>key</code> parameter to
        define whatever key you like.
      </p>
   </Endpoint>
