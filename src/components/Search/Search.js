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
      long: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetch = this.fetch.bind(this)
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    this.fetch(this.state.value)
    e.preventDefault()
  }

  fetch(value) {
    // var api_key = process.env.API_KEY;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1Ijoiamo0OTQxMSIsImEiOiJjazhiZDl6M2wwN2hsM2VrYXM1cHc5djNhIn0.ElasCKxGyRHlKrnYufqg1A&limit=1`
    axios.get(url)
    .then(response => {
      const location = response.data.features[0].place_name
      const lat = response.data.features[0].center[1]
      const long = response.data.features[0].center[0]
      this.setState({ 
        location: location,
        lat: lat,
        long: long
      })
    })
  }

  
  render() {
    const { placeholder, value } = this.state
    return(
      <div className='search-box'>
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
        <Result value={this.state.location}/>
      </div>
    )
  }
}

export default Search
