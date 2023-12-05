import React from "react"
import notFoundImage from "../assests/huh_cat.jpg"

const NotFound = () => {
  return(
    <> 
      <div className="not-found"> 
      <h2>HuH, wrong way!</h2>
      <img src={notFoundImage} alt="confused cat with huh written"/>
    </div>

    </>
  )
}

export default NotFound