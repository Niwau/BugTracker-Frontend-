import styled from 'styled-components';

interface InputProps {
  type?: 'email' | 'password'
}

export const Input = ({ type } : InputProps) => {
  return (
    <Wrapper type={type}/>
  )
}

const Wrapper = styled.input`
  display: block;
  height: 3.4rem;
  padding: 0 1rem;
  outline: none;
  border: 1px solid var(--dark-700);
  border-radius: 0.5rem;
  transition: 0.3s;
  :focus {
    border-color: var(--blue-900);
  }
`;
