import axios from "axios";
import React from 'react'

const BurgerApiService = (
    () => {
        const endpoints = {
            burger: "https://localhost:7130/burger"
        }

        const getAllBurgers = async() => {
            try {
                const result = await axios.get(endpoints.burger)
                console.log(result.data)
                return result.data;
                
            } catch (error) {
                console.log(error); 
            }
        } 

        return {
            getAllBurgers
        }
        
    }
    )();

export default BurgerApiService
