import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../Components/Header.js"

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Home"))
    expect(screen.getByText("Home")).toBeInTheDocument()
    userEvent.click(screen.getByText("Let's take a look!"))
    expect(screen.getByText("Let's take a look!")).toBeInTheDocument()
    userEvent.click(screen.getByText("Start today!"))
    expect(screen.getByText("Start today!")).toBeInTheDocument()
  })
})