import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe("When App header", () => {
    it("displays a footer", () => {
      const renderedApp = shallow(<Header />)
  
      const renderedHeader = renderedApp.find("h1").text()
      
      expect(renderedHeader).toEqual('Cat Tinder')
    })
})