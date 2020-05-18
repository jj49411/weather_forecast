import React from 'react'
import { shallow, mount } from 'enzyme'

import Result from '../Result/Result'

describe('Result', () => {

  let wrapper

  beforeEach(() => {
    const props = {
      
    }
    wrapper = shallow(<Result />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should show a text', () => {
    expect(wrapper.find('.result-box').length).toBe(1)
  })

  it('should round temperature to whole number', () => {
    const props = {
      temperature: 15.3
    }
    wrapper = shallow(<Result {...props}/>)
    expect(wrapper.instance().toWhole()).toBe(15)
  })
})

