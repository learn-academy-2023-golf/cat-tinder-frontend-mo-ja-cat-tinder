import React, { useState, useEffect } from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import CatEdit from "./Pages/CatEdit"
import CatIndex from "./Pages/CatIndex"
import CatNew from "./Pages/CatNew"
import CatShow from "./Pages/CatShow"
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"
import "./App.css"
import mockCats from "./mockCats"
import { Routes, Route } from "react-router-dom"

const App = () => {

  const [cats, setCats] = useState([])

  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => setCats(payload))
      .catch((error) => console.log("Cat read errors", error))
  }
  const createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readCat())
      .catch((errors) => console.log("Cat create errors", errors))
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
