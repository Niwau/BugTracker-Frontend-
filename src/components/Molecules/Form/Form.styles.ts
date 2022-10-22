import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 6.4rem 3.2rem;
  border-radius: 1rem;
  border: 1px solid var(--dark-700);
  width: 43.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  color: var(--blue-900);
  font-weight: 900;
`;

export const Label = styled.label`
  color: var(--dark-800);
  font-weight: 500;
  font-size: 1.2rem;
`;

export const Anchor = styled(Link)`
  color: var(--blue-900);
  text-decoration: none;
  font-size: 1.2rem;
`;

export const Paragraph = styled.p`
  color: var(--dark-800);
  font-size: 1.2rem;
`;

export const Blockquote = styled.blockquote`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputErrors = styled.p`
  color: red;
	font-size: 1rem;
`;
