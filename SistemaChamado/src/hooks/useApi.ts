import axios from "axios";
import { User } from "../types/User";

const api = axios.create({
    baseURL:process.env.REACT_APP_API
})

const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  
    

export const useApi = () => ({
    validateToken: async (token:string) =>{
        const response = await api.post('/validate',{token});
        return response.data;
    },
    register:async(user:User)=>{
        axios.post('http://localhost:3030/cadastrar', user, config)
        .then(() => {
            return true
        }).catch((error) =>{
           console.log( error)
           return false
        });
    },
    signin:async(email:string,password:string)=>{
        const response = await api.post('http://localhost:3030/signin',
        {
            email,password
        })
        return response.data;
    },
    logout:async()=>{
        const response = await api.post('/logout');
        return response.data
    }
})