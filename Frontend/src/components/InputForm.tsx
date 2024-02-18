import React, { useEffect, useState } from 'react'
import { Button, Form, FloatingLabel } from 'react-bootstrap'
import IBurger from '../Interfaces/IBurger'
import BurgerApiService from '../services/BurgerApiService'
import { useBurgerContext } from '../contexts/BurgerContextProvider'
import UploadImageService from '../services/UploadImageService'

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
  const [imageFile, setImageFile] = useState<File | null>(null)

  const handleSubmit = async() => {

    if(imageFile != null){
      const result = await UploadImageService.uploadImage(imageFile)
      console.log("ImageUpload:" + result)
    }

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

  const handleFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    

    if(file){
      setImageFile(file)
      setImage(file.name)
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
            className='mb-3'
            onClick={handleCancel}
            >
            Avbryt
          </Button>

          <FloatingLabel 
            controlId='name'
            label='Navn'
            className='mb-3 text-light'
          >
            <Form.Control 
                type='text' 
                placeholder=''
                className='bg-dark text-light'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
                >
            </Form.Control>
          </FloatingLabel>

          <Form.Group controlId="formDescription">
            <Form.Label className='text-light text-left'>Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={6} 
              placeholder="Enter description" 
              className='mb-3 bg-dark text-light'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required={true}
              />
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label className='text-light'>Price</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="0" 
              className='mb-3 bg-dark text-light'
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              required={true}
              />
          </Form.Group>


        <Form.Group controlId='formImage' className='mb-3'>
            <Form.Label className='text-light'>Upload image</Form.Label>
            <Form.Control onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChanged(e)} type='file' size='lg' className='bg-dark text-light'/>
        </Form.Group>

          <Button  
            variant="warning" 
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
