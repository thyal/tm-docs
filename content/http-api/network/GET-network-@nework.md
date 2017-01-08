import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) => {
  return (
   <Endpoint
    url={url}
    group="network"
    method="get"
    path="/network/:network">

      <Endpoint.Return code="200">A <Resource resource="network/:nid">Network Object</Resource></Endpoint.Return>
      <Endpoint.Return code="401">A <Resource resource="error/no-auth">Error object</Resource></Endpoint.Return>
      <Endpoint.Return code="403">
        Authentication failed, or no access to the resource. <Resource resource="error/auth">Error object</Resource>
      </Endpoint.Return>

      <Endpoint.Parameter param="network">
        The Network ID, the Base36 encoded value of <code>address</code> key.
      </Endpoint.Parameter>

      <p>
         Retrieves the <Resource resource="network/:nid">Network resource</Resource> identified by&nbsp;
         <Endpoint.Parameter param="network">nid</Endpoint.Parameter>.
      </p>
   </Endpoint>
)}

