import axios from "axios"
import Cookies from "js-cookie"

export const useFetch = async (endpoint : string) => {
  const data = axios.get(endpoint, { headers: { authorization: Cookies.get('token') } })
  return data
}