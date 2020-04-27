import React from 'react'
import { shallow } from 'enzyme'

import Result from '../Result/Result'

describe('Result', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Result />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should show a text', () => {
    expect(wrapper.find('.result-box').length).toBe(1)
  })

})
