import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="auth"
      method="post"
      path="/auth/session"
      unstable={true}
      weight={600}>

      <Endpoint.Return code="201">Returns the new <Resource.Link resource="token/:token">session token</Resource.Link></Endpoint.Return>
      <Endpoint.Return code="400">A <Resource.Link resource="error/generic">Error object</Resource.Link> if any of the input was invalid</Endpoint.Return>
      <Endpoint.Return code="401">A <Resource.Link resource="error/no-auth">Error object</Resource.Link> due to failed no or failed authentication</Endpoint.Return>
      <Endpoint.Return code="403">
         Authentication failed, or no access to the resource a <Resource.Link resource="error/auth">Error object</Resource.Link> is returned
      </Endpoint.Return>

      <p className="alert alert-danger">
        <b>Forward Compatability:</b> This endpoint was never part of the official specification for either version 1 or 2 of the
        Tinymesh API. It's due for review and might be moved to a different API or removed completely in the future.
      </p>

      <p>
         Create a session key for a user, the authentication happens either
         by using HTTP Basic authentication or by providing an object with
         the keys `email` and `password`.
      </p>

   </Endpoint>
