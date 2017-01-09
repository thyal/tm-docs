import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      stability="alpha"
      group="channels"
      method="get"
      path="/_channels/tokens/:network/:chan/:token"
      beta={true}>

      <Endpoint.Return code="401">
         Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link> when
         no authentication given or authentication failed
      </Endpoint.Return>

      <Endpoint.Return code="501">
         Not Implemented
      </Endpoint.Return>


      <Endpoint.Parameter param="network">
        The key of the <Resource.Link resource="network/:network">network</Resource.Link> resource
      </Endpoint.Parameter>

      <Endpoint.Parameter param="chan">
        The key of the <Resource.Link resource="channel/:chan">channel</Resource.Link> resource
      </Endpoint.Parameter>

      <Endpoint.Parameter param="token">
        The key of the <Resource.Link resource="token/:token">token</Resource.Link>
      </Endpoint.Parameter>

      <p className="alert alert-warning">
        This endpoint is not implemeted in the current version of the API.
      </p>

      <p className="alert alert-info">
        Although documented, the Channels API is under review and testing. The API may be
        deprecated, renamed, deleted or changed in backwards incompatible ways. If you have any
        feedback on the API we would love to hear from you!
      </p>
   </Endpoint>
