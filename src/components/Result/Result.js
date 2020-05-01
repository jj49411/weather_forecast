import React, { Component } from 'react'

import '../../App.css'

class Result extends Component {
  

  render() {
    return(
      <div className='result-box'>
        <p>{this.props.location}</p>
        <p>{this.props.summary}</p>
        <p>{this.props.temperature}</p>
        <p>{this.props.chanceOfRain}</p>
        <p>{this.props.weekForecast}</p>
      </div>
    )
  }
}

export default Result


