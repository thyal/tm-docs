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
var tidy = require('tidy-html5').tidy_html5
//var program = require('commander')
var ReactMarkdown = require(path.join(process.cwd(), 'components/Markdown.js')).ReactMarkdown

var version = '3.2.0'

var walk = function(dir) {
   var results = []
   if (fs.statSync(dir).isFile())
      return [dir]

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

const files = flatMap([process.argv[3]], walk )

const args = process.argv.length <= 4 ? process.argv.slice(3) : process.argv.slice(4)
const workingset = flatMap(args, walk )


const Root = require(path.join(process.cwd(), 'components/Root.js')).default
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
         Root,
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
      dir = path.dirname(distfile).split(path.sep)

   let
      result = ReactDOMServer.renderToStaticMarkup(
         React.createElement(Component, {pages: elements,
                                         file,
                                         url: relpath}, elem))

   if (save) {
      console.error(':: output ' + file + ' -> ' + distfile)

      dir.reduce((acc, comp) => {
         try {
         fs.mkdirSync(path.join(cwd, acc.concat([comp]).join(path.sep)), () => null)
         } catch(e) { }
         return acc.concat([comp])
      }, [])

      // tidy up the html since React gives us a mess without newlines
      result = "<!DOCTYPE html>\n" + result
      result = tidy(result, {
         "indent-spaces": 4,
         "indent": true,
         "drop-empty-elements": false,
         "quiet": true,
         "tidy-mark": false
      })

      // assumes that the directory exists
      fs.writeFile(distfile, result, (err) => {
         if (err) throw err;
      })
   }
}

// just generate them twice and we'ere $$$
elements.map(f)
elements.filter( ([file]) => workingset.find( (x) => x === file)).map((e) => f(e.concat([true])))

// we can't know what's links don't "exist" until we have the entire tree. Let each
// component be on each own
