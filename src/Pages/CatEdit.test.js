import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from './CatEdit'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew renders", () => {
  it("displays a heading", () => {
    const catEdit = shallow(<CatEdit />)
    const catEditHeadingText = catEdit.find("h2").text()
    expect(catEditHeadingText).toEqual("Edit a Cat")
  })
  it("displays a form", () => {
    const catEdit = shallow(<CatEdit />)
    const formGroup = catEdit.find("FormGroup")
    expect(formGroup.length).toEqual(4)
  })
})