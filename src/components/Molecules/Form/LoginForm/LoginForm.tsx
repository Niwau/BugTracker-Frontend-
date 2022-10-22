import * as S from "./LoginForm.styles";
import { Button } from "../../../Atoms/Button/Button";
import { Input } from "../../../Atoms/Input/Input";

export const LoginForm = () => {
  return (
    <S.Form>
      <S.Title>Sign in</S.Title>
      <S.Blockquote>
        <S.Label htmlFor="email">Email</S.Label>
        <Input id="email"/>
      </S.Blockquote>
      <S.Blockquote>
        <S.Label htmlFor="password">Password</S.Label>
        <Input id="password" type="password"/>
      </S.Blockquote>
      <Button>Sign in</Button>
      <S.Paragraph>Don't have an account? <S.Anchor to={'/register'}>Create account</S.Anchor></S.Paragraph>
    </S.Form>
  );
};
