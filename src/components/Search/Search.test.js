import React from 'react'
import { shallow, mount } from 'enzyme'
import axios from 'axios'

import Search from '../Search/Search'
import Result from '../Result/Result'

jest.mock('axios')

describe('Search', () => {

  let wrapper
  const dataMock = {
    location: 'london', 
    lat: '111', 
    long: '222'
  }

  axios.get.mockImplementationOnce(() => Promise.resolve({ data: dataMock }))

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

  it('should fetch geocaoding data from API', async () => {
    const search = new Search()
    search.fetch('london')
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith('https://api.mapbox.com/geocoding/v5/mapbox.places/london.json?access_token=pk.eyJ1Ijoiamo0OTQxMSIsImEiOiJjazhiZDl6M2wwN2hsM2VrYXM1cHc5djNhIn0.ElasCKxGyRHlKrnYufqg1A&limit=1')
  })

})


