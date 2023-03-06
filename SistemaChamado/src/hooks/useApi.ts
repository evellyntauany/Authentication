import axios  from 'axios'


export function setupAPIClient(){
    const TOKEN_KEY = "@token";
const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  })
  api.interceptors.request.use(async config => {
    const token = TOKEN_KEY
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  

  return api;
}
