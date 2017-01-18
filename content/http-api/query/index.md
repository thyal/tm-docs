import React from 'react'
import _ from 'lodash'

export default ({url, Page}) =>
  <Page url={url} name="Data Queries & Message streaming">
    <h1>Data Queries & Messages</h1>

    <p className="lead">
      The primary data input of the service is messages flowing up- or downstream.
      These API's allows the client to query the message store for historical data
      or stream live.
    </p>
  </Page>



