import React from 'react'
import _ from 'lodash'
import Page from './Page.js'
import Root from './Root.js'

let storage = {}

const pickReturn = (t) => Endpoint.Return === t.type ? t : null
const pickParam = (t) => Endpoint.Parameter === t.type ? t : null
const pickQParam = (t) => Endpoint.QueryParameter === t.type ? t : null
const pickData = (t) => !pickReturn(t) && !pickParam(t) && !pickQParam(t) ? t : null

const Returns = ({returns}) =>
   <div className="returns">
      { returns }
   </div>


const QueryParams = ({qparams}) =>
   React.Children.count(qparams) > 0 &&
      <div className="qparams">
         <h4>Query Parameters</h4>

         <ul className="query-parameters">
            { qparams.map( ({param, children}) => <li className="query-parameter"><code>{ param }</code>  &ndash; { children }</li>)}
         </ul>
      </div>


const Params = ({params}) => {
   return React.Children.count(params) > 0 &&
      <div className="params">
         <h4>URL Parameters</h4>

         <ul className="parameters">
            { params.map( ({props}, i) => <li key={i} className="parameter"><code>:{ props.param }</code>  &ndash; { props.children }</li>)}
         </ul>
      </div> }

class Endpoint extends React.Component {
   constructor(props) {
      super(props)
      let name = props.method.toUpperCase() + ' ' + props.path
      storage[name] = props

      Page.register(_.assign({name}, props))
   }

   render() {
      const
         {method, path} = this.props,
         returns = React.Children.map(this.props.children, pickReturn),
         params  = React.Children.map(this.props.children, pickParam),
         qparams = React.Children.map(this.props.children, pickQParam),
         children = React.Children.map(this.props.children, pickData)

      let page = Page.pages[Root.target(this.props.url)]

      return (
         <div className="endpoint">
            <Page.Breadcrumbs page={Page.pages[Root.target(this.props.url)]} />

            <h3>{method.toUpperCase()} {path}</h3>

            <h6>https://http.cloud.tiny-mesh.com/v2{path}</h6>

            <Returns returns={returns} />
            <Params params={params} />
            <QueryParams qparams={ qparams } />

            <h4>Description</h4>
            { children }

            <Page.Tree {...page} />

{/*
            <h5>Example Request</h5>
            <pre>
               % curl -u example@tiny-mesh.com https://http.cloud.tiny-mesh.com/v2/network -v{'\n'}
               &gt; GET /v2/network HTTP/1.1{'\n'}
               &gt; Host: http.cloud.tiny-mesh.com{'\n'}
               &gt; Authorization: Basic ZXhhbXBsZUB0aW55LW1lc2guY29tOnRlc3Q={'\n'}
               &gt; User-Agent: curl/7.51.0{'\n'}
               &gt; Accept: application/json{'\n'}
            </pre>
            <h5>Example Respone</h5>
            <pre>
               &lt; content-length: 52247{'\n'}
               &lt; cache-control: max-age=0, private, must-revalidate{'\n'}
               &lt; server: PelleHttp/2.0{'\n'}
               &lt; access-control-allow-origin: *{'\n'}
               &lt; access-control-allow-headers: Content-Type,Accept,Authorization,X-Data-Encoding{'\n'}
               &lt; access-control-expose-headers: Transfer-Encoding,X-Data-Encoding{'\n'}
               &lt; content-type: text/json{'\n'}
               &lt;{'\n'}
               &lt;{'\n'}
               &gt; [{'\n'}
               &gt;    {'{'}{'\n'}
               &gt;       "channels" : [{'\n'}
               &gt;          "1e8-sn4r-aqlo-541",{'\n'}
               &gt;          "1e8-sn4r-b6co-fdl",{'\n'}
               &gt;          "1e8-sph1-tdd0-8nv",{'\n'}
               &gt;          "1e8-sph1-tec8-4rc"{'\n'}
               &gt;       ],{'\n'}
               &gt;       "types" : [{'\n'}
               &gt;          "device",{'\n'}
               &gt;          "gateway"{'\n'}
               &gt;       ],{'\n'}
               &gt;       "meta" : {'{'}{'\n'}
               &gt;          "created" : "2016-12-05T11:30:43.157Z",{'\n'}
               &gt;          "updated" : "2016-12-05T12:15:14.695Z"{'\n'}
               &gt;       {'}'},{'\n'}
               &gt;       "devices" : [{'\n'}
               &gt;          "15q5kwnb7I", "181iiWkK5", "1iekBSCqqf", "1xuZ7VEym3",{'\n'}
               &gt;          "258qPGFPv5", "2BH0ModGcW", "2Wp3udVDsY", "2XI0cXPEB9",{'\n'}
               &gt;          "32YibYR9Kt", "3HddhArNsa", "3JrWwGh9ir", "3eGX7ORCp4",{'\n'}
               &gt;          "3oWWyw11ox", "4UfLa1XrdO", "4bmu3W0Gpd", "4ct8PS6FXs",{'\n'}
               &gt;          "4o3isJEvTJ", "4sl8xa1v4o", "SgfugNVFt", "i1HBClcLK"{'\n'}
               &gt;       ],{'\n'}
               &gt;       "provision" : {'{'}{'\n'}
               &gt;          "default" : "active",{'\n'}
               &gt;          "type" : "device"{'\n'}
               &gt;       {'}'},{'\n'}
               &gt;       "key" : "Xr12",{'\n'}
               &gt;       "parents" : [{'\n'}
               &gt;          "organization/example"{'\n'}
               &gt;       ],{'\n'}
               &gt;       "address" : 1574678,{'\n'}
               &gt;       "name" : "Demo network",{'\n'}
               &gt;       "groups" : []{'\n'}
               &gt;    {'}'}{'\n'}
               &gt; ]{'\n'}
            </pre>
*/}
         </div>
      )
   }

   static get storage() {
      return storage
   }
}

const httpstatus = {
   "100" : "Continue",
   "101" : "Switching Protocols",
   "102" : "Processing",
   "200" : "OK",
   "201" : "Created",
   "202" : "Accepted",
   "203" : "Non-Authoritative Information",
   "204" : "No Content",
   "205" : "Reset Content",
   "206" : "Partial Content",
   "207" : "Multi-Status",
   "226" : "IM Used",
   "300" : "Multiple Choices",
   "301" : "Moved Permanently",
   "302" : "Found",
   "303" : "See Other",
   "304" : "Not Modified",
   "305" : "Use Proxy",
   "306" : "Switch Proxy",
   "307" : "Temporary Redirect",
   "400" : "Bad Request",
   "401" : "Unauthorized",
   "402" : "Payment Required",
   "403" : "Forbidden",
   "404" : "Not Found",
   "405" : "Method Not Allowed",
   "406" : "Not Acceptable",
   "407" : "Proxy Authentication Required",
   "408" : "Request Timeout",
   "409" : "Conflict",
   "410" : "Gone",
   "411" : "Length Required",
   "412" : "Precondition Failed",
   "413" : "Request Entity Too Large",
   "414" : "Request-URI Too Long",
   "415" : "Unsupported Media Type",
   "416" : "Requested Range Not Satisfiable",
   "417" : "Expectation Failed",
   "418" : "I'm a teapot",
   "422" : "Unprocessable Entity",
   "423" : "Locked",
   "424" : "Failed Dependency",
   "425" : "Unordered Collection",
   "426" : "Upgrade Required",
   "428" : "Precondition Required",
   "429" : "Too Many Requests",
   "431" : "Request Header Fields Too Large",
   "500" : "Internal Server Error",
   "501" : "Not Implemented",
   "502" : "Bad Gateway",
   "503" : "Service Unavailable",
   "504" : "Gateway Timeout",
   "505" : "HTTP Version Not Supported",
   "506" : "Variant Also Negotiates",
   "507" : "Insufficient Storage",
   "510" : "Not Extended",
   "511" : "Network Authentication Required",
}


class Return extends React.Component {
   constructor(props) {
      super(props)
   }


   render() {
      const {code} = this.props

      return <div className="return">
         <b>{code} {httpstatus[code]}</b> &ndash; {this.props.children}
      </div>
   }
}

class Parameter extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return <span>{ this.props.children }</span>
   }
}

class QueryParameter extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return <span>{ this.props.children }</span>
   }
}

Endpoint.Return = Return
Endpoint.Parameter = Parameter
Endpoint.QueryParameter = QueryParameter
Endpoint.Link = ({endpoint, children}) => {
   if (!endpoint)
      return <span style={{color: 'red', fontWeight: 'bold'}}>{children} (@UNDEFINED)</span>

   let page = Endpoint.storage[endpoint]
   if (!page)
      return <span title={endpoint} style={{color: 'red', fontWeight: 'bold'}}>{children} (@not-found)</span>

   return <a href={Root.link(null, page.url)}>{children}</a>
}

export default Endpoint

