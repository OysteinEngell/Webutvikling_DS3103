import axios from "axios";
import React from 'react'
import IBurger from "../Interfaces/IBurger";

const BurgerApiService = (
    () => {
        const endpoints = {
            burger: "https://localhost:7130/burger",
        }

        const getAllBurgers = async() => {
            try {
                const result = await axios.get(endpoints.burger)
                console.log(result.data)
                return result.data as IBurger[];

            } catch (error) {
                console.log(error)
            }
        } 

        const getBurgerById = async (id: number) => {
            try{
                const result = await axios.get(`${endpoints.burger}/${id}`)
                console.log(result.data)
                return result.data as IBurger

            }catch(error){
                console.log(error)
            }
        }

        const getBurgersByName = async (name: string) => {
            try {
                const result = await axios.get(`${endpoints.burger}/serach/${name}`)
                console.log(result.data)
                return result.data as IBurger[]
                
            } catch (error) {
                console.log(error)
            }
        }

        const postBurger = async (burger: IBurger ) => {
            try {
                const result = await axios.post(endpoints.burger, burger)
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        }

        const updateBurger = async (burger: IBurger) => {
            try {
                const result = await axios.put(endpoints.burger, burger)
                console.log(result)
            } catch (error) {
                
            }
        }

        const deleteBurger = async (id: number) => {
            try {
                const result = await axios.delete(`${endpoints.burger}/${id}`)
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        }

        return {
            getAllBurgers,
            getBurgerById,
            getBurgersByName,
            postBurger,
            updateBurger,
            deleteBurger
        }
        
    }
    )();

export default BurgerApiService
