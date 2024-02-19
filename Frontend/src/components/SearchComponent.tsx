import React, { useState } from 'react'
import { Col, Dropdown, FloatingLabel, Form, Row } from 'react-bootstrap'
import BurgerApiService from '../services/BurgerApiService'
import { useBurgerContext } from '../contexts/BurgerContextProvider'

const SearchComponent: React.FC = () => {

    const {updateSearchResult, allBurgers, searchResult} = useBurgerContext()
    const [searchName, setSearchName] = useState('')
    const [searchId, setSearchId] = useState<number>(0)
    const [selectedOption, setSelectedOption] = useState<string>('')


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

    function handleDropdownSelect(option: string): void {
        setSelectedOption(option)
        let sortedBurgers = [...searchResult]
        switch(option){
            case "id": {
                sortedBurgers.sort((a, b) => {
                    if (a.id && b.id) {
                        return a.id - b.id; // Sort by id
                    }
                    return 0;
                });
                break;
            }
            case "price": {
                sortedBurgers.sort((a, b) => {
                    if (a.price && b.price) {
                        return a.price - b.price; // Sort by price
                    }
                    return 0;
                });
                break;
            }
            case "name": {
                sortedBurgers.sort((a, b) => {
                    if (a.name && b.name) {
                        return a.name.localeCompare(b.name); // Sort by name
                    }
                    return 0;
                });
                break;
            }
        }
        updateSearchResult(sortedBurgers)
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

                <Col className='mb-3'>
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
                <Col>
                <Dropdown>
                        <Dropdown.Toggle variant="dark" className='w-100' id="dropdown-basic">
                            {selectedOption ? selectedOption : 'Sort by:'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleDropdownSelect('id')}>Id</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDropdownSelect('price')}>Price</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDropdownSelect('name')}>Name</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
    </div>
  )
}

export default SearchComponent
