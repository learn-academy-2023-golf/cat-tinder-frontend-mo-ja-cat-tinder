import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../Components/Footer.js"

describe("<Footer />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
    })

    it("has website information", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const element = screen.getByText(/Jacob and Markayel's version of Cat Tinder\.\| See A Match\? \|2023 Golf Cohort \| LEARN/)
        expect(element).toBeInTheDocument(/Jacob and Markayel's version of Cat Tinder\.\| See A Match\? \|2023 Golf Cohort \| LEARN/)
    })
})