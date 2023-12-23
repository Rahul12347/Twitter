import axios from "axios";

export const API_BASE_URL = 'https://twitter-server-production-9db4.up.railway.app/';
const jwt = localStorage.getItem("jwt")
export const api = axios.create({
  baseURL: API_BASE_URL, 
  headers: {
    'Authorization':`Bearer ${jwt}`,
    'Content-Type': 'application/json',
  },
});

// Assuming you have the JWT token stored in a variable called jwtToken

