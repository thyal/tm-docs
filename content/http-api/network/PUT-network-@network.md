import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="network"
      method="put"
      path="/network/:network"
      weight={20}>


      <Endpoint.Return code="200">
         With the updated <Resource.Link resource="network/:network">network resource</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="401">
         <Resource.Link resource="error/no-auth">error object</Resource.Link> caused by lack off, or failed
         authentication.
      </Endpoint.Return>

      <Endpoint.Return code="403">
         When restricted a <Resource.Link resource="error/auth">error object</Resource.Link> is returned
      </Endpoint.Return>

      <Endpoint.Return code="404">
        If any members of the <code>parents</code> field is non-existing,
        ie the <Resource.Link resource="user">user</Resource.Link> or
        the <Resource.Link resource="organization/:org">organization</Resource.Link> does not exist.
      </Endpoint.Return>

      <Endpoint.Parameter param="network">
        The key of the <Resource.Link resource="network/:network">Network</Resource.Link> resource
      </Endpoint.Parameter>

      <p>
        Updates the network resource with new data
      </p>
   </Endpoint>
