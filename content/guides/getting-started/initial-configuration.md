import React from 'react'
import _ from 'lodash'

const scriptHTML = `
function toPaddedHex(n) {
  return "0x" + ("0" + n.toString(16)).slice(-2)
}
window.setNID = function(parts) {
  document.getElementById("nid-input-0").innerHTML = toPaddedHex(parts[0]);
  document.getElementById("nid-input-1").innerHTML = toPaddedHex(parts[1]);
  document.getElementById("nid-input-2").innerHTML = toPaddedHex(parts[2]);
  document.getElementById("nid-input-3").innerHTML = toPaddedHex(parts[3]);
}

window.handleNID = function(event) {
  console.log('parse NID')
  var value = document.getElementById("input-nid").value;

  var addr = parseInt(value, 10)



  if (value.match(/^[0-9]+$/)) {
      console.log('good0-address', addr)
      window.setNID([(addr >> 24) & 255, (addr >> 16) & 255, (addr >> 8) & 255, (addr >> 0) & 255])
      document.getElementById("nid-error").innerHTML = ""
    } else {
      console.log('bad-address', addr)
      window.setNID([0, 0, 0, 0])
      document.getElementById("nid-error").innerHTML = "Invalid address, enter numbers only"
  }
}
`

export default ({url, name, Root, Page, Resource}) => {
  return (
    <Page url={url}
          name="Initial Configuration"
          weight={20}>

      <h1>Initial Configuration</h1>

      <p>
        All Tinymesh Devices comes pre-configured with a Unique ID (UID) to distinguish
        them from each other. In addition one may configure a System ID (SID) to create
        multiple Tinymesh Networks running in the same location. Last there is a Network ID (NID)
        that allows gateways identify which Network they belong to in the Tinymesh Cloud.
      </p>

      <p>
        These different addresses are permanently stored in the Configuration and Calibration Memory
        of the Tinymesh Device. To connect the Gateway to the Cloud Service we must create a new Network, and a Gateway Device
        in the Cloud Service and then configure the Network ID (NID) in the Gateway device.
      </p>

      <p className="alert alert-warning">
        <b>Tinymesh Firmware Version Notice</b><br /><br />

        To connect to the Tinymesh Cloud web-service, the gateway module must use firmware revision 1.35 or greater. Contact your local distributor for aid in flashing the Gateway Device.
      </p>

      <p>
        The following steps must be done to configure the device, enter the <Resource.Link resource="network/:network" field="address">Network Address</Resource.Link> (returned from the API). Use the "Generate Config" option to
        create a working configuration

        <ol>
          <li>Connect the Gateway Device to a serial port interface</li>
          <li>Set the Device in configuration mode by pressing the <em>Configuration Button</em></li>
          <li>Open the serialport using your favourite Terminal Emulator (default baudrate: 19200)</li>

          <li>Observe that the Gateway device sends a prompt (<code>{'>'}</code>) to indicate that we have entered configuration mode</li>
          <li>Write <code>G</code> to the serialport to configure it for Gateway operation</li>

          <li>Edit the Configuration Memory by writing <code>M</code> (no prompt will be displayed)</li>
          <li>Configure packet mode operation by writing two bytes <code>0x03 0x00</code></li>
          <li>Execute the '0xFF' command to terminate the Configuration Memory command</li>

          <li>Edit the Calibration Memory by writing <code>HW</code></li>
          <li>Configure the Network ID (NID) by writing 8 bytes <code>0x17 NN 0x18 NN 0x19 NN 0x1A NN</code></li>
          <li>Execute the '0xFF' command to terminate the Calibration Memory command</li>

          <li>Execute the X command to set the device normal state</li>
        </ol>
      </p>

      <script type="text/javascript" dangerouslySetInnerHTML={{__html: scriptHTML}} />

      <div dangerouslySetInnerHTML={{__html: `
        <input type="text" id="input-nid" onChange="window.handleNID()" />
        <button class="button button-primary">Generate Config</button>
      `}} />

      <span className="error" id="nid-error" style={{color: 'red'}} />
      <pre>
        <code>
          <span className="red"><b>(rx)</b> >{'\n'}</span>
          <span className="green"><b>(tx)</b> G{'\n'}</span>
          <span className="red"><b>(rx)</b> >{'\n'}</span>
          <span className="green"><b>(tx)</b> M{'\n'}</span>
          <span className="green"><b>(tx)</b> 0x03 0x00{'\n'}</span>
          <span className="green"><b>(tx)</b> 0xFF{'\n'}</span>
          <span className="red"><b>(rx)</b> >{'\n'}</span>
          <span className="green"><b>(tx)</b> HW{'\n'}</span>
          <span className="green"><b>(tx)</b>{' '}
            0x17 <span id="nid-input-0">0x00</span>{' '}
            0x18 <span id="nid-input-1">0x00</span>{' '}
            0x19 <span id="nid-input-2">0x00</span>{' '}
            0x1a <span id="nid-input-3">0x00</span>{' '}
            {'\n'}</span>
          <span className="green"><b>(tx)</b> 0xFF{'\n'}</span>
          <span className="red"><b>(rx)</b> >{'\n'}</span>
          <span className="green"><b>(tx)</b> X{'\n'}</span>
        </code>
      </pre>

      <Page.Neighbours url={url} name="Initial Configuration" className="inline-block" />
    </Page>
    )
}
