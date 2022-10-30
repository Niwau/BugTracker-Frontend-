import { Login } from "../Login"
import { Menu } from "../../components/Molecules/Menu/Menu"
import * as S from './Dashboard.styles'
import { useDashboard } from "./useDashboard"
import { Bug } from "../../components/Molecules/Bug/Bug"
import { OutlineButton } from "../../components/Atoms/Button/OutlineButton"
import { Select } from "../../components/Atoms/Select/Select"
import { Modal } from "../../components/Molecules/Modal/Modal"
import { CreateBugModal } from "../../components/Molecules/CreateBugModal/CreateBugModal"

export const Dashboard = () => {

  const { auth, bugs } = useDashboard()

  const BugList = bugs.map((bug, index) => <Bug key={index} title={bug.title} author={bug.author.name} status={bug.status}/>)

  return !auth ? <Login/> : (
    <S.Layout>
      <Menu/>
      <CreateBugModal/>
      <S.BugsWrapper>
        { BugList }
        <S.ButtonsWrapper>
          <OutlineButton>Report new bug</OutlineButton>
          <div>
            <Select></Select>
            <Select></Select>
          </div>
        </S.ButtonsWrapper>
      </S.BugsWrapper>
    </S.Layout>
  )
}