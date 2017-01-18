import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
  <Resource
    reverse={true}
    resource="config/:vsn"
    url={url}
    name="Device Configuration">

    <h2>All types of configuration</h2>
  </Resource>
