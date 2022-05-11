import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew renders", () => {
  it("displays a heading", () => {
    const catNew = shallow(<CatNew />)
    const catNewHeadingText = catNew.find("h2").text()
    expect(catNewHeadingText).toEqual("Create a New Cat")
  })
  it("displays a form", () => {
    const catNew = shallow(<CatNew />)
    const formGroup = catNew.find("FormGroup")
    expect(formGroup.length).toEqual(4)
  })
})