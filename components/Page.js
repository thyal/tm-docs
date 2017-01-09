import React from 'react'
import path from 'path'
import _ from 'lodash'

import Root from './Root.js'

let pages = {}

const Breadcrumb = (page) => {
   return page.target ? null : <a href={Root.link(null, page.target)}>{page.name || page.url}</a>
}


const Breadcrumbs = ({page}) => {
   // never that many layers so stack will never overflow

   const appendParent = (p, acc) =>
      p.parent && p.parent !== (acc[0] || {}).parent ? appendParent(Page.pages[p.parent], _.concat([p], acc)) : acc

   const crumbs = _.concat([Page.pages['/'] || {url: './'}], appendParent(page, []))

   return <ul className="breadcrumb">
      {_.map(crumbs, ({url,name}, k) =>
         <li key={k}><a href={Root.link(null, url || '')}>{name || url}</a></li>)}
   </ul>
}

export default class Page extends React.Component {
   constructor(props) {
      super(props)

      Page.register(props)
   }

   render() {
      let
         {url} = this.props,
         isDir = '' === path.extname(url) || 'index.html' === url.substr(-10, 10),
         page = Page.pages[Root.target(url)],
         parent = Page.pages[page.parent]


      return (
         <div>
            <Breadcrumbs page={page} />
            { this.props.children }

            <Page.Tree {...page} />
         </div>
      )
   }

   // register a component into the page hierarchy; requires a url property
   static register(props) {
      let
         target = Root.target(props.url),
         parentpath = path.dirname(target),
         weight = props.url.split(/\//).length,
         defpage = pages[target] || {tree: {},
                                     url: props.url,
                                     target: target}

      pages[target] = _.assign(defpage, {weight: weight}, props, {parent: parentpath})

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
}

Page.Breadcrumbs = Breadcrumbs

Page.Tree = ({url, target, tree}) => {
  return <ul>
    {_.map(_.sortBy(tree, 'weight'), (v, k) =>
      true !== v.hidden && <li key={k}>
        <a href={Root.link(url, v.url)}>{v.name || v.target}</a>
        <Page.Tree {...v} />
      </li>)}
  </ul>
}
