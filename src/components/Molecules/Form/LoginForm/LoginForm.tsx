import * as S from "../Form.styles";
import { Button } from "../../../Atoms/Button/Button";
import { Input } from "../../../Atoms/Input/Input";
import { useLoginForm } from "./useLoginForm";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Dashboard } from "../../../../pages/Dashboard/Dashboard";

export const LoginForm = () => {

  const { errors, handleSubmit, register, onFormSubmit } = useLoginForm();

  const { auth } = useContext(AuthContext)

  return !auth ? (
    <S.Form onSubmit={handleSubmit(onFormSubmit)}>
      <S.Title>Sign in</S.Title>
      <S.InputGroup>
        <S.Label htmlFor="email">Email</S.Label>
        <Input id="email" {...register("email")} />
        <S.InputErrors>{errors?.email?.message}</S.InputErrors>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="password">Password</S.Label>
        <Input id="password" type="password" {...register("password")} />
        <S.InputErrors>{errors?.password?.message}</S.InputErrors>
      </S.InputGroup>
      <Button>Sign in</Button>
      <S.Paragraph>
        Don't have an account?{" "}
        <S.Anchor to={"/register"}>Create account</S.Anchor>
      </S.Paragraph>
    </S.Form>
  ) 
  : <Dashboard/>
};
