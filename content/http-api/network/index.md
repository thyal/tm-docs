import React from 'react'
import _ from 'lodash'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Network Management - @todo">

    <ReactMarkdown>
      # Network Management

      <p>
         Networks are an integral part of the data model provided by Tinymesh Cloud.
         The encapsulate all the <Resource.Link resource="device/:network/:device">devices</Resource.Link>,
         provides a way of managing ACL's rules and common setting accross the device set.
      </p>

    </ReactMarkdown>

  </Page>



