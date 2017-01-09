import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="organization"
      method="get"
      path="/organization">

      <Endpoint.Return code="200">
         Returns a list of <Resource.Link resource="organization/:org">Organization objects</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="401">
         When no, or invalid, authentication was given <Resource.Link resource="error/no-auth">error object</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="403">
         Returns a <Resource.Link resource="error/auth">error object</Resource.Link> when
         authentication failed or no access to the resource
      </Endpoint.Return>

      <p>
        Retreives a list of organizations that are accessible by the current authentication.
      </p>
   </Endpoint>
