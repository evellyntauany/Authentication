import axios from "axios";
import { User } from "../types/User";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

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
        const response = await api.post('/cadastrar', user, config);
        return response.data;
    },
    logando:async(email:string,password:string)=>{
        const response = await api.post('/signin',
        {
            email,password
        })
        console.log(response.data);
        return response.data;
        
    },
    logout:async()=>{
        const response = await api.post('/logout');
        return response.data
    }
})