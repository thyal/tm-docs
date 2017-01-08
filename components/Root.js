// Root.js
import React from 'react'
import Endpoint from './Endpoint.js'
import Page from './Page.js'
import _ from 'lodash'
import path from 'path'
import crypto from 'crypto'

const hash = (buf, n) => crypto.createHash('sha256').update(buf).digest('hex').slice(0, n || 7)

let relpath, url

export default class Root extends React.Component {
   static get relpath() {
      return relpath
   }

   static get url() {
      return url
   }

   static link(from, to) {
      from = from || url

      if ('' !== path.extname(from))
         from = path.dirname(from)

      //console.log(from, to, path.relative(from.replace(/^\//, ''), to))
      return './' + path.relative(from.replace(/^\//, ''), to.replace(/^\//, '') || '/')
   }

   static target(url) {
      if (url === 'index.html')
         return '/'
      else if (url.match(/\/index\.html$/))
         return '/' + path.dirname(url)
      else
         return '/' + url.replace(/^\//, '')
   }

   render() {
      const props = this.props


      relpath = path.dirname(path.relative(props.url, '.'))
      url = Root.target(props.url)

      const
         hasChildURL = (child, match) => {
            return child.url === match || _.some(child.tree, ({url}) => url === match)
         },
         hasPrefix = (prefix, match) => prefix === match.substring(0, prefix.length)

      return <html>
         <head>
            <meta charSet='utf-8' />
            <title>test</title>
            <link href={Root.link(null, '/css/normalize.css')} rel='stylesheet' />
            <link href={Root.link(null, '/css/skeleton.css')} rel='stylesheet' />
            <link href={Root.link(null, '/css/style.css')} rel='stylesheet' />
            {/*
            <link rel="canonical" href={'/' + url} />
            */}

            <meta name='viewport' content='width=device-width, initial-scale=1' />
         </head>
         <body>
            <div className="">
               <div className="" style={{overflowY: 'scroll', position: 'fixed', bottom: 0, top: 0, width: '70%'}}>
                  <div style={{padding: '15px 30px'}}>
                     { React.Children.map(props.children, child => React.cloneElement(child, {relpath: relpath, root: this})) }
                  </div>
               </div>

               <div className="sidebar">
                  <h5 id="top" style={{paddingLeft: '13px', paddingTop: '1rem', paddingBottom: '2rem'}}><a href={relpath}>Tinymesh Cloud Docs</a></h5>

                  <ul className="nav">
                     {_.map(_.sortBy((Page.pages['/'] || {}).tree, 'weight'), (v, k) =>
                        true !== v.hidden && <li key={k} className={"section " + (v.className || '') + (hasPrefix(path.dirname(v.url), props.url) ? ' ancestor' : '')}>
                        <a href={Root.link(null, v.url)}>{v.name || path.dirname(v.url)}</a>

                        <ul className="nav">
                           {_.map(_.sortBy(v.tree, 'weight'), (child, p) =>
                              true !== child.hidden && <li key={p} className={"header" + (hasChildURL(child, props.url) ? ' parent' : '')}>
                                 {false !== child.name &&
                                    <a href={Root.link(null, child.url)}>
                                       {child.name || path.dirname(child.url)}
                                       {true === child.unstable && <span className="text-right label label-warning" style={{float: 'right'}}>unstable</span>}
                                       {true === child.beta && <span className="text-right label label-info" style={{float: 'right'}}>beta</span>}
                                    </a>}

                                 <ul className="nav">
                                    {_.map(_.sortBy(child.tree, 'weight'), (leaf, l) =>
                                       true !== leaf.hidden && <li key={l} className={leaf.url === props.url ? 'active' : ''}>
                                          <a href={Root.link(null, leaf.url)}>
                                             {leaf.name || leaf.url}
                                             {true === leaf.unstable && <span className="text-right label label-warning" style={{float: 'right'}}>unstable</span>}
                                          </a>
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
}
