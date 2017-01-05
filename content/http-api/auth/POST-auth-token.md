import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="auth"
      method="post"
      path="/auth/token"
      weight={400}>

      <Endpoint.Return code="201">Returns the new <Resource.Link resource="token/:token">auth token</Resource.Link></Endpoint.Return>
      <Endpoint.Return code="400">A <Resource.Link resource="error/generic">Error object</Resource.Link> if any of the input was invalid</Endpoint.Return>
      <Endpoint.Return code="401">A <Resource.Link resource="error/no-auth">Error object</Resource.Link> due to failed no or failed authentication</Endpoint.Return>
      <Endpoint.Return code="403">
         Authentication failed, or no access to the resource a <Resource.Link resource="error/auth">Error object</Resource.Link> is returned
      </Endpoint.Return>

      <p>
         Creates a new token under the currently authenticated entity
      </p>


      <p className="alert alert-info">
         In this, and previous, version of the API (v2) user token is the only type accepted
      </p>

   </Endpoint>
