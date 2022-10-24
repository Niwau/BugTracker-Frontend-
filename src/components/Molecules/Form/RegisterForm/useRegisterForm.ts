import { toast } from 'react-toastify';
import { registerSchema } from "./../formSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const useRegisterForm = () => {

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    setError 
  } = useForm<RegisterFormData>({ resolver: yupResolver(registerSchema) });

  const navigate = useNavigate()

  const onFormSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    axios.post("http://localhost:3000/auth/register", data)
    .then(() => {
      toast.success('You account was created!')
      navigate('/')
    })
    .catch(err => setError('email', { type: 'custom', message: err.response.data.response })
  )}

  const onFormError: SubmitErrorHandler<RegisterFormData> = (errors) => {
  
  };

  return { register, handleSubmit, errors, onFormSubmit, onFormError };
};
