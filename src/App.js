import React, { Component } from 'react'
import './App.css'

import Search from './components/Search/Search'

class App extends Component {
  render() {
    return(
      <div className='app-div'>
        <h1>WEATHER FORECAST</h1>
        <Search />
      </div>
      
    )
  }
}

export default App
