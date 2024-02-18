import React, { useEffect, useState } from 'react'
import { Button, Form, FloatingLabel } from 'react-bootstrap'
import IBurger from '../Interfaces/IBurger'
import BurgerApiService from '../services/BurgerApiService'
import { useBurgerContext } from '../contexts/BurgerContextProvider'

type Props = {
  burger: IBurger,
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const InputForm: React.FC<Props> = ({burger, setEditMode}) => {

  const {updateAllBurgers, updateSearchResult} = useBurgerContext()
  const [name, setName] = useState(burger.name)
  const [description, setDescription] = useState(burger.description)
  const [price, setPrice] = useState(burger.price)
  const [image, setImage] = useState(burger.image)

  const handleSubmit = async() => {
      if(burger.id == null){
        const newBurger: IBurger = {
          name: name,
          description: description,
          price: price,
          image: image
        }

        const result = await BurgerApiService.postBurger(newBurger)
        console.log(result)
      }else{
        burger.name = name
        burger.description = description
        burger.price = price
        burger.image = image

        const result = await BurgerApiService.updateBurger(burger)
        console.log(result)
      }
  }

  const handleDelete = async () => {
      if(burger.id != null){
        const result = await BurgerApiService.deleteBurger(burger.id)
       
        const fetchResult = await BurgerApiService.getAllBurgers()
        if(fetchResult != undefined){
          updateAllBurgers(fetchResult)
          updateSearchResult(fetchResult)
        }

        
      }
      setEditMode(false)
  }

  const handleCancel = () => {
    setEditMode(false)
  }




  return (
      <div className='p-3'>

          

        <Form onSubmit={handleSubmit}>
        <Button 
            variant="dark" 
            className='w-100'
            onClick={handleCancel}
            >
            Avbryt
          </Button>

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


        <Form.Group controlId='formImage' className='mb-3'>
            <Form.Label>Upload image</Form.Label>
            <Form.Control type='file' size='lg' />
        </Form.Group>

          <Button  
            variant="primary" 
            type="submit"
            className='w-100 mb-3'
            >
            Lagre burger
          </Button>

          <Button 
            onClick={handleDelete} 
            variant="danger" 
            className='w-100'
            >
            Slett burger
          </Button>
        </Form>
      </div>
  )
}

export default InputForm
