import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) => {
  return (
     <ReactMarkdown>
       <Endpoint
         hidden={true}
         url={url}
         group="user"
         method="post"
         path="/user/register">

         <Endpoint.Return code="201">A <Resource.Link resource="user">User object</Resource.Link></Endpoint.Return>
         <Endpoint.Return code="400">A generic <Resource.Link resource="error/generic">error object</Resource.Link> when invalid data was given</Endpoint.Return>
         <Endpoint.Return code="401">A <Resource.Link resource="error/no-auth">Error object</Resource.Link></Endpoint.Return>
         <Endpoint.Return code="403">
           Fails with a <Resource.Link resource="error/auth">Error object</Resource.Link> due to failed authentication, or user already exists.
         </Endpoint.Return>
       </Endpoint>

      <p className="warning">
        This endpoint was never part of the official specification for either version 1 or 2 of the
        Tinymesh API. It's due for removal at any time. DO NOT USE.
      </p>

       <p>
        Creates a new user from data given. Excpects request data to contain a object with atleast two fields:
        <code>email</code> and <code>password</code>. If the user already exists <code>403
        Forbidden</code> will be returned. Otherwise a <code>201 Created</code>.
       </p>
     </ReactMarkdown>
)}

