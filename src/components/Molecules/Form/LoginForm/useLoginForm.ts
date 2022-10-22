import { loginSchema } from './../formSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { useForm } from 'react-hook-form'

export interface LoginFormData {
  email: string;
  password: string;
}

const onFormSubmit: SubmitHandler<LoginFormData> = (data) => {
  console.log(data);
};

const onFormError: SubmitErrorHandler<LoginFormData> = (errors) => {
  console.log(errors);
};

export const useLoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
      resolver: yupResolver(loginSchema),
    });

    return { register, handleSubmit, errors, onFormSubmit, onFormError };
}
