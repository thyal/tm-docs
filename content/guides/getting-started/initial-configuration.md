import React from 'react'
import _ from 'lodash'

export default ({url, name, Root, Page, Resource}) => {
  return (
    <Page url={url}
          name="Initial Configuration"
          weight={20}>

      <h1>Initial Configuration</h1>

      <p>
        All Tinymesh Devices comes pre-configured with a Unique ID (UID) to distinguish
        them from each other. In addition you can configure a System ID (SID) to create
        multiple Tinymesh Networks running in the same location. Last there's the Network ID (NID)
        that allows gateways to identify with a remote service (ie, Tinymesh Cloud).
      </p>

      <p>
        These different ID's are permanently stored in the Configuration and Calibration Memory
        of the Tinymesh Device. To connect the Gateway to the Cloud Service we need
        to define the Network and Gateway Device in the Cloud Service and then configure the Network ID (NID) in the Gateway device.
      </p>

      <p>
        The actual configuration will be handled by
        a <Page.link parent={url} url="reference-guide/network-connector">Network Connector</Page.link> like{' '}
        <Page.link parent={url} url="reference-guide/network-connector/guri.html">GURI</Page.link> or
        similar <em>(if desired you can also <Page.link parent={url} url="reference-guide/knowledge/manual-gw-configuration.html">configuring the Tinymesh Gateways manually</Page.link>).</em>
      </p>

      <p className="alert alert-warning">
        <b>Tinymesh Firmware Version Notice</b><br /><br />
        To connect to the Tinymesh Cloud web-service, the gateway module must use firmware revision 1.35 or greater. Contact your local distributor for aid in flashing the Gateway Device.
      </p>

      <h4>Connecting your first Network</h4>

      <p>
        Assuming you already have a Tinymesh device we must define the Network in the
        Cloud Service before we it can connect. Sign in to the <a href="https://cloud.tiny-mesh.com">Cloud Workbench</a>,
        in the Dashboard you can find the link to create a new network on the left side.
        If you don't have an account already just sign up using the <a href="https://cloud.tiny-mesh.com">Cloud Workbench</a>;
        Once signed in you will immediately be prompted to create your first network.
      </p>

      <Page.Neighbours url={url} name="Initial Configuration" className="inline-block" />
    </Page>
    )
}
