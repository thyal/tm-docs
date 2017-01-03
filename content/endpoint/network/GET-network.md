import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) => {
  return (
    <Endpoint
      url={url}
      group="network"
      method="get"
      path="/network"
      public={false}
      params={{}}>

      <Endpoint.Return code="200">A list of <Resource resource="network/:nid">Network Objects</Resource></Endpoint.Return>
      <Endpoint.Return code="401">A <Resource resource="error/no-auth">Error object</Resource></Endpoint.Return>
      <Endpoint.Return code="403">
        Authentication failed, or no access to the resource. <Resource resource="error/auth">Error object</Resource>
      </Endpoint.Return>

      <ReactMarkdown>
        <p>
          Retrieves a list of <Resource resource="network/:nid">Network resources</Resource> associated
          with the authenticated entity.
        </p>

        <p>
          If the <Resource resource="user">user</Resource> has membership in
          any <Resource resource="organization/:org">organizations</Resource>, networks associated with
          those <Resource resource="organization/:org">organizations</Resource> will also be
          returned. To separate between inherited <Resource resource="organization/:org">organizations</Resource> and
          your own you check the <code>parents</code> key to see if <code>user/&lt;your@account&gt;</code>
          exists.
        </p>
      </ReactMarkdown>

    </Endpoint>
)}

