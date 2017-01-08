import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Authentication">

    <ReactMarkdown>
      # Authentication

      <p>
        Enables session and token based authentication for API users.
      </p>

      <p className="alert alert-info">
        <b>Forward Compatability:</b> All the endpoints related to session handeling are due to be removed, this may happend while
        still at current version (v2) or in a future release. To provide compatability with your
        software we will do our best to make these changes minimal but we highly recommend that you
        don't use any of these endpoints.
      </p>
    </ReactMarkdown>

  </Page>



