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

  console.log(cats)

  return (
    <>
    <h5> Cat Tinder! </h5>
      <Header />
      <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex />} />
      <Route path="/catshow" element={<CatShow />} />
      <Route path="/catnew" element={<CatNew />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App