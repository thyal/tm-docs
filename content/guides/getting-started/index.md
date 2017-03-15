import React from 'react'

export default ({url, Page}) =>
  <Page url={url} name="Quick Start" subtree={false} next="/guides/getting-started/intro.html">

    <h1>Quick Start Guide</h1>

    <p>
      Tinymesh Cloud™ is a SaaS platform that extends Tinymesh™ networks with a secure communication- and data storage infrastructure, allowing additional services to easily communicate and configure Tinymesh™ devices.

      The Tinymesh Cloud™ service aims to simplify the development cycle as well as deployment and maintenance of existing Tinymesh™ networks. Some of it's features include:

      <ul>
        <li>High-availability infrastructure for secure communication</li>
        <li>Online configuration and monitoring of Tinymesh™ networks</li>
        <li>Secure Key Management Infrastructure</li>
      </ul>
    </p>

    <h4>What is the Tinymesh Cloud™ Quick Start Guide?</h4>
    <p>
      The Fast Track consists of a few hands-on steps to quickly get you up and
      running with Tinymesh Cloud™. All the steps include descriptions and examples
      to get you up to speed on our platform.

      This guide targets developers that have minimal experience with the Tinymesh Cloud service, and serves as a setup reference for new installations.
    </p>

    <h4>What does the Quick Start Guide cover?</h4>
    <p>
      The Quick Start Guide takes you through the following sections:

      <ul>
        <li><Page.link url="/guides/getting-started/intro.html">What is Tinymesh Cloud?: High level overview of the Tinymesh Cloud architecture</Page.link></li>
        <li><Page.link url="/guides/getting-started/initial-configuration.html">Connecting to Tinymesh Cloud: Initial configuration needed to use Tinymesh Cloud</Page.link></li>

        <li><Page.link url="/guides/getting-started/communcating.html">Using Tinymesh Cloud To Send Data: How to  communicate</Page.link></li>
        <li><Page.link url="/guides/getting-started/querying.html">Querying Data: A review of standard query operations.</Page.link></li>
      </ul>
    </p>
  </Page>
