import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
   <Endpoint
      url={url}
      group="message"
      method="get"
      path="/messages/:netsel[/:devsel]">



    <Endpoint.Parameter param="netsel">
      The key of the <Resource.Link resource="network/:network">network</Resource.Link> resource
    </Endpoint.Parameter>

    <Endpoint.Parameter param="devsel">
      The key of the <Resource.Link resource="device/:network/:device">device</Resource.Link> resource
    </Endpoint.Parameter>



    <Endpoint.ReqHeader header="X-Data-Encoding">
      Specifies the encoding of binary data fields, can be
      either <code>base64</code>, <code>hex</code> or <code>binary</code>.
      Data encoding may also be set by the <code>data.encoding</code> query parameter.
      If both header and query parameter option is used the header will have higher priority.
    </Endpoint.ReqHeader>

    <Endpoint.QueryParameter param="data.encoding">
      Specifies the encoding of binary data fields (like proto/tm.data for serial data events).
      The value can be either <code>base64</code>, <code>hex</code> or <code>binary</code>.
      Data encoding may also be set by the <code>X-Data-Encoding</code> header, if both
      header and query parameter option is used the header will have higher priority.
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="date.from">
      The <a href="#date-format">datetime</a> to start query timerange from. <em>Default: NOW//-1HOUR</em>
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="date.to">
      The <a href="#date-format">datetime</a> to end the query timerange
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="filter.pick">
      A comma separated list of fields to include in results. Nested paths can be selected by
      using dot notation: <code>proto/tm.rssi</code>
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="filter.omit">
      A comma separated list of fields to exclude from results. Nested paths can be selected by
      using dot notation: <code>proto/tm.rssi</code>
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="query">
      A string <a href="#query">query</a> to filter results by
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="sort.by">
      A path to use for sorting the resultset.  Nested paths can be selected by
      using dot notation: <code>proto/tm.rssi</code>.
      <em><b>Note:</b> This field has no effect when using <code>stream</code> or <code>continuous</code>.</em>
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="sort.order">
      Either <code>ascending</code> or <code>descending</code>. <em>Default: descending</em>
      <em><b>Note:</b> This field has no effect when using <code>stream</code> or <code>continuous</code>.</em>
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="limit">
      Limits the amount of items in the resultset. If <code>continuous</code> is used the query will
      terminate once the limit is reached
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="offset">
      Skips <code>n</code> first elements of resultset.
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="continuous">
      Subscribes to the resource in question and deliver data as it arrives in the service.
      When used in conjunction with <code>date.to</code> or <code>limit</code> the query will
      terminate when either precondition is met.
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="stream">
      Sets the HTTP response transfer encoding to <code>Chunked</code> and return each item in the
      result set as a distinct chunk.
    </Endpoint.QueryParameter>

    <Endpoint.QueryParameter param="map">
      A comma separated list of <a href="#processing-steps">processing steps</a> to apply to the result stream.
      <em>(Default: <code>unpack,filter,sort,slice</code>)</em>
    </Endpoint.QueryParameter>


    <hr />

    <h3 id="date-format">Date Format</h3>

    <p>
      The date formate is a variation of ISO 8601 dates. They can be represented in their full form
      like <code>2017-01-18T19:09:03.641951Z</code> or by picking only the <code>n</code> first
      segments like <code>2017-01-18</code> and the rest of the date will be infered.<br />
      Alternatively the value <code>NOW</code> may be used to represent the current server time.
    </p>

    <h4>Manipulating the datetime</h4>

    <p>
      A datefield may be manipulated by adding or subtracting time units from the base datetime.
      For instance <code>NOW//-1WEEK</code> will pick the datetime exactly 1 week back in time,
      multiple constructs can be chained as you liked <code>NOW//-1MONTH//+1HOUR</code>.<br />
    </p>

    <p>
      The supported <code>UNITS</code> for the dateparser are as following: <code>YEAR</code>,
      <code>MONTH</code>, <code>WEEK</code>, <code>HOUR</code>, <code>MINUTE</code> or <code>SECOND</code>.
    </p>

    <p>
      Due to the complexity of dates and their localized versions it's generally considered good
      practice to give exact UTC datetimes in your queries, if you need complex time ranges like
      &nbsp;<em>last sunday in last year</em> you should generated these dates on the client side.
    </p>

    <h3 id="query">Query Format</h3>

    <p>
      Simple rules to filter the resultset.

      Queries takes the form <code>{'expr := <k || val> <op> <k || val>'}</code>, for example: <code>proto/tm.rssi > 100</code>.
    </p>

    <p>
      <code>k</code> may be any nested path in dot notation, <code>op</code> may be one of the
      following equality operators: <code>{'=='}</code>, <code>{'!='}</code>, <code>{'<'}</code>
      , <code>{'>='}</code> or <code>{'>='}</code>. <br />
      <code>val</code> must be a scaler value <code>string := "abc" or 'def'</code>
      , <code>integer := 78491</code> or <code>float := 3.14</code>.<br />
    </p>

    <p>
      Some basic arithematic can be performed on <code>k</code> and <code>val</code>, like matching
      on rssi in dBm: <code>{'-50 < proto/tm.rssi * -0.5'}</code>
    </p>

    <h3 id="processing-steps">Processing steps</h3>

    <p>
      Processing steps enable certain parts of the return chain. The available processing steps are
      as following:

      <ul>
        <li><code>unpack</code> — unpacks the raw packet data</li>
        <li><code>filter</code> — apply <code>query</code> rules, <code>filter.pick</code> and <code>filter.omit</code></li>
        <li><code>sort</code> — applies sorting</li>
        <li><code>slice</code> — apply <code>limit</code> and <code>offset</code></li>
        <li><code>raw</code> — set <code>proto/tm</code> field to the raw contents of the packet</li>
      </ul>
    </p>

   </Endpoint>
