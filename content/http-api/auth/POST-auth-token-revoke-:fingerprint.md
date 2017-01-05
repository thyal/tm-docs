import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="auth"
      method="post"
      path="/auth/token/revoke/:fingerprint"
      weight={410}>

      <Endpoint.Return code="205">A empty response body when session was destroyed</Endpoint.Return>
      <Endpoint.Return code="400">A generic <Resource.Link resource="error/generic">error object</Resource.Link> when non-session authentication was used</Endpoint.Return>
      <Endpoint.Return code="401">A <Resource.Link resource="error/no-auth">Error object</Resource.Link> due to no authentication provided</Endpoint.Return>
      <Endpoint.Return code="403">
         Fails with a <Resource.Link resource="error/auth">Error object</Resource.Link> due to failed authentication, or using a non-user token
      </Endpoint.Return>
      <Endpoint.Return code="404">
         Fails with a <Resource.Link resource="error/not-found">Error object</Resource.Link> if no such token exists
      </Endpoint.Return>

      <p>
         Revokes a token, takes a object with a single parameter <code>reason</code> in it's body.
      </p>

      <p className="alert alert-info">
         In this, and previous, version of the API (v2) this endpoint can ONLY revoke tokens of type <code>user</code>.
      </p>

   </Endpoint>

