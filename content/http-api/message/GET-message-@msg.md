import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
  <Endpoint
    url={url}
    group="message"
    method="get"
    path="/message/:msg">

    <Endpoint.Return code="200">
      Returns a <Resource.Link resource="message/:key">message object</Resource.Link>
      with query parameters applied.
    </Endpoint.Return>

    <Endpoint.Return code="400">
      Fails with a <Resource.Link resource="error/generic">error object</Resource.Link> when
      the format of <code>:msg</code> was wrong
    </Endpoint.Return>

    <Endpoint.Return code="401">
      Returns a <Resource.Link resource="error/no-auth">error object</Resource.Link>
    </Endpoint.Return>

    <Endpoint.Return code="403">
      Fails with a <Resource.Link resource="error/permissions">error object</Resource.Link>.
      The error itself will describe ACL violation (access to device, network etc)
    </Endpoint.Return>

    <Endpoint.Return code="404">
      Fails with a <Resource.Link resource="error/not-found">not found error</Resource.Link> when
      the message was not found.
    </Endpoint.Return>

    <Endpoint.Parameter param="msg">
      The key of the <Resource.Link resource="message/:key">message</Resource.Link> resource
    </Endpoint.Parameter>

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
      Retreives a single message identified by <code>:key</code>.
    </p>

    <p>
      Format of the message varies but each message contains the fields
      &nbsp;<code>key</code>, <code>datetime</code>, <code>received</code> and
      &nbsp;<code>proto/tm</code>.
      The exact format of the message are described in
      the <Resource.Link resource="message/:key">message resource page</Resource.Link>
    </p>
  </Endpoint>
