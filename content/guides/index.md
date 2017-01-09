import React from 'react'
import _ from 'lodash'
import {ReactMarkdown} from '../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} weight={5} name="Guides & Examples" collapse>

    <ReactMarkdown>
      # Guides

    </ReactMarkdown>

  </Page>



