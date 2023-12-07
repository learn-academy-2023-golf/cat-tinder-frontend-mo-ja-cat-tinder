import React, { useState } from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import CatEdit from "./Pages/CatEdit"
import CatIndex from "./Pages/CatIndex"
import CatNew from "./Pages/CatNew"
import CatShow from "./Pages/CatShow"
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"
import mockCats from "./mockCats"
import "./App.css"
import { Routes, Route } from "react-router-dom"

const App = () => {

  const [cats, setCats] = useState(mockCats)

  const createCat = (cat) => {
    console.log(cat)
  }

  return (
    <div className="homepage">
      <h5> Cat Tinder! </h5>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
