import { House, Users, SignOut } from "phosphor-react"
import * as S from './Menu.styles'

export const Menu = () => {
  return (
    <S.Wrapper>
      <S.Profile src="profile.webp" alt="Profile" />
      <House/>
      <Users/>
      <SignOut/>
    </S.Wrapper>
  )
}
