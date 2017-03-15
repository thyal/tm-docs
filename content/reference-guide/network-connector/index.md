import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Network Connectors">

    <ReactMarkdown>
      # Network Connectors

      <p>
        Network Connectors communicate between your Tinymesh Gateway and the
        Tinymesh Cloud Service.
      </p>
    </ReactMarkdown>

  </Page>
