import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";

interface AuthContextProps {
  auth: boolean
  handleAuth: (status: boolean) => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider = ({ children } : { children: React.ReactNode }) => {

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      setAuth(true)
    } else {
      setAuth(false)
    }

  }, [])

  function handleAuth(status: boolean) {
    setAuth(status)
  }

  return (
    <AuthContext.Provider value={{ auth, handleAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }