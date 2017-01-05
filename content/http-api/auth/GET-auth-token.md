import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="auth"
      method="get"
      path="/auth/token"
      weight={400}>

      <Endpoint.Return code="200">Returns a list of <Resource.Link resource="token/:token">authentication tokens</Resource.Link></Endpoint.Return>
      <Endpoint.Return code="401">A <Resource.Link resource="error/no-auth">Error object</Resource.Link> due to no authentication provided</Endpoint.Return>
      <Endpoint.Return code="403">
         Fails with a <Resource.Link resource="error/auth">Error object</Resource.Link> due to failed authentication, or using a non-user token
      </Endpoint.Return>

      <p>
         Retrieves a list over available non-session tokens for the authenticated entity
      </p>

   </Endpoint>

