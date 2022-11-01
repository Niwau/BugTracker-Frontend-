import { Button } from "../../../Atoms/Button/Button";
import { Input } from "../../../Atoms/Input/Input";
import * as S from "../Form.styles";
import { useRegisterForm } from "./useRegisterForm";

export const RegisterForm = () => {

  const { errors, handleSubmit, onFormSubmit, register} = useRegisterForm()

  return (
    <S.Form onSubmit={handleSubmit(onFormSubmit)}>
      <S.Title>Sign up</S.Title>
      <S.InputGroup>
        <S.Label htmlFor="name">Name</S.Label>
        <Input id="name" {...register('name')}/>
        <S.InputErrors>{errors.name?.message}</S.InputErrors>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="email">Email</S.Label>
        <Input id="email" {...register('email')}/>
        <S.InputErrors>{errors.email?.message}</S.InputErrors>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="password">Password</S.Label>
        <Input id="password" type={'password'} {...register('password')}/>
        <S.InputErrors>{errors.password?.message}</S.InputErrors>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="password">Confirm password</S.Label>
        <Input id="confirm-password" type={'password'} {...register('passwordConfirm')}/>
        <S.InputErrors>{errors.passwordConfirm?.message}</S.InputErrors>
      </S.InputGroup>
      <Button>Sign in</Button>
      <S.Paragraph>Don't have an account? <S.Anchor to={'/'}>Login</S.Anchor></S.Paragraph>
    </S.Form>
  );
};
