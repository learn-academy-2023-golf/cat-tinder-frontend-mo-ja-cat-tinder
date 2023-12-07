import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }
  return (
    <>
      <FormGroup>
        <Label for="name">What is your name?</Label>
        <Input type="text" name="name" onChange={handleChange} value={newCat.name} />
      </FormGroup>
      <FormGroup>
        <Label for="age">How old are you?</Label>
        <Input type="text" name="age" onChange={handleChange} value={newCat.age} />
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">What do you love to do?</Label>
        <Input type="text" name="enjoys" onChange={handleChange} value={newCat.enjoys} />
      </FormGroup>
      <FormGroup>
        <Label for="image">Purr-fect picture!</Label>
        <Input type="URL" name="image" onChange={handleChange} value={newCat.image} />
      </FormGroup>
      <Button onClick={handleSubmit} name="submit">
        Create your purr-fect profile!
      </Button>
    </>

  )
}

export default CatNew