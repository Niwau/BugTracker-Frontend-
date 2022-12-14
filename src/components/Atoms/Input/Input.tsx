import styled from 'styled-components';

export const Input = styled.input`
  font-family: 'Inter', sans-serif;
  display: block;
  height: 3.4rem;
  padding: 0 1rem;
  outline: none;
  border: 1px solid var(--dark-600);
  border-radius: 0.5rem;
  transition: 0.3s;
  :focus {
    border-color: var(--blue-900);
  }
`;
