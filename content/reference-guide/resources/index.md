import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Resources Definitions">

    <ReactMarkdown>
      # API Resources

      <p>
        Each of the following resources represents the return value of the different HTTP API
        endpoints.
      </p>
    </ReactMarkdown>

  </Page>






