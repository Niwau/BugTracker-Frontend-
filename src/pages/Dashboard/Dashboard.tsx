import { Login } from "../Login"
import { Menu } from "../../components/Molecules/Menu/Menu"
import * as S from './Dashboard.styles'
import { useDashboard } from "./useDashboard"
import { Bug } from "../../components/Molecules/Bug/Bug"

export const Dashboard = () => {

  const { auth, bugs } = useDashboard()

  const BugList = bugs.map((bug, index) => <Bug key={index} title={bug.title} author={bug.author.name} status={bug.status}/>)

  return !auth ? <Login/> : (
    <S.Layout>
      <Menu/>
      <S.BugsWrapper>
        {BugList}
      </S.BugsWrapper>
    </S.Layout>
  )
}