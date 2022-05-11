import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When App renders", () => {
    it("displays a footer", () => {
      const renderedApp = shallow(<CatIndex />)
  
      const renderedCatIndex = renderedApp.find("h3").text()
      
      expect(renderedCatIndex).toEqual('Meet the Cats!')
    })
})