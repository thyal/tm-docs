// Root.js
import React from 'react'
import Endpoint from './Endpoint.js'
import Page from './Page.js'
import _ from 'lodash'
import path from 'path'
import crypto from 'crypto'

const hash = (buf, n) => crypto.createHash('sha256').update(buf).digest('hex').slice(0, n || 7)

export default (props) => {
   let groups = _.groupBy(Endpoint.storage, 'group')


   global.url = props.url
   const
      relpath = global.relpath = path.dirname(path.relative(props.url, '.')),
      hasChildURL = (child, match) => {
         return child.url === match || _.some(child.tree, ({url}) => url === match)
      },
      hasPrefix = (prefix, match) => prefix === match.substring(0, prefix.length)

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
               <div style={{padding: '15px 30px'}}>{ React.Children.map(props.children, child => React.cloneElement(child, {relpath: relpath})) }</div>
            </div>

            <div className="sidebar">
               <h5 id="top" style={{paddingLeft: '13px', paddingTop: '1rem', paddingBottom: '2rem'}}><a href={relpath}>Tinymesh Cloud Docs</a></h5>

               <ul className="nav">
                  {_.map(_.sortBy((Page.pages['/'] || {}).tree, 'weight'), (v, k) =>
                  <li key={k} className={"section " + (v.className || '') + (hasPrefix(path.dirname(v.url), props.url) ? ' ancestor' : '')}>
                     <a href={Page.path(v.url)}>{v.name || path.dirname(v.url)}</a>

                     <ul className="nav">
                        {_.map(_.sortBy(v.tree, 'weight'), (child, p) =>
                           <li key={p} className={"header" + (hasChildURL(child, props.url) ? ' parent' : '')}>
                              {false !== child.name &&
                                 <a href={Page.path(child.url)}>{child.name || path.dirname(child.url)}</a>}

                              <ul className="nav">
                                 {_.map(_.sortBy(child.tree, 'weight'), (leaf, l) =>
                                    <li key={l} className={leaf.url === props.url ? 'active' : ''}>
                                       <a href={relpath + "/" + leaf.url}>{leaf.name || leaf.url}</a>
                                    </li>)}
                              </ul>
                           </li>)}
                     </ul>
                  </li>
                  )}
               </ul>

               <hr style={{padding: '5px 0'}}/>

               <a className="back-to-top" href="#top">Back to top</a>
            </div>

         </div>
      </body>
   </html>
}
