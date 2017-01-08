import React from 'react'
import _ from 'lodash'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Device Management">

    <ReactMarkdown>
      # Device Management

      <p>
        Manage devices and their metadata.
      </p>

    </ReactMarkdown>

  </Page>



