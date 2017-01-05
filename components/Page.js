import React from 'react'
import path from 'path'
import _ from 'lodash'

let pages = {}

const urltarget = (url) => {
   if (url === 'index.html')
      return '/'
   else if (url.match(/\/index\.html$/))
      return '/' + path.dirname(url)
   else
      return '/' + url.replace(/^\//, '')
}

const link = (from, to) =>
   path.relative( ('' === path.extname(from) ? Page.path(from) : path.dirname(from)), urltarget(to) )

export default class Page extends React.Component {
   constructor(props) {
      super(props)

      Page.register(props)
   }

   render() {
      let
         {url} = this.props,
         isDir = '' === path.extname(url),
         page = Page.pages[Page.path(url)],
         parent = Page.pages[page.parent]

      return (
         <div>
            <div><a href={link(url, parent.target)}>Go to Parent</a></div>

            { this.props.children }

            <Page.Tree {...page} />
         </div>
      )
   }

   // register a component into the page hierarchy; requires a url property
   static register(props) {
      let
         target = urltarget(props.url),
         parentpath = path.dirname(target)

      pages[target] = _.assign(pages[target] || {tree: {}, target: target}, props, {parent: parentpath})

      if (parentpath !== target) {
         pages[parentpath] = pages[parentpath] || {tree: {}, target: parentpath}
         pages[parentpath].tree[target] = pages[target]
      }
   }

   static get pages() {
      return _.clone(pages)
   }

   static get tree() {
      return _.clone(tree)
   }

   static link(from, to) {
      return link(from, to)
   }

   static path(p) {
      return urltarget(p)
   }
}


Page.Tree = ({url, target, tree}) => {
  return <ul>
    {_.map(tree, (v, k) =>
      <li key={k}>
        <a href={link(url, v.url)}>{v.name || v.target}</a>
        <Page.Tree {...v} />
      </li>)}
  </ul>
}
