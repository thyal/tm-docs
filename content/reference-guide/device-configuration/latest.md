import React from 'react'
import _ from 'lodash'
import {DeviceConfiguration} from './index.md'

export default ({url, Page, Endpoint, Resource, ...rest}) =>
  <Resource resource="config/*latest" url={url} name="Latest (1.48)" siblings={true}>
    <h2>Latest (1.48)</h2>

    <b>@todo - base config</b>
  </Resource>
