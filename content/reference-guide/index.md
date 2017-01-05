import React from 'react'
import {ReactMarkdown} from '../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} weight={100} name="Reference Manual">

    <ReactMarkdown>
      # Tinymesh Docs

    </ReactMarkdown>

  </Page>
