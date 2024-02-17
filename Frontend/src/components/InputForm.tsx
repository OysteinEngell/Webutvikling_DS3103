import React, { useEffect, useState } from 'react'
import { Button, Form, FloatingLabel } from 'react-bootstrap'
import IBurger from '../Interfaces/IBurger'

type Props = {
  burger: IBurger
}

const InputForm: React.FC<Props> = ({burger}) => {

  const [id, setId] = useState<number | null>(burger.id)
  const [name, setName] = useState(burger.name)
  const [description, setDescription] = useState(burger.description)
  const [price, setPrice] = useState(burger.price)
  const [image, setImage] = useState(burger.image)



  return (
      <div className='p-3'>
        <Form>
          <FloatingLabel 
            controlId='name'
            label='Navn'
            className='mb-3'
          >
            <Form.Control 
                type='text' 
                placeholder=''
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
                >
            </Form.Control>
          </FloatingLabel>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Enter description" 
              className='mb-3'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required={true}
              />
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="0" 
              className='mb-3'
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              required={true}
              />
          </Form.Group>


        <Form.Group controlId='formImage'>
            <Form.Label>Upload image</Form.Label>
            <Form.Control type='file' size='lg' />
        </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
  )
}

export default InputForm
