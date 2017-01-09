import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      stability="alpha"
      group="channels"
      method="post"
      path="/_channels/io/:network/:chan"
      beta={true}>

      <Endpoint.Parameter param="network">
        The key of the <Resource.Link resource="network/:network">network</Resource.Link> resource
      </Endpoint.Parameter>

      <Endpoint.Parameter param="chan">
        The key of the <Resource.Link resource="channel/:chan">channel</Resource.Link> resource
      </Endpoint.Parameter>

      <p>
        Pushes a list of messages onto the <Resource.Link resource="channel/:chan">channel</Resource.Link>.
      </p>

      <p>
        A succesfull response includes the fields <code>saved</code> (list of saved msgids)
        and <code>remaining</code> (unsigned integer with amount of items it failed to push to
        channel). An additional field <code>reason</code> may be added to responses where <code>remaining > 0</code>,
        this field states the size of the unpushed events in the request.
      </p>

      <p className="alert alert-info">
        Although documented, the Channels API is under review and testing. The API may be
        deprecated, renamed, deleted or changed in backwards incompatible ways. If you have any
        feedback on the API we would love to hear from you!
      </p>
   </Endpoint>
