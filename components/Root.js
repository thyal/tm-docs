// Root.js
import React from 'react'
import Endpoint from './Endpoint.js'
import _ from 'lodash'
import path from 'path'
import crypto from 'crypto'

const hash = (buf, n) => crypto.createHash('sha256').update(buf).digest('hex').slice(0, n || 7)

export default (props) => {
   let groups = _.groupBy(Endpoint.storage, 'group')


   const
      relpath = path.dirname(path.relative(props.url, '.')),
      hasChildURL = (items, match) => _.some(items, ({url}) => url === match)

   return <html>
      <head>
         <meta charSet='utf-8' />
         <title>test</title>
         <link href={relpath + '/css/normalize.css'} rel='stylesheet' />
         <link href={relpath + '/css/skeleton.css'} rel='stylesheet' />
         <link href={relpath + '/css/style.css'} rel='stylesheet' />
         <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body>
         <div className="">
            <div className="" style={{overflowY: 'scroll', position: 'fixed', bottom: 0, top: 0, width: '70%'}}>
               <div style={{padding: '15px 30px'}}>{ props.children }</div>
            </div>

            <div className="sidebar">
               <h5 id="top" style={{paddingLeft: '13px', paddingTop: '1rem', paddingBottom: '2rem'}}>Tinymesh Cloud Docs</h5>

               <ul className="nav">
                  <li className="header"><a>Guide: Getting Started</a></li>
                  <li className="header"><a>Guide: Controlling GPIOs &ndash; lighting</a></li>
                  <li className="header"><a>Guide: Reading DLMS data</a></li>
                  <li className="header"><a>Guide: Wireless Sensor Networks</a></li>
                  <li className="header"><a>Guide: User Management</a></li>
               </ul>

               <ul className="nav">
               {_.map(groups, (items, group) =>
                     <li key={group} className={"header" + (hasChildURL(items, props.url) ? ' parent' : '')}>
                        <a>Endpoint: {group}</a>
                        <ul className="nav">
                           {_.map(_.sortBy(items, 'path'), (e, i) =>
                              <li key={i} className={e.url === props.url ? 'active' : ''}>
                                 <a href={relpath + "/" + e.url}>
                                    <span className="method">{e.method.toUpperCase()}</span> <span className="path">{e.path}</span>
                                 </a>
                              </li>)}
                        </ul>
                     </li>
               )}
               </ul>

               <ul className="nav">
                  <li className="header"><a>Resource: Network</a></li>
                  <li className="header"><a>Resource: Device</a></li>
                  <li className="header"><a>Resource: Message</a></li>
                  <li className="header"><a>Resource: Organization</a></li>
                  <li className="header"><a>Resource: Token</a></li>
                  <li className="header"><a>Resource: User</a></li>
                  <li className="header"><a>Resource: Channel</a></li>
               </ul>

               <hr style={{padding: '5px 0'}}/>

               <a className="back-to-top" href="#top">Back to top</a>
            </div>

         </div>
      </body>
   </html>
}
