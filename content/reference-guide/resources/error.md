import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
  <div>
     <Resource resource="error/generic" url={url} name="Errors - @todo">
      <span>This is a generic error</span>
     </Resource>

     <Resource resource="error/no-auth" url={url} inline={true}>
      <span>Not authenticated error</span>
     </Resource>

     <Resource resource="error/auth" url={url} inline={true}>
      <span>Failed to auth error</span>
     </Resource>

  </div>

