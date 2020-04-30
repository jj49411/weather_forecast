import React, { Component } from 'react'

import '../../App.css'

class Result extends Component {

  render() {
    return(
      <div className='result-box'>
        <p>{this.props.value}</p>
      </div>
    )
  }
}

export default Result


