import axios from "axios";
import React from 'react'

const TestService = (
    () => {
        const testEndpoint = {
            test: "https://localhost:7130/test"
        }

        const getAllTests = async() => {
            try {
                const result = await axios.get(testEndpoint.test)
                console.log(result.data)
                return result.data;
                
            } catch (error) {
                console.log(error); 
            }
        } 

        return {
            getAllTests
        }
        
    }
    )();

export default TestService
