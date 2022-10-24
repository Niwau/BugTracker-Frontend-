import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Anchor = styled(Link)`
  text-decoration: none;
`
export const Wrapper = styled.div`
  background-color: red;
  padding: 1.6rem;
  background-color: white;
  width: 100%;
  height: 100%;
  border: 1px solid var(--dark-600);
  border-radius: 0.5rem;
  transition: 0.3s;

  :hover {
    box-shadow: 0px 1px 15px rgba(0,0,0,0.05);
  }

`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--dark-900);
`
export const Status = styled.h3`
  font-size: 1.3rem;
  color: var(--dark-700);
  font-weight: 300;
`
export const StatusWrapper = styled.div`
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`

export const Author = styled.p`
  margin-top: 3.5rem;
  font-weight: 300;
  font-size: 1.3rem;
  color: var(--dark-800);
`