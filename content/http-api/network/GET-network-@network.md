import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="network"
      method="get"
      path="/network/:network"
      weight={20}>

      <Endpoint.Return code="200">
         Returns the <Resource.Link resource="network/:network">network resource</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="401">
         <Resource.Link resource="error/no-auth">error object</Resource.Link> caused by lack off, or failed
         authentication.
      </Endpoint.Return>

      <Endpoint.Return code="403">
         When restricted, or network does not exist, a <Resource.Link resource="error/auth">error object</Resource.Link> is returned
      </Endpoint.Return>

      <Endpoint.Parameter param="network">
        The key of the <Resource.Link resource="network/:network">Network</Resource.Link> resource
      </Endpoint.Parameter>

      <p>
        Retreives the current representation of the <Resource.Link resource="network/:network">network resource</Resource.Link>
      </p>
   </Endpoint>
