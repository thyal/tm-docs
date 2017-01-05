import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Resource resource="token/:token" url={url} name="Token" weight={60}>

    <Resource.Field field="name">A human readable name for the token </Resource.Field>

    <Resource.Field field="type" readonly={true}>
      One of <code>one-time-token</code>, <code>token</code> or <code>session</code>, <code>token</code> or <code>session</code>
    </Resource.Field>

    <Resource.Field field="owner" readonly={true}>
      A reference to the resource owning the token.
      Takes the form <code>&lt;type&gt;/&lt;resource&gt;</code>
    </Resource.Field>

    <Resource.Field field="key" readonly={true}>
      The key used to sign requests for this token
    </Resource.Field>

    <Resource.Field field="fingerprint" readonly={true}>
      The fingerprint used to uniquly identify this token
    </Resource.Field>

    <Resource.Field field="usage_time" readonly={true}>
      The time, in milliseconds, interval this token is valid
    </Resource.Field>

    <Resource.Field field="expires" readonly={true}>
      The datetime for this token to expire
    </Resource.Field>

    <Resource.Field field="revoked.at" readonly={true}>
      The datetime for when this token was revoked
    </Resource.Field>

    <Resource.Field field="revoked.reason" readonly={true}>
      The reason why this token was revoked
    </Resource.Field>

    <Resource.Field field="meta.created" generated={true}>ISO 8601 datetime of creation</Resource.Field>
    <Resource.Field field="meta.updated" generated={true}>Last updates ISO 8601 datetime </Resource.Field>

    <ReactMarkdown>
      # Tokens

      <p>
        Tokens are the primary way of authenticating with the HTTP API. They are generated by some
        entity for a specific timeframe and may only be used by an entity who knows the secret key
        of the token.
      </p>

      #### Expiration and Usage
      <p>
        Each token carries a <code>usage_time</code> and <code>expires</code> field. These fields
        dictate the lifetime of a token. For normal tokens any usage of the HTTP API will reset the
        expires field to <code>NOW * usage_time</code> milliseconds.
      </p>

      #### Revocation
      <p>
        Once a token is revoked the token will be unusable for any further requests.
        Some examples of how to revocate are expiration, <Endpoint.Link endpoint="POST /auth/token/revoke/:fingerprint">user revocation</Endpoint.Link> or
        &nbsp;<Endpoint.Link endpoint="DELETE /auth/session">user logout</Endpoint.Link>, or usage (in case
        of <code>one-time-token</code>). Once revoked the time and reason will be set in
        <code>revoked.at</code> and <code>revoked.reason</code> respectively.
      </p>
    </ReactMarkdown>

  </Resource>





