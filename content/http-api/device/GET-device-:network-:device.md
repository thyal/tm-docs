import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="device"
      method="get"
      path="/device/:network/:device"
      weight={30}>

      <Endpoint.Parameter param="network">The key of the <Resource.Link resource="network/:network">Network</Resource.Link> resource</Endpoint.Parameter>
      <Endpoint.Parameter param="device">The key of the <Resource.Link resource="device/:network/:device">Device</Resource.Link> resource</Endpoint.Parameter>

      <Endpoint.Return code="200">
         A single <Resource.Link resource="device/:network/:device">device resources</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="401">
         Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link> when
         no authentication given
      </Endpoint.Return>

      <Endpoint.Return code="403">
         Returns a <Resource.Link resource="error/auth">error object</Resource.Link> when
         authentication failed or no access to the resource
      </Endpoint.Return>

      <Endpoint.Return code="404">
         Returns a <Resource.Link resource="error/not-found">error object</Resource.Link> when
         the device was not found in the network
      </Endpoint.Return>

      <p>
         Retreives the representation of the device resource or an error
      </p>
   </Endpoint>
