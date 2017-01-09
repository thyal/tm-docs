import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Channels (beta)" beta={true}>
    <h2>Channels API</h2>


   <p>
      The channels API enables FIFO queue like functionality for network communication.
   </p>

   <h4>Routing events</h4>

   <p>
     Each individual channel may forward events to different channels using
     the <code>forwarding</code> field. Each channel will then match the incoming event against it's
     <code>query</code> field, if any, and potentially push it to it's message store.
   </p>


   <p className="alert alert-info">
     Although documented, the Channels API is under review and testing. The API may be
     deprecated, renamed, deleted or changed in backwards incompatible ways. If you have any
     feedback on the API we would love to hear from you!
   </p>
  </Page>



