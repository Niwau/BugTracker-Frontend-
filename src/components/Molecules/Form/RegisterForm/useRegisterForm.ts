import { api } from './../../../../services/api';
import { toast } from 'react-toastify';
import { registerSchema } from "./../formSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export interface Data {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const useRegisterForm = () => {
  
  const navigate = useNavigate()

  const formConfig = { resolver: yupResolver(registerSchema) }

  const { register, handleSubmit, formState: { errors }, setError } = useForm<Data>(formConfig);

  const onFormSubmit: SubmitHandler<Data> = async (data) => {
    try {
      await api.post('/auth/register', data)
      toast.success('You account was created!')
      navigate('/')
      
    } catch (error: any) {
      setError('email', { type: 'custom', message: error.response.data.response })
    }
  }

  return { register, handleSubmit, errors, onFormSubmit }
}
