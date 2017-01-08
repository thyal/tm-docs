import React from 'react'
import _ from 'lodash'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="User Endpoints">

    <ReactMarkdown>
      # User Endpoints

      <p>
        User endpoints are typically used in a setting where the user authenticated with
        a <Endpoint.Link endpoint="POST /auth/session">session</Endpoint.Link>. It's only use is to
        retreive or update the user object associated with the active authentication.
      </p>

    </ReactMarkdown>

  </Page>



