import { AuthContext } from "./../../../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { loginSchema } from "./../formSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from 'js-cookie'

export interface LoginFormData {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  const onFormSubmit: SubmitHandler<LoginFormData> = (data) => {
    axios
      .post("http://localhost:3000/auth/login", data)
      .then((res) => {
        alert('Sucess!')
      })
      .catch((err) =>
        setError("email", {
          type: "custom",
          message: err.response.data.response,
        })
      );
  };

  const onFormError: SubmitErrorHandler<LoginFormData> = (errors) => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  return { register, handleSubmit, errors, onFormSubmit, onFormError };
};
