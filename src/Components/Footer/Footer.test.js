import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({adapter: new Adapter()})

describe("When App renders", () => {
    it("displays a footer", () => {
      const renderedApp = shallow(<Footer />)
  
      const renderedFooter = renderedApp.find("h3").text()
      
      expect(renderedFooter).toEqual('Andrew & Earl')
    })
})