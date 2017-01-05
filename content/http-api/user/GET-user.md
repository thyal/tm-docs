import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) => {
  return (
     <ReactMarkdown>
       <Endpoint
         url={url}
         group="user"
         method="get"
         path="/user">

         <Endpoint.Return code="200">A <Resource.Link resource="user">User object</Resource.Link></Endpoint.Return>
         <Endpoint.Return code="401">A <Resource.Link resource="error/no-auth">Error object</Resource.Link></Endpoint.Return>
         <Endpoint.Return code="403">
           Fails with a <Resource.Link resource="error/auth">Error object</Resource.Link> due to failed authentication, or using a non-user token
         </Endpoint.Return>
       </Endpoint>

       <p>
        Retrieves the currently authenticated <Resource.Link resource="user">user</Resource.Link>, or an error
        if unauthenticated or using a non-user access type - like <Resource.Link resource="token/:token">tokens</Resource.Link>.
       </p>

     </ReactMarkdown>
)}

