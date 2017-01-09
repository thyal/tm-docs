import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="organization"
      method="put"
      path="/organization/:org/user/:user"
      beta={true}>

      <Endpoint.Return code="200">
         Returns the updated <Resource.Link resource="organization/:org">organization object</Resource.Link>
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
         authentication gives no access to update the organization
      </Endpoint.Return>

      <Endpoint.Return code="404">
         Returns a <Resource.Link resource="error/not-found">error object</Resource.Link> when
         trying to update a non-existing organization, or adding a non-existing user to the organization.
      </Endpoint.Return>

      <Endpoint.Parameter param="org">
        The key of the <Resource.Link resource="organization/:org">organization</Resource.Link> resource
      </Endpoint.Parameter>

      <Endpoint.Parameter param="user">
        The email of the <Resource.Link resource="user">user</Resource.Link> beeing added
      </Endpoint.Parameter>

      <p>
         Updates the <Resource.Link resource="organization/:org">organization resource</Resource.Link> by
         adding <code>:user</code> to the list of users with access to organization.
      </p>
   </Endpoint>
