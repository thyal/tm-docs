import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) => {
  return (
     <ReactMarkdown>
       <Endpoint
         url={url}
         group="message"
         method="post"
         path="/message/:network/:device">

         <Endpoint.Return code="200">A <Resource resource="network/:nid">Network Object</Resource></Endpoint.Return>
         <Endpoint.Return code="401">A <Resource resource="error/no-auth">Error object</Resource></Endpoint.Return>
         <Endpoint.Return code="403">
           Authentication failed, or no access to the resource. <Resource resource="error/auth">Error object</Resource>
         </Endpoint.Return>
       </Endpoint>

       <p>
        Retrieves the <Resource resource="network/:nid">Network resource</Resource> identified by&nbsp;
        <Endpoint.Parameter>nid</Endpoint.Parameter>.
       </p>

       ## THIS IS A HEADER
     </ReactMarkdown>
)}

