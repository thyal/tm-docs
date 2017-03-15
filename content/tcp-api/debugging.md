import React from 'react'
import _ from 'lodash'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Debugging" weight={100}>

   <h2>Debugging TCP connection</h2>

   <p className="lead">
      The TCP connection features little information about what's going on, this page describes some
      common scenarios and how to detect them
   </p>

   <h3>Observing protocol and using sniffers</h3>

   <h3>Device not receiving data</h3>

   <h3>Device disconnects</h3>

   <h3>Failed authentication</h3>

  </Page>




