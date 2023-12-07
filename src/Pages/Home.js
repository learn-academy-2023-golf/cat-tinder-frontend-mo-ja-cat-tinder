import React from "react"
import needABoo from "../assests/needaboo.jpg"

const Home = () => {
  return (
    <>
      <div className="not-found">
        <h2>
          Home.
        </h2>
        <img src={needABoo} alt="cat that says need a boo?" />
      </div>
    </>
  )
}

export default Home

