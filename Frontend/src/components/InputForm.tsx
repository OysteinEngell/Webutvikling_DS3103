import React from 'react'
import { Button, Form } from 'react-bootstrap'

const InputForm: React.FC = () => {
  return (
      <div>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter description" />
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter price" />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Upload Image</Form.Label>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
  )
}

export default InputForm
