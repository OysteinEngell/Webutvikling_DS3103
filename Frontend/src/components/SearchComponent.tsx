import React, { useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import BurgerApiService from '../services/BurgerApiService'
import { useBurgerContext } from '../contexts/BurgerContextProvider'

const SearchComponent: React.FC = () => {

    const {updateSearchResult, allBurgers} = useBurgerContext()
    const [searchName, setSearchName] = useState('')
    const [searchId, setSearchId] = useState<number>(0)


    const handleSearchNameChange = async (search: string) => {

        setSearchName(search)

        if(search == ""){
            updateSearchResult(allBurgers)
        }else{
            const result = await BurgerApiService.getBurgersByName(search)
            if(result != undefined){
                updateSearchResult(result)
            }
        }
    }

    const handleSearchByIdChange = async (id: number) => {
        
        if(Number.isNaN(id)){
            updateSearchResult(allBurgers)
        }else{
            setSearchId(id)
            const result = await BurgerApiService.getBurgerById(id)
            if(result != undefined){
                updateSearchResult([result])
            }
        }

    }

  return (
    <div className='p-3'>
       <FloatingLabel 
            controlId='searchName'
            label='Søk etter burger'
            className='mb-3'
            
          >
            <Form.Control 
                type='text' 
                placeholder=''
                value={searchName}
                onChange={(e) => handleSearchNameChange(e.target.value)}
                >
            </Form.Control>
        </FloatingLabel>


            <Row>
                <Col>
                    <FloatingLabel 
                        controlId='searcId'
                        label='Søk med id'
                        >
                        <Form.Control 
                            type='number' 
                            placeholder='sm'
                            value={searchId}
                            onChange={(e) => handleSearchByIdChange((parseInt(e.target.value)))}
                            >
                        </Form.Control>
                    </FloatingLabel>
                </Col>
                <Col>

                    <Form.Select size='lg' aria-label="sorter">
                        <option value="1">Id</option>
                        <option value="2">Pris</option>
                        <option value="3">Alfabestisk</option>
                    </Form.Select>
                </Col>
            </Row>
           

        
        
    </div>
  )
}

export default SearchComponent
