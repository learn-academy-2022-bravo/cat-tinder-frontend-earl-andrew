// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import App from './App'
import NotFound from './Pages/NotFound/NotFound'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When App renders", () => {
  it("displays a heading", () => {
    const renderedApp = shallow(<App />)

    const renderedHeader = renderedApp.find('Header')
    const renderedFooter = renderedApp.find('Footer')
    
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })

  it("provides a route of '/' to the home component", () => {
    const renderedApp = shallow(<App />)

    const renderedHomeRoute = renderedApp.find("[path='/']")
    
    expect(renderedHomeRoute.length).toEqual(1)
})

it("displays a page not found", () => {
  const renderedNotFound = shallow(<NotFound />)

  const renderedNotFoundPage = renderedNotFound.find("h2").text()

  expect(renderedNotFoundPage).toEqual("Page Not Found")
})

})