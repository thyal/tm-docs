import React from 'react'

export default ({url, Page, Endpoint, Resource}) =>
  <div>
     <Resource resource="error/generic" url={url} name="Errors">
      <h1>Error</h1>

      <p>
        Generic error containg a single field <pre>error</pre> with string description of error
      </p>
     </Resource>

     <Resource resource="error/no-auth" url={url} inline={true}>
      <h3>Error - Not authenticated</h3>

      <p>
        Authentication error given when authentication either failed or was not provided
      </p>

      <pre>
{`{
 "error": "access denied"
}`}
      </pre>
     </Resource>

     <Resource resource="error/permissions" url={url} inline={true}>
      <h3>Error - Permissions</h3>

      <p>
        Authentication error given entity was not authorized to access a given resource
      </p>

      <pre>
{`{
  "error": "access denied"
}`}
      </pre>
     </Resource>

     <Resource resource="error/not-found" url={url} inline={true}>
      <h3>Error - Not Found</h3>

      <p>
        An error object returned when the resources, or a sub-resource was not found.
      </p>

      <pre>
{`{
   "error": "not found",
   "resource" => "organization"
}`}
      </pre>
     </Resource>

     <Resource resource="error/conflict" url={url} inline={true}>
      <h3>Error - Conflict</h3>

      <p>
        An error object returned when there was some conflict, for example where there are some
        uniqueness constraints or other limitation.
      </p>

      <p>
        The <code>error</code> field describes the error in detail, in some cases a <code>conflict</code> field
        is included which referes to the conflicting resource.
      </p>

      <pre>
{`{
   "error": "conflict error",
   "conflict": "organization/no-mesh"
}`}
      </pre>
     </Resource>
  </div>

