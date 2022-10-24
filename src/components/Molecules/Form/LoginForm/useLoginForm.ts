import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { AuthContext } from "./../../../../contexts/AuthContext";
import { useContext } from "react";
import { loginSchema } from "./../formSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie';

export interface Data {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  
  const { handleAuth } = useContext(AuthContext);

  const navigate = useNavigate()

  const formConfig =  { resolver: yupResolver(loginSchema) }

  const { register, handleSubmit, formState: { errors }, setError } = useForm<Data>(formConfig);

  const onFormSubmit : SubmitHandler<Data> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', data)
      toast.success("You are logged in")
      handleAuth(true)
      Cookies.set('token', response.data.token, { expires: 3 })
      navigate('/dashboard')

    } catch (error : any) {
      setError("email", { type: 'custom', message: error.response.data.response })
    }
  }

  return { register, handleSubmit, errors, onFormSubmit };
};
