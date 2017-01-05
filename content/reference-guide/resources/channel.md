import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Resource resource="channel/:chan" url={url} name="Channel" weight={45}>

    <Resource.Field field="key">
      A ascii string used to identify the organization.
    </Resource.Field>

    <Resource.Field field="name">
      A UTF-8 encoded string used for humans to identify the organization.
    </Resource.Field>

    <Resource.Field field="networks">
      A list of <Resource.Link resource="network/:network">Network ID's</Resource.Link> currently
      assigned to this organization.
    </Resource.Field>

    <Resource.Field field="users">
      A list of <Resource.Link resource="user">user id's</Resource.Link> currently belonging to this organization
    </Resource.Field>

    <Resource.Field field="meta.created" generated={true}>ISO 8601 datetime of creation</Resource.Field>
    <Resource.Field field="meta.updated" generated={true}>Last updates ISO 8601 datetime </Resource.Field>

    <ReactMarkdown>
      # Channels

      <p>
        Channels provides a extremely minimal FIFO-queue to work with routing message to different
        downstream sources. All <Resource.Link resource="network/:network">networks</Resource.Link> have
        by default the channels <code>&lt;network&gt;/@application</code> and <code>&lt;network&gt;/@tinymesh</code>
        representing the left and right side of the communication. 
      </p>

      #### Aliases
      <p>
        Channels may be assigned aliases, each aliases MUST take the form <code>:network + "/@" + alias</code>.
      </p>

      #### Acceptance Filter
      <p>
        Each channel may optionally define a query for accepting data into the channel. The query is a ExQuery string (not to be
        confused with XQuery implementation EXQuery).
      </p>
    </ReactMarkdown>

  </Resource>





