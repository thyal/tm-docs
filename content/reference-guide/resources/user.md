import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Resource resource="user" url={url} name="User" weight={100}>

    <Resource.Field field="email" readonly={true}>The email address of the user</Resource.Field>
    <Resource.Field field="name">UTF-8 encoded string, should contain full name of user</Resource.Field>
    <Resource.Field field="phone">A string representation of a E.164 phone number, or a empty string</Resource.Field>
    <Resource.Field field="networks" derived={true}>List of <Resource.Link resource="network/:network" field="key">Network ID's</Resource.Link></Resource.Field>
    <Resource.Field field="organizations" derived={true}>List of <Resource.Link resource="organization/:org" field="key">Organization ID's</Resource.Link></Resource.Field>
    <Resource.Field field="meta.created" generated={true}>ISO 8601 datetime of creation</Resource.Field>
    <Resource.Field field="meta.updated" generated={true}>Last updates ISO 8601 datetime </Resource.Field>

    <ReactMarkdown>
    # User

    <p>
       User resources represents a authentication entity.
       Users may access all resources it's part of (inherited either from <Resource.Link resource="network/:network">a network</Resource.Link> or
       a <Resource.Link resource="organization/:org">organization</Resource.Link>).
    </p>

    <p>
      Only the user itself may access it's own user, with the exception of derived fields
      (like <code>organizations</code> and <code>networks</code>).
    </p>


    </ReactMarkdown>

  </Resource>
