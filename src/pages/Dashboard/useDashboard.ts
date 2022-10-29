import { API_ENDPOINT } from './../../services/api';
import { useFetch } from './../../hooks/useFetch';
import { useState, useEffect } from 'react';
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Bug } from '../../@types/Bug';

export const useDashboard = () => {
  const { auth } = useContext(AuthContext)
  const [ bugs, setBugs ] = useState<Bug[]>([] as Bug[])

  useEffect(() => {
  //fazer requisição a api com axios e tirar o hook de useFetch para usar com a instância padrão do axios.
  }, [])

  return { bugs, auth }
}