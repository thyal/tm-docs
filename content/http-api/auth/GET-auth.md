import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="auth"
      method="get"
      path="/auth"
      weight={10}>

      <Endpoint.Return code="200">Responds with information about the current authentication</Endpoint.Return>
      <Endpoint.Return code="401">A <Resource.Link resource="error/no-auth">Error object</Resource.Link> due to no authentication provided</Endpoint.Return>
      <Endpoint.Return code="403">
         Fails with a <Resource.Link resource="error/auth">Error object</Resource.Link> due to failed authentication, or using a non-user token
      </Endpoint.Return>

      <p>
         Retrieves information about the current authentication. Useful to validate that
         authentication works as expected.
      </p>
   </Endpoint>
