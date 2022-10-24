import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Context {
  auth: {
    status: boolean
    token: string
  }
  handleLogin: Function
}

export const AuthContext = createContext<Context>({} as Context);

export const AuthContextProvider = ({ children } : { children: React.ReactNode }) => {
	
  const [auth, setAuth] = useState({ status: false, token: ''})

  const handleLogin = (token : string) => {
    setAuth({ status: true, token: token })
  }

  return (
    <AuthContext.Provider value={{ auth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
