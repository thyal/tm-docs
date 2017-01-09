import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      stability="alpha"
      group="channels"
      method="post"
      path="/_channels/chan/:network"
      beta={true}>

      <Endpoint.Return code="201">
         The newly created <Resource.Link resource="channel/:chan">channel resources</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="401">
         Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link> when
         no authentication given or authentication failed
      </Endpoint.Return>

      <Endpoint.Return code="403">
         Returns a <Resource.Link resource="error/auth">error object</Resource.Link> when
         no access to the resource
      </Endpoint.Return>

      <Endpoint.Return code="404">
         Returns a <Resource.Link resource="error/not-found">error object</Resource.Link> when
         some sub-resource was not found
      </Endpoint.Return>

      <Endpoint.Parameter param="network">
        The key of the <Resource.Link resource="network/:network">network</Resource.Link> resource
      </Endpoint.Parameter>

      <p>
        Create a new <Resource.Link resource="channel/:chan">channel resource</Resource.Link> under
        <code>:network</code>
      </p>

      <p className="alert alert-info">
        Although documented, the Channels API is under review and testing. The API may be
        deprecated, renamed, deleted or changed in backwards incompatible ways. If you have any
        feedback on the API we would love to hear from you!
      </p>
   </Endpoint>
