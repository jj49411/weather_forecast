import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'
import Search from './components/Search/Search'


configure({ adapter: new Adapter() })


describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render a div', () => {
    expect(wrapper.find('.app-div')).toBeDefined()
    expect(wrapper.find('.app-div').length).toBe(1)
  })

  it('should render a title', () => {
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('should render the Search Component', () => {
    expect(wrapper.containsMatchingElement(<Search/>)).toEqual(true);
  })

})
