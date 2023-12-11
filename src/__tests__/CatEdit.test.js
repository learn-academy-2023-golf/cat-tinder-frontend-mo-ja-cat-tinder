import { render, screen } from '@testing-library/react'
import CatEdit from '../Pages/CatEdit'
import { BrowserRouter } from 'react-router-dom'

describe("<CatEdit />", () => {
    beforeEach(() => {
        render(
      <BrowserRouter>
        <CatEdit />
      </BrowserRouter>
        )
    })

  it("renders without crashing", () => {
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    const formName = screen.getByText("What is your name?")
    expect(formName.getAttribute("for")).toEqual("name")
    const formAge = screen.getByText("How old are you?")
    expect(formAge.getAttribute("for")).toEqual("age")
    const formEnjoys = screen.getByText("What do you love to do?")
    expect(formEnjoys.getAttribute("for")).toEqual("enjoys")
    const formImage = screen.getByText("Purr-fect picture!")
    expect(formImage.getAttribute("for")).toEqual("image")
})
})









