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
          <h2>I am {selectedCat.name}, age {selectedCat.age}.</h2>
          <h3>I enjoy {selectedCat.enjoys}</h3>
          <img alt={selectedCat.name} src={selectedCat.image} />
        </>
      )}
    </div>
  )
}

export default CatShow










