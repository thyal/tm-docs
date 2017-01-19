import React from 'react'
import {ReactMarkdown} from '../../../components/Markdown.js'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Authentication">
    <h2>Authentication</h2>

    <p>
      Enables session and token based authentication for API users.
    </p>

    <p className="alert alert-info">
      <b>Forward Compatability:</b> All the endpoints related to session handeling are due to be
      removed, this may happend while still at current version (v2) or in a future release. To
      provide compatability with your software we will do our best to make these changes minimal
      but we highly recommend that you don't use any of these endpoints.
    </p>


    <h3>Authenticating Request</h3>

    <p>
      Your credentials ensures that only you have access to your network and devices. Each request
      you make must contain authentication to validate your identity. There are two ways
    </p>

    <h4>Using Tokens-V1 </h4>

    <p className="lead">
      Tokens are used to cryptographically ensure identity based on pre-shared key.
    </p>

    <p>
      Using this method each request must sign the value of the HTTP method, url and payload using
      &nbsp;<code>SHA256-HMAC</code>. The key used will be returned during calls to either
      &nbsp;<Endpoint.Link endpoint="POST /auth/token">create new tokens</Endpoint.Link> or
      &nbsp;<Endpoint.Link endpoint="POST /auth/session">create new sessions</Endpoint.Link>.
    </p>

    <p>
      The actual signing code will concatanate <code>HTTP Method</code>, <code>Request URL</code> and
      the <code>Request Body</code> (if any). Each of the parameters are separated by newline.
    </p>

    <pre>
      <code>
        method = "POST"{'\n'}
        url = "https://http.cloud.tiny-mesh.com/v2/auth/token"{'\n\n'}
        payload = {'"{\\"name\\": \\"new token\\"}"'}

        key = "?6~2y#/ty`z#6'pu2 ZTJ,v5oz;sL>mYK]3Ca~ .m(qp5)G[9dC5J8\gIre3tPis"{'\n'}
        fingerprint = "62bc14b17af79b920931ace4b6808dd9"{'\n\n'}

        signature = SHA256-HMAC(key, method + "\n" + url + "\n" + payload){'\n\n'}
        headers = {'{"Authorization" => fingerprint + " " + signature}'}{'\n\n'}

        request(method, url, headers, payload)
      </code>
    </pre>

    <h4>HTTP Basic</h4>

    <p className="lead">
      This authentication methods works by transmitting your credentials with every request.
    </p>

    <p>
      By including a <code>Authorization</code> header with the Base64 encoded value of your
      username and password concatenated. The server pulls out your username and password and
      matches it against the stored credentials.<br />
      For the user <code>dev@no-mesh.co</code> with password <code>KnockKnock</code> we can
      calculate the header value by following pseudo code
    </p>
    <pre>
      <code>
        user = "dev@no-mesh.co"{'\n'}
        password = "KnockKnock"{'\n'}{'\n'}
        assert "ZGV2QG5vLW1lc2guY286S25vY2tLbm9jaw==" == base64.encode(user + ":" + password)
      </code>
    </pre>

    <p className="alert alert-warning">
      Even though each request is secured by TLS/SSL we consider HTTP Basic to be a less secure.
      This way of authentication gives you access to all data in your network and special care
      should be taken to keep your credentials safe. Specifically always ensure you are using
      TLS/SSL (ie <em>https://</em> for all communication).
    </p>

  </Page>



