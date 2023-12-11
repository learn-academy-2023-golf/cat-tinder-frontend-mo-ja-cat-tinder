import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  const currentCat = cats?.find((cat) => cat.id === +id)
  const [editCat, setEditCat] = useState({
    name: currentCat ? currentCat.name : '',
    age: currentCat ? currentCat.age : '',
    enjoys: currentCat ? currentCat.enjoys : '',
    image: currentCat ? currentCat.image : ''
  })
  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
    navigate("/catindex")
  }
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="name">What is your name?</Label>
          <Input type="text" name="name" onChange={handleChange} value={editCat.name} />
        </FormGroup>
        <FormGroup>
          <Label for="age">How old are you?</Label>
          <Input type="text" name="age" onChange={handleChange} value={editCat.age} />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">What do you love to do?</Label>
          <Input type="text" name="enjoys" onChange={handleChange} value={editCat.enjoys} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Purr-fect picture!</Label>
          <Input type="URL" name="image" onChange={handleChange} value={editCat.image} />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Update your purr-fect profile!
        </Button>
      </Form>
    </>
  )
}
export default CatEdit
