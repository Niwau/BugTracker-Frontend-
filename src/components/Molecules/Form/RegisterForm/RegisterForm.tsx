import { Button } from "../../../Atoms/Button/Button";
import { Input } from "../../../Atoms/Input/Input";
import * as S from "../LoginForm/LoginForm.styles";

export const RegisterForm = () => {
  return (
    <S.Form>
      <S.Title>Sign up</S.Title>
      <S.Blockquote>
        <S.Label htmlFor="name">Name</S.Label>
        <Input id="name"/>
      </S.Blockquote>
      <S.Blockquote>
        <S.Label htmlFor="email">Email</S.Label>
        <Input id="email"/>
      </S.Blockquote>
      <S.Blockquote>
        <S.Label htmlFor="password">Password</S.Label>
        <Input id="password"/>
      </S.Blockquote>
      <Button>Sign in</Button>
      <S.Paragraph>Don't have an account? <S.Anchor to={'/'}>Login</S.Anchor></S.Paragraph>
    </S.Form>
  );
};
