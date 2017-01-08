import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="device"
      method="get"
      path="/device/:network"
      weight={20}>

      <Endpoint.Return code="200">
         A list of <Resource.Link resource="device/:network/:device">device resources</Resource.Link>
      </Endpoint.Return>
      <Endpoint.Return code="401">
         Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link> when
         no authentication given
      </Endpoint.Return>
      <Endpoint.Return code="404">
         Returns a <Resource.Link resource="error/not-found">error object</Resource.Link> when
         authentication failed, no access to the resource or network not found
      </Endpoint.Return>

      <p>
         Retreive a list of devices from <Resource.Link resource="network/:network">Network</Resource.Link> defined by <code>:network</code> parameter.
      </p>
   </Endpoint>
