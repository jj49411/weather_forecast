import React, { Component } from 'react'
import '../../App.css'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      placeholder: 'Type in a city'
    }
  }
  
  render() {
    return(
      <div>
        <form>
          <label className='city'>
            CITY:
            <input 
              className='search-bar'
              type='text'
              placeholder={this.state.placeholder}
            />
          </label>
          <input className='submit-button' type='submit' value='Go'/>
        </form>
      </div>
    )
  }
}

export default Search
