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
       
            <Row xs={2} md={2} lg={1}>
                <Col>
                    <FloatingLabel 
                        controlId='searchName'
                        label='Søk etter burger'
                        className='mb-3 text-light'
                    >
                        <Form.Control 
                            type='text' 
                            placeholder=''
                            className='bg-dark text-light'
                            size='lg'
                            value={searchName}
                            onChange={(e) => handleSearchNameChange(e.target.value)}
                            >
                        </Form.Control>
                    </FloatingLabel>

                </Col>

                <Col>
                    <FloatingLabel 
                        controlId='searcId'
                        label='Søk med id'
                        >
                        <Form.Control 
                            type='number' 
                            placeholder='sm'
                            size='lg'
                            className='bg-dark text-light'
                            value={searchId}
                            onChange={(e) => handleSearchByIdChange((parseInt(e.target.value)))}
                            >
                        </Form.Control>
                    </FloatingLabel>
                </Col>
            </Row>
    </div>
  )
}

export default SearchComponent
