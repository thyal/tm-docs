

import React from 'react'

export default ({url, Page, Resource}) =>
  <Page url={url} weight={100} name="Manually Configuring Tinymesh Gateways" collapse>

    <p className="lead">
      In most scenarios our integration software (like <Page.link parent={url} link url="reference-guide/network-connector">Network Connectors</Page.link>)
      will take care of the low-level configuration but it may be necessary when building
      your custom Network Connector hardware/software to perform these steps yourself.
    </p>

    <p>
      The Tinymesh Datasheet contains more information about the low level configuration
      interface for Tinymesh. It's recommend that you read up on that as well.
    </p>

    <p>
      When enabling a Tinymesh Gateway for connection with the <Page.link parent={url} url="tcp-api">TCP API</Page.link>,
      some identification must be exchanged to authenticate the gateway device.<br />
      The TCP API uses a combination of <Resource.Link resource="network/:network" field="address">Network ID</Resource.Link>,
      and <Resource.Link resource="device/:network/:device" field="address">Unique ID</Resource.Link>, and
      encryption to establish the link. To enable a particular device for communication with the Tinymesh Cloud
      the following steps must be completed:

      <ol>
        <li>Enable gateway operation; Write a single byte <code>G</code> to configure parameters (it's not sufficient to just set the Device Type in configuration memory as <code>G</code> also sets various RF and Link related parameters)</li>

        <li>Configure packet mode operation by setting address <code>03</code> to <code>00</code></li>

        <li>Configure the Unique ID by setting address <code>45-49</code> according to the registered gateway in Cloud</li>

        <li>Set the Network ID (NID) by writing 8 bytes <code>0x17 NN 0x18 NN 0x19 NN 0x1A NN</code> to the calibration memory (<code>HW</code> command)</li>

      </ol>
    </p>

    <span className="error" id="nid-error" style={{color: 'red'}} />
    <pre>
      <code>
        <span className="comment">; initial configuration mode prompt{'\n'}</span>
        <span className="red"><b>(rx)</b> >{'\n'}</span>

        <span className="comment">; Set device to gateway operations{'\n'}</span>
        <span className="green"><b>(tx)</b> G{'\n'}</span>
        <span className="red"><b>(rx)</b> >{'\n'}</span>

        <span className="comment">; Enter configuration memory and set to operate in packet mode{'\n'}</span>
        <span className="green"><b>(tx)</b> M{'\n'}</span>
        <span className="red"><b>(rx)</b> >{'\n'}</span>
        <span className="green"><b>(tx)</b> 0x03 0x00{'\n'}</span>
        <span className="comment">; Exits configuration memory{'\n'}</span>
        <span className="green"><b>(tx)</b> 0xFF{'\n'}</span>

        <span className="red"><b>(rx)</b> >{'\n'}</span>
        <span className="comment">; Enter calibration memory and set to Network ID{'\n'}</span>
        <span className="green"><b>(tx)</b> HW{'\n'}</span>
        <span className="green"><b>(tx)</b>{' '}
          0x17 <span id="nid-input-0">0x00</span>{' '}
          0x18 <span id="nid-input-1">0x00</span>{' '}
          0x19 <span id="nid-input-2">0x00</span>{' '}
          0x1a <span id="nid-input-3">0x00</span>{' '}
          {'\n'}</span>
        <span className="comment">; Exits calibration memory{'\n'}</span>
        <span className="green"><b>(tx)</b> 0xFF{'\n'}</span>
        <span className="red"><b>(rx)</b> >{'\n'}</span>
        <span className="comment">; Exits configuration mode{'\n'}</span>
        <span className="green"><b>(tx)</b> X{'\n'}</span>
      </code>
    </pre>
  </Page>
