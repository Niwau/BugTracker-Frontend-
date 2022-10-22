import { registerSchema } from './../formSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { useForm } from 'react-hook-form'

export interface RegisterFormData {
	name: string,
  email: string;
  password: string;
	passwordConfirm: string
}

const onFormSubmit: SubmitHandler<RegisterFormData> = (data) => {
  console.log(data);
};

const onFormError: SubmitErrorHandler<RegisterFormData> = (errors) => {
  console.log(errors);
};

export const useRegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
      resolver: yupResolver(registerSchema),
    });

    return { register, handleSubmit, errors, onFormSubmit, onFormError };
}
