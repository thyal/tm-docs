import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      stability="alpha"
      group="channels"
      method="post"
      path="/_channels/tokens/:network/:chan"
      beta={true}>

      <Endpoint.Return code="201">
         The newly created <Resource.Link resource="token/:token">authentication token</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="401">
         Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link> when
         no authentication given or authentication failed
      </Endpoint.Return>

      <Endpoint.Return code="403">
         Returns a <Resource.Link resource="error/auth">error object</Resource.Link> when
         no access to the network or channel
      </Endpoint.Return>

      <Endpoint.Return code="400">
         Returns a <Resource.Link resource="error/not-found">error object</Resource.Link> when
         request body contained invalid data
      </Endpoint.Return>


      <Endpoint.Parameter param="network">
        The key of the <Resource.Link resource="network/:network">network</Resource.Link> resource
      </Endpoint.Parameter>

      <Endpoint.Parameter param="chan">
        The key of the <Resource.Link resource="channel/:chan">channel</Resource.Link> resource
      </Endpoint.Parameter>


      <p>
        Create a new <Resource.Link resource="token/:token">authentication token</Resource.Link> for
        the <Resource.Link resource="channel/:chan">channel resource</Resource.Link>
      </p>

      <p className="alert alert-info">
        Although documented, the Channels API is under review and testing. The API may be
        deprecated, renamed, deleted or changed in backwards incompatible ways. If you have any
        feedback on the API we would love to hear from you!
      </p>
   </Endpoint>
