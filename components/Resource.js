import React from 'react'
import _ from 'lodash'
import path from 'path'
import Page from './Page.js'
import Root from './Root.js'

let definitions = {}

class Resource extends React.Component {
   constructor(props) {
      super(props)

      if (props.url)
         Page.register(_.assign({}, props))

      props.resource && Resource.add(props.resource, props.url)
   }

   render() {
      const {children, url, resource, inline, siblings} = this.props

      if (!url)
         return <span style={{fontWeight: 'bold', color: 'red'}}>some resource</span>
      let
         isDir = '' === path.extname(url),
         page = Page.pages[Root.target(url)],
         parent = Page.pages[page.parent]

      return (
         <div className="resource">
            {true !== inline && <Page.Breadcrumbs page={Page.pages[Root.target(url)]} />}

            { React.Children.map(children, child => React.cloneElement(child, { resource: resource })) }

            <ul>
            { _.map( definitions[resource].fields, ({field, readonly, children}, k) =>
               <li key={k} className={readonly ? "read-only" : ""}><code>{field}</code> &ndash; {children}</li>
            )}
            </ul>

            <div>
               <Page.Siblings url={url} className="inline-block" siblings={siblings}>
                 {({name, url, active}, k) =>
                   <li key={k} className={true === active ? 'active' : ''}>
                     <a href={Root.link(null, url)}>
                       {name || path.basename(url, '.html')}
                     </a>
                   </li>}
               </Page.Siblings>
            </div>
         </div>
      )
   }

   static add(resource, url) {
      if (!definitions[resource])
         definitions[resource] = {
            fields: {},
            url: url
         }

      if (definitions[resource] && !definitions[resource].url && url)
         definitions[resource].url = url
   }

   static addField(props) {
      Resource.add(props.resource)

      definitions[props.resource].fields[props.field] = props
   }

   static get resources() {
      return definitions
   }

   static field(resource, field) {
      return ((definitions[resource] || {}).fields || {})[field]
   }
}

// The definition of a field within a resource
class Field extends React.Component {
   constructor(props) {
      super(props)
      //props.resource, props.field, props.action
      Resource.add(props.resource)
      Resource.addField(props)
   }

   render() {
//      let {field, action} = this.props
//      return <span style={{fontWeight: 'bold', color: 'red'}}>some param, {field}</span>
//
      return null
   }
}

// Render the set of fields for a resource given by {resource}
class FieldSet extends React.Component {
   render() {
      return <span style={{fontWeight: 'bold', color: 'red'}}>{this.props.children}</span>
   }
}



Resource.Field = Field
Resource.Param = Field
Resource.FieldSet = FieldSet
// link to the resource, possibly annotated with a specific field
Resource.Link = ({children, resource, field, ...props}) => {
   let [path, hash] = resource ? resource.split(/#[^#]*$/) : []
   if (!Resource.resources[path])
      return <a title={"resource="+path}>{children} (not found)</a>

   const link = (Resource.resources[path].url || '') + (hash ? '#' + hash : '')
   return <a href={Root.link(null, link)}>{children}</a>
}

export default Resource

