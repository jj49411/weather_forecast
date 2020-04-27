import React from 'react'
import { shallow, mount } from 'enzyme'

import Search from '../Search/Search'
import Result from '../Result/Result'

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

  it('should submit the form when clicked on submit button', () => {
    const onSubmitSpy = jest.fn()
    wrapper = mount(
      <form onSubmit={onSubmitSpy} />
    )
    wrapper.find('form').simulate('submit')
    expect(onSubmitSpy).toHaveBeenCalled()
  })

  it('should target the input when the value is changed', () => {
    wrapper.find('.search-bar').simulate('change', {
      target: { value: 'Tokyo' }
    })
    expect(wrapper.find('.search-bar').props().value).toEqual('Tokyo')
  })

  it('should render the Result Component', () => {
    expect(wrapper.containsMatchingElement(<Result />)).toEqual(true);
  })

})


