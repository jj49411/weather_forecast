import React, { Component } from 'react'
import '../../App.css'
import axios from 'axios'

import Result from '../Result/Result'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      placeholder: 'Type in a city',
      value: '',
      location: '',
      lat: '',
      long: '',
      result: {},
      submitted: false,
      isLoading: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchGeo = this.fetchGeo.bind(this)
    this.fetchWeather = this.fetchWeather.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    this.fetchGeo(this.state.value)
    this.setState({
      submitted: true
    })
    e.preventDefault()
  }

  fetchGeo(value) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1Ijoiamo0OTQxMSIsImEiOiJjazhiZDl6M2wwN2hsM2VrYXM1cHc5djNhIn0.ElasCKxGyRHlKrnYufqg1A&limit=1`
    axios.get(url)
    .then(response => {
      const location = response.data.features[0].place_name
      const lat = response.data.features[0].center[1]
      const long = response.data.features[0].center[0]
      this.setState({ location, lat, long })
      this.fetchWeather(lat, long)
    })

    
  }

  fetchWeather(lat, long) {
    const url = `https://api.darksky.net/forecast/5d21d057806d759017a1a2a10f37b1af/${lat},${long}?units=si`
    axios.get(url)
    .then(response => {
      const summary = response.data.currently.summary
      const temperature = response.data.currently.temperature
      const chanceOfRain = response.data.currently.precipIntensity
      const weekForecast = response.data.daily.summary
      this.setState({
        result: { summary, temperature, chanceOfRain, weekForecast },
        isLoading: false
      })
    })
  }

  reset() {
    this.setState({ 
      submitted: false,
      value: '' 
    })
  }

  
  render() {
    const { placeholder, value, location, result, submitted, isLoading } = this.state
    
    return(
      <div className='search-box'>
        {!submitted ? (
          <form onSubmit={this.handleSubmit}>
            <label className='city'>
              CITY :
              <input 
                className='search-bar'
                type='text'
                value={value}
                placeholder={placeholder}
                onChange={this.handleChange}
              />
            </label>
            <input 
              className='submit-button' type='submit' value='Go'/>
          </form>
        ) : null}

        {submitted && !isLoading  ? (
          <div>
            <Result location={location} summary={result.summary} temperature={result.temperature} chanceOfRain={result.chanceOfRain} weekForecast={result.weekForecast}/>
            <button type='button' className='reset-button btn-light' onClick={this.reset}>Start Again</button>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Search
