import styled from 'styled-components';

export const OutlineButton = styled.button`
  background: white;
  color: var(--blue-900);
  border: 1px solid var(--blue-900);
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 0.5rem;
  padding: 0.9rem;
  transition: 0.5s;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: var(--blue-900);
    color: white;
  }

`
