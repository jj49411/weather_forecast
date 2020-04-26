import React from 'react'
import { shallow} from 'enzyme'

import Search from '../Search/Search'

describe('Search', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should show a text', () => {
    expect(wrapper.find('.city').length).toBe(1)
  })

  it('should have a search bar', () => {
    expect(wrapper.find('.search-bar').length).toBe(1)
  })

  it('should have a submit button', () => {
    expect(wrapper.find('.submit-button').length).toBe(1)
  })

})
