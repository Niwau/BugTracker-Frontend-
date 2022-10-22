import * as S from "../Form.styles";
import { Button } from "../../../Atoms/Button/Button";
import { Input } from "../../../Atoms/Input/Input";
import { useLoginForm } from "./useLoginForm";

export const LoginForm = () => {
  const { errors, handleSubmit, register, onFormSubmit, onFormError } = useLoginForm();

  return (
    <S.Form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
      <S.Title>Sign in</S.Title>
      <S.Blockquote>
        <S.Label htmlFor="email">Email</S.Label>
        <Input id="email" {...register("email")} />
        <S.InputErrors>{errors?.email?.message}</S.InputErrors>
      </S.Blockquote>
      <S.Blockquote>
        <S.Label htmlFor="password">Password</S.Label>
        <Input id="password" type="password" {...register("password")} />
        <S.InputErrors>{errors?.password?.message}</S.InputErrors>
      </S.Blockquote>
      <Button>Sign in</Button>
      <S.Paragraph>
        Don't have an account?{" "}
        <S.Anchor to={"/register"}>Create account</S.Anchor>
      </S.Paragraph>
    </S.Form>
  );
};
