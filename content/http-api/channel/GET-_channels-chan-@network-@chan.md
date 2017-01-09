import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      stability="alpha"
      group="channels"
      method="get"
      path="/_channels/chan/:network/:chan"
      beta={true}>

      <Endpoint.Return code="200">
         A list of <Resource.Link resource="token/:token">channel tokens</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="401">
         Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link> when
         no authentication given or authentication failed
      </Endpoint.Return>

      <Endpoint.Return code="403">
         Returns a <Resource.Link resource="error/auth">error object</Resource.Link> when
         no access to the resource
      </Endpoint.Return>

      <Endpoint.Return code="404">
         Returns a <Resource.Link resource="error/not-found">error object</Resource.Link> when
         network did not contain channel
      </Endpoint.Return>

      <Endpoint.Parameter param="network">
        The key of the <Resource.Link resource="network/:network">network</Resource.Link> resource
      </Endpoint.Parameter>

      <Endpoint.Parameter param="chan">
        The key of the <Resource.Link resource="channel/:chan">channel</Resource.Link> resource
      </Endpoint.Parameter>

      <p>
        Retreives the <Resource.Link resource="channel/:chan">channel resources</Resource.Link> from <code>:network/:chan</code>
      </p>

      <p className="alert alert-info">
        Although documented, the Channels API is under review and testing. The API may be
        deprecated, renamed, deleted or changed in backwards incompatible ways. If you have any
        feedback on the API we would love to hear from you!
      </p>
   </Endpoint>
