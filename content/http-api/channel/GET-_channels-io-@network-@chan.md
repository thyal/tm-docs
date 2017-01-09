import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="device"
      method="get"
      path="/_channels/io/:network/:chan"
      beta={true}>

      <Endpoint.Return code="200">
         A list of <Resource.Link resource="channel/:chan">channel resources</Resource.Link>
      </Endpoint.Return>

      <Endpoint.Return code="401">
         Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link> when
         no authentication given or authentication failed
      </Endpoint.Return>

      <Endpoint.Return code="403">
         Returns a <Resource.Link resource="error/auth">error object</Resource.Link> when
         no access to the resource
      </Endpoint.Return>

      <Endpoint.Parameter param="network">
        The key of the <Resource.Link resource="network/:network">Network</Resource.Link> resource
      </Endpoint.Parameter>

      <Endpoint.Parameter param="chan">
        The key of the <Resource.Link resource="channel/:chan">Network</Resource.Link> resource
      </Endpoint.Parameter>

      <p>
        Continously receive data from <code>:network/:chan</code>
      </p>

      <p>
        Sets the HTTP transfer-encoding response to <code>Chunked</code>, then delivers each
        event received on the channel to the listening channel.
      </p>


      <h4>Delivery semantics</h4>
      <p>
        A successfull request to this endpoint reads a stream of events from the channel. All events
        persisted in the channel are FIFO and may be though of as extremely minimalistic queue.
        When the server writes events to the response the event is considered succesfully delivered
        and will be removed from he head of the channel as soon as a low-level acknowledge (ie TCP
        ack) is received from the client. <b>This method provides no flow control and extremely weak 
        delivery guarantees, <em>do not use</em>.</b>
      </p>

      <p className="alert alert-info">
        Although documented, the Channels API is under review and testing. The API may be
        deprecated, renamed, deleted or changed in backwards incompatible ways. If you have any
        feedback on the API we would love to hear from you!
      </p>
   </Endpoint>
