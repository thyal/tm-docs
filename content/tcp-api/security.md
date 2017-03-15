import React from 'react'
import _ from 'lodash'

export default ({url, Page, Endpoint, Resource}) =>
  <Page url={url} name="Security Considerations" weight={200}>

    <h2 id="tls-ssl">Security Considerations</h2>


    <h3>Setups without encryption support</h3>

    <p>
      The TCP API provides two transports, one with TLS/SSL encryption and one unencrypted.
      We highly recommend using TLS/SSL transport, but recognize that some Network Connectors
      solutions does not include TLS/SSL support.<br />
      If you you are using the unencrypted transport you are susceptible to man-in-the-middle
      attacks, making it possible for unauthorized third parties to observe or potentially change
      your data.
    </p>

    <p>
      If you are using the unencrypted API we strongly recommend that you perform your own risk
      assesment and then get in touch with our support team to find the best possible solution to
      secure your communication.
    </p>

  </Page>




