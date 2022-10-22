import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode
  href?: string
}

export const Button = (props: ButtonProps) => {
  const tag = props.href ? "a" : "button";

  return (
    <Wrapper as={tag} {...props} />
  )
}

export const Wrapper = styled.button`
  background-color: var(--blue-900);
  border: none;
  font-family: "Inter";
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
