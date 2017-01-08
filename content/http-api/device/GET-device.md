import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="device"
      method="get"
      path="/device"
      weight={10}>

      <Endpoint.Return code="200">
         A list of <Resource.Link resource="device/:network/:device">device resources</Resource.Link>
      </Endpoint.Return>
      <Endpoint.Return code="401">
         Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link> when
         no authentication given
      </Endpoint.Return>
      <Endpoint.Return code="403">
         Returns a <Resource.Link resource="error/auth">error object</Resource.Link> when
         authentication failed or no access to the resource
      </Endpoint.Return>

      <p>
         Retreive a list of devices accross all available networks for the authenticated entity.
      </p>
   </Endpoint>
