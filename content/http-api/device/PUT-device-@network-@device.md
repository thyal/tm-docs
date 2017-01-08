import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="device"
      method="put"
      path="/device/:network/:device"
      weight={30}>

      <Endpoint.Return code="200">
         The updated <Resource.Link resource="device/:network/:device">device resources</Resource.Link> object
      </Endpoint.Return>

      <Endpoint.Return code="401">
         Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link> when
         no authentication given
      </Endpoint.Return>

      <Endpoint.Return code="404">
         Returns a <Resource.Link resource="error/not-found">error object</Resource.Link> when
         authentication failed, no access to the resource, or device or network not found
      </Endpoint.Return>

      <Endpoint.Return code="409">
         Returns a <Resource.Link resource="error/conflict">error object</Resource.Link> if the
         address have been allocated by a different device already (in the case when changing
         provisioned state)
      </Endpoint.Return>

      <p>
         Updates a existing <Resource.Link resource="device/:network/:device">device resource</Resource.Link>.
         Creates a new <Resource.Link resource="device/:network/:device">device</Resource.Link> under
         the <Resource.Link resource="network/:network">Network</Resource.Link> defined by the <code>:network</code> parameter.
      </p>
   </Endpoint>
