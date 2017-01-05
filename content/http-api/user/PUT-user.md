import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="user"
      method="put"
      path="/user">

      <Endpoint.Return code="200">A <Resource.Link resource="user">User object</Resource.Link></Endpoint.Return>
      <Endpoint.Return code="400">A generic <Resource.Link resource="error/generic">error object</Resource.Link> when invalid data was given</Endpoint.Return>
      <Endpoint.Return code="401">A <Resource.Link resource="error/no-auth">Error object</Resource.Link></Endpoint.Return>
      <Endpoint.Return code="403">
         Fails with a <Resource.Link resource="error/auth">Error object</Resource.Link> due to failed authentication, or using a non-user token
      </Endpoint.Return>

      <p>
         Patches the user resource with request data. If any validation failed, or authentication
         failed the response will be a HTTP Error
      </p>
   </Endpoint>

