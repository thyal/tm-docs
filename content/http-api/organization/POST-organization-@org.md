import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="organization"
      method="post"
      path="/organization/:org"
      weight={35}>

      <Endpoint.Return code="201">
         Returns the newly created <Resource.Link resource="organization/:org">organization object</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="400">
         Returns a <Resource.Link resource="error/generic">error object</Resource.Link> when
         input was invalid or malformed, or any of the users defined does not exist
      </Endpoint.Return>

      <Endpoint.Return code="401">
         When no, or invalid, authentication was given <Resource.Link resource="error/no-auth">error object</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="403">
         Returns a <Resource.Link resource="error/auth">error object</Resource.Link> when
         using a non-user token
      </Endpoint.Return>

      <Endpoint.Return code="409">
         Returns a <Resource.Link resource="error/conflict">error object</Resource.Link> when
         authentication failed or no access to the resource
      </Endpoint.Return>

      <Endpoint.Parameter param="org">
        The key of the <Resource.Link resource="organization/:org">organization</Resource.Link> resource
      </Endpoint.Parameter>

      <p>
         Creates a new <Resource.Link resource="organization/:org">organization resource</Resource.Link> with id <code>:org</code>.
      </p>

      <p>
        If succesfully created a new <Resource.Link resource="organization/:org">organization resource</Resource.Link> will
        be returned, in addition the <code>Location</code> header will be set with the location of
        the new resources.
      </p>
   </Endpoint>
