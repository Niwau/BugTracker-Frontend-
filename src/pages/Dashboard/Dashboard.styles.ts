import styled from 'styled-components';

export const Layout = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 80vw;
  height: 90vh;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  padding: 3.2rem 6.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3.2rem;
  overflow: auto;
`

export const BugsWrapper = styled.main`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
`