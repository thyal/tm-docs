import React from 'react'

export default ({url, Root, Page}) =>
  <Page url={url}
        name="Querying Data"
        weight={40}>

    <h1>Querying</h1>

    <Page.Neighbours url={url} name="Querying Data" className="inline-block" />
  </Page>
