import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Resource resource="organization/:org" url={url} name="Organization">

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
      # Organization

      <p>
        Organization ties different <Resource.Link resource="user">users</Resource.Link> together and 
        helps simplifies access control patterns accross different <Resource.Link resource="network/:network">network resources</Resource.Link>.
      </p>
    </ReactMarkdown>

  </Resource>





