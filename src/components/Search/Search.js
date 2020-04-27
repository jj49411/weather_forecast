import React, { Component } from 'react'
import '../../App.css'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      placeholder: 'Type in a city',
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className='city'>
            CITY:
            <input 
              className='search-bar'
              type='text'
              value={this.state.value}
              placeholder={this.state.placeholder}
              onChange={this.handleChange}
            />
          </label>
          <input 
            className='submit-button' type='submit' value='Go'/>
        </form>
      </div>
    )
  }
}

export default Search
