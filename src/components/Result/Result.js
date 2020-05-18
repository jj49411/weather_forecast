import React, { Component } from 'react'

import '../../App.css'

class Result extends Component {

  constructor(props) {
    super(props)
    this.toWhole = this.toWhole.bind(this)

  }

  toWhole() {
    return Math.round(this.props.temperature)
  }

  render() {
    return(
      <div className='result-box'>
        <div className='left-div'>
          <p className='temperature'>{this.toWhole()}°C</p>
          <p>{this.props.location}</p>
          
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


