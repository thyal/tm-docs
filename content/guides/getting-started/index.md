import React from 'react'
import l from 'lodash'

export default ({url, pages, Page}) => {
  const next = l.sortBy(Page.page(url).tree, 'weight')[0]
  return (
  <Page url={url} name="Quick Start" next="/guides/getting-started/intro.html" weight={0} subtree={false}>

    <h1>Quick Start Guide</h1>

    <p>
      Tinymesh Cloud™ is a SaaS platform that extends Tinymesh™ networks with a secure communication- and data storage infrastructure, allowing additional services to easily communicate and configure Tinymesh™ devices.

      The Tinymesh Cloud™ service is a realtime view into your Tinymesh Network
      that helps you in maintenance, deployment and development of your application.
      By using the Service you get access to:

      <ul>
        <li>High-availability infrastructure for secure communication</li>
        <li>Online configuration and monitoring of Tinymesh™ networks</li>
        <li>Secure Key Management Infrastructure</li>
      </ul>
    </p>

    <h4>What is the Tinymesh Cloud™ Quick Start Guide?</h4>
    <p>
      The Quick Start Guide is a general overview of the Tinymesh Cloud service
      and a few hands-on steps to quickly enable your Tinymesh Network for online
      communication.<br />
    </p>
    <p>
      This guide targets developers that have minimal experience with the Tinymesh Cloud service, and serves as a setup reference for new installations.
    </p>

    <Page.link parent={url} url={next.url}><b>Get started with your first Tinymesh Network</b></Page.link>
  </Page>
)}
