import React from 'react'

class Resource extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return <span className="resource">{ this.props.children }</span>
   }
}

export default Resource

