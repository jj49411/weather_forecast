import React, { Component } from 'react'

import '../../App.css'

class Result extends Component {


  render() {
    return(
      <div className='result-box'>
        <div className='left-div'>
          <p>{this.props.location}</p>
          <p>{this.props.temperature}°C</p>
        </div>
        <div className='right-div'>
          <p>Summary: {this.props.summary}</p>
          <p>Precipitation: {this.props.chanceOfRain}%</p>
          <p>Forecast: {this.props.weekForecast}</p>
        </div>
        
      </div>
    )
  }
}

export default Result


