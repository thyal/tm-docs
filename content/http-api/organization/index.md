import React from 'react'
import _ from 'lodash'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Organizations">
    <h1>Managing Organizations</h1>

    <p>
      The Organizations Endpoint manages the different aspects of <Resource.Link resources="organization/:org">organizations</Resource.Link>.
    </p>
  </Page>



