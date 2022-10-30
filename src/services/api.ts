import axios from "axios";
import Cookies from "js-cookie";

export const API_ENDPOINT = 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'authorization': Cookies.get('token')
  }
})