#!/usr/bin/env node

require('babel-register')({
  presets: [
    'es2015',
    'stage-0',
    'react'
  ]
})

var React = require('react')
var ReactDOMServer = require('react-dom/server')
var path = require('path')
var fs = require('fs')
//var program = require('commander')
var ReactMarkdown = require(path.join(process.cwd(), 'components/Markdown.js')).ReactMarkdown

var version = '3.2.0'

var walk = function(dir) {
   var results = []
   var list = fs.readdirSync(dir)

   list.forEach(function(file) {
      file = dir + '/' + file

      var stat = fs.statSync(file)
      if (stat && stat.isDirectory())
         results = results.concat(walk(file))
      else
         results.push(file)
   })

   return results
}

if (process.argv.length <= 2) {
   console.error('usage: $0 <layout-component> dir0 [dirN ...]')
   return process.exit(1)
}

let Component = require(path.join(process.cwd(), process.argv[2]))

if (!Component) {
   console.error('layout-component `' + process.argv[0] + '` was not found')
   process.exit(1)
}

if (Component.default)
   Component = Component.default

flatMap = (list, f) => Array.prototype.concat.apply([], list.map(f))

const files = flatMap(process.argv.slice(3), walk )

const Page = require(path.join(process.cwd(), 'components/Page.js')).default
const Endpoint = require(path.join(process.cwd(), 'components/Endpoint.js')).default
const Resource = require(path.join(process.cwd(), 'components/Resource.js')).default

let elements = files.map( (file) => {
   const buf = fs.readFileSync(file, {encoding: 'utf-8'})
   //const elem = React.createElement(ReactMarkdown, {source: buf})
   let elem = require(path.join(process.cwd(), file)),
       ext = new RegExp("\\" + path.extname(file) + "$"),
       outputfile = path.relative(process.cwd(), file).replace(ext, ''),
       relpath = outputfile.split(path.sep).slice(1).join(path.sep) + '.html',
       props = {
         Endpoint,
         Resource,
         Page,
         url: relpath
       }

   return [file, relpath, React.createElement(elem.default, props)]
})


f = ([file, relpath, elem, save]) => {
   let
      distfile = path.join('dist', relpath),
      cwd = process.cwd(),
      dir = path.dirname(distfile).split(path.sep),
      result = ReactDOMServer.renderToStaticMarkup(
         React.createElement(Component, {pages: elements,
                                         file,
                                         url: relpath}, elem))

   if (save) {
      dir.reduce((acc, comp) => {
         fs.mkdir(path.join(cwd, acc.concat([comp]).join(path.sep)), () => null)
         return acc.concat([comp])
      }, [])

      fs.writeFile(distfile, result, (err) => {
         if (err) throw err;
         //console.log('output: ' + file + ' -> ' + distfile)
      })
   }
}

// just generate them twice and we'ere $$$
elements.map(f)
elements.map((e) => f(e.concat([true])))

const _ = require('lodash')

let ungenerated = _.keys(Page.pages)

let log = ({parent, target, url, tree}, n) => {
   ungenerated = _.without(ungenerated, target)
   console.log(n || 0, parent, target, url)
   _.each(tree, (e) => log(e, (n || 0) + 1))
}

log(Page.pages['/'])

if (_.size(ungenerated) > 0) {
   console.error("The following pages are not linked anywhere:")
   _.each(ungenerated, (u) => console.error(" - " + u))
}
