import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  let selectedCat = cats?.find(catObject => catObject.id === +id)
  console.log(selectedCat)

  return (
    <div className="show-page">
      {selectedCat && (
        <>
          <h2>Hi! My name is {selectedCat.name}, I am {selectedCat.age} years old.</h2>
          <h3>Things I enjoy are {selectedCat.enjoys}</h3>
          <h4>Lets make a purr-fect match!</h4>
          <img alt={selectedCat.name} src={selectedCat.image} />
        </>
      )}
    </div>
  )
}

export default CatShow










