import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="auth"
      method="get"
      path="/auth/session"
      unstable={true}
      weight={600}>

      <Endpoint.Return code="200">Returns a list of <Resource.Link resource="token/:token">session tokens</Resource.Link></Endpoint.Return>
      <Endpoint.Return code="401">A <Resource.Link resource="error/no-auth">Error object</Resource.Link> due to no authentication provided</Endpoint.Return>
      <Endpoint.Return code="403">
         Fails with a <Resource.Link resource="error/auth">Error object</Resource.Link> due to failed authentication, or using a non-user token
      </Endpoint.Return>

      <p className="alert alert-danger">
        <b>Forward Compatability:</b> This endpoint was never part of the official specification for either version 1 or 2 of the
        Tinymesh API. It's due for review and might be moved to a different API or removed completely in the future.
      </p>


      <p>
         Retreives a list over available session tokens.
      </p>
   </Endpoint>

