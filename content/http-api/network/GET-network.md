import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) => {
  return (
    <Endpoint
      url={url}
      group="network"
      method="get"
      path="/network"
      weight={10}>

      <Endpoint.Return code="200">
         A list of <Resource.Link resource="network/:nid">Network Objects</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="401">
        No authentication method was given, or credentials where invalid. Returns
        a <Resource.Link resource="error/no-auth">Error object</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="403">
        Authentication failed, or no access to the resource; returns a <Resource.Link resource="error/auth">Error object</Resource.Link>
      </Endpoint.Return>

      <ReactMarkdown>
        <p>
          Retrieves a list of <Resource.Link resource="network/:nid" from={url}>Network resources</Resource.Link> associated
          with the authenticated entity.
        </p>

        <p>
          If the <Resource.Link resource="user" from={url}>user</Resource.Link> has membership in
          any <Resource.Link resource="organization/:org">organizations</Resource.Link>, networks associated with
          those <Resource.Link resource="organization/:org">organizations</Resource.Link> will also be
          returned. To separate between inherited <Resource.Link resource="network/:network">networks</Resource.Link> and
          your own you check the <code>parents</code> key to see if contains <code>user/&lt;your@account&gt;</code> -
          or whatever matches your <Resource.Link resource="token/:token">token</Resource.Link>.
        </p>
      </ReactMarkdown>

    </Endpoint>
)}

