import { Login } from "../Login"
import { Menu } from "../../components/Molecules/Menu/Menu"
import * as S from './Dashboard.styles'
import { useDashboard } from "./useDashboard"
import { Bug } from "../../components/Molecules/Bug/Bug"
import { OutlineButton } from "../../components/Atoms/Button/OutlineButton"
import { Select } from "../../components/Atoms/Select/Select"
import { useState } from "react"
import { Modal } from "../../components/Molecules/Modal/Modal"

export const Dashboard = () => {

  const { auth, bugs } = useDashboard()

  const [isVisible, setIsVisible] = useState(false)

  const BugList = bugs.map((bug, index) => <Bug key={index} title={bug.title} author={bug.author.name} status={bug.status}/>)

  return !auth ? <Login/> : (
    <S.Layout>
      <Menu/>
      <Modal isVisible={isVisible} toggleModal={() => setIsVisible(prevState => !prevState)}>
        <h1>Olá</h1>
      </Modal>
      <S.BugsWrapper>
        { BugList }
        <S.ButtonsWrapper>
          <OutlineButton onClick={() => setIsVisible(true)}>Report new bug</OutlineButton>
          <div>
            <Select></Select>
            <Select></Select>
          </div>
        </S.ButtonsWrapper>
      </S.BugsWrapper>
    </S.Layout>
  )
}