import React, { Component } from 'react'

import '../../App.css'

class Result extends Component {

  constructor(props) {
    super(props)

    this.toWhole = this.toWhole.bind(this)
    this.showCity = this.showCity.bind(this)
  }

  toWhole() {
    return Math.round(this.props.temperature)
  }

  showCity() {
    if(this.props.location != null)
      return this.props.location.split(',')[0].toUpperCase()
  }

  render() {
    return(
      <div className='result-box'>
        <div className='left-div'>
          <p className='temperature'>{this.toWhole()}°C</p>
          <h2>{this.showCity()}</h2>
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


