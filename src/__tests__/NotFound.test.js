import { render, screen } from "@testing-library/react"
import NotFound from "../Pages/NotFound.js"
import notFoundImage from "../assests/huh_cat.jpg"
import { BrowserRouter } from "react-router-dom"

describe("<NotFound />", () => {
    it("renders without crashing", () => { })

    it("has the correct image", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )

        const image = screen.getByAltText("confused cat with huh written")
        expect(image).toHaveAttribute("src", notFoundImage)
    })
})