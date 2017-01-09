import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="organization"
      method="get"
      path="/organization/:org">

      <Endpoint.Return code="200">
         Returns a <Resource.Link resource="organization/:org">organization object</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="401">
         When no, or invalid, authentication was given <Resource.Link resource="error/no-auth">error object</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="403">
         Returns a <Resource.Link resource="error/auth">error object</Resource.Link> when
         authentication failed or no access to the resource
      </Endpoint.Return>

      <Endpoint.Parameter param="org">
        The key of the <Resource.Link resource="organization/:org">organization</Resource.Link> resource
      </Endpoint.Parameter>

      <p>
        Retreives the <Resource.Link resource="organization/:org">organization object</Resource.Link> affiliated with <code>:org</code>
      </p>
   </Endpoint>
