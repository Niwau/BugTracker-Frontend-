import { useState, useEffect } from 'react';
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Bug } from '../../@types/Bug';
import { api } from '../../services/api';

export const useDashboard = () => {
  const { auth } = useContext(AuthContext)
  const [ bugs, setBugs ] = useState<Bug[]>([] as Bug[])

  useEffect(() => {
    api.get('/api/bugs')
    .then(res => setBugs(res.data))
  }, [])

  return { bugs, auth }
}