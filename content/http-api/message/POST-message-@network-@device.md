import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="message"
      method="post"
      path="/message/:network[/:device]">


    <Endpoint.Return code="200">
      Returns the newly created <Resource.Link resource="message/:key">message object</Resource.Link>&nbsp;
      (formated as per query parameters).
    </Endpoint.Return>

    <Endpoint.Return code="400">
      Fails with a <Resource.Link resource="error/generic">error object</Resource.Link> when
      there was an error in the input.
    </Endpoint.Return>

    <Endpoint.Return code="401">
      Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link>
    </Endpoint.Return>

    <Endpoint.Return code="403">
      Fails with a <Resource.Link resource="error/permissions">error object</Resource.Link>.
      The error itself will describe ACL violation (access to device, network etc)
    </Endpoint.Return>

    <Endpoint.Parameter param="network">
      The key of the <Resource.Link resource="network/:network">network</Resource.Link> resource
    </Endpoint.Parameter>

    <Endpoint.Parameter param="device" optional={true}>
      An optional key used to specify the <Resource.Link resource="device/:network/:device">device</Resource.Link>&nbsp;
      the message should be sent to. If the parameter is not used the message payload must define
      the target address (<em>ie. using the <code>proto/tm.uid</code> field</em>).
    </Endpoint.Parameter>

    <Endpoint.QueryParameter param="ack">
      Force acknowledgement flag for multi-cast commands.
      This flag only have an effect when a) message in question is a <code>command</code>,
      b) no <code>proto/tm.cmd_number</code> have not been set in the payload,
      c) the device using firmware <b><span style={{color: 'red'}}>X.XX</span></b>
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="data.encoding">
      Specifies the encoding of binary data fields (like proto/tm.data for serial data events).
      The value can be either <code>base64</code>, <code>hex</code> or <code>binary</code>.
      Data encoding may also be set by the <code>X-Data-Encoding</code> header, if both
      header and query parameter option is used the header will have higher priority.
    </Endpoint.QueryParameter>

    <Endpoint.ReqHeader header="X-Data-Encoding">
      Specifies the encoding of binary data fields, can be
      either <code>base64</code>, <code>hex</code> or <code>binary</code>.
      Data encoding may also be set by the <code>data.encoding</code> query parameter.
      If both header and query parameter option is used the header will have higher priority.
    </Endpoint.ReqHeader>

    <p>
      Creates a single message for the target specified by <code>:device</code> or as identified from
      the parameter <code>proto/tm.uid</code>.
    </p>

    <p>
      Format of the message varies but each message contains the fields
      &nbsp;<code>key</code>, <code>datetime</code>, <code>received</code> and
      &nbsp;<code>proto/tm</code>.
      The exact format of the message are described in
      the <Resource.Link resource="message/:key">message resource page</Resource.Link>
    </p>
   </Endpoint>
