import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Button } from "reactstrap"

const CatIndex = ({ cats }) => {
  return (
    <div className="cat-index">
      <h5>
        Cat Index
      </h5>
      <div className="index-page">
        {cats.map((catObject, index) => {
          return (
            <Card
              key={index}
              style={{
                width: '18rem'
              }}
            >
              <img
                alt="Sample"
                src={catObject.image}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {catObject.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Age: {catObject.age}
                </CardSubtitle>
                <CardText>
                  Find a match.
                </CardText>
                <Button>
                  <NavLink to={`/catshow/${catObject.id}`} className="nav-link">
                    More button.
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex