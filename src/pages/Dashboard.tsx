import styled from "styled-components"
import { OutlineButton } from "../components/Atoms/Button/OutlineButton"
import { Select } from "../components/Atoms/Select/Select"
import { Bug } from "../components/Molecules/Bug/Bug"

export const Dashboard = () => {

  return (
    <Layout>
      <Bug title="Error at homepage" status="Solved" author="John Lennon"/>
      <Bug title="Error at homepage" status="Solved" author="John Lennon"/>
      <Bug title="Error at homepage" status="Solved" author="John Lennon"/>
      <Bug title="Error at homepage" status="Solved" author="John Lennon"/>
      <Bug title="Error at homepage" status="Solved" author="John Lennon"/>
      <Bug title="Error at homepage" status="Solved" author="John Lennon"/>
      <Bug title="Error at homepage" status="Solved" author="John Lennon"/>
      <Bug title="Error at homepage" status="Solved" author="John Lennon"/>
      <Bug title="Error at homepage" status="Solved" author="John Lennon"/>
      <Bug title="Error at homepage" status="Solved" author="John Lennon"/>
      <OutlineButton>Report new bug</OutlineButton>
      <div>
        <Select>
        </Select>
        <Select>
        </Select>
      </div>
    </Layout>
  )
}

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 7.2rem 20vw;
  gap: 1.6rem;

  > div {
    display: flex;
    gap: 1.6rem;
  }
`