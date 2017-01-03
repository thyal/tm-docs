import React from 'react'

export default class Page extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <h1>I am  page</h1>

            { this.props.children }
         </div>
      )
   }
}

