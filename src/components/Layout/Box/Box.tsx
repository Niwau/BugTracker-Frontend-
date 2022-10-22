import styled, { css } from "styled-components";

export interface BoxProps {
  children: React.ReactNode;
  padding: string
}

export const Box = (props : BoxProps) => {
  return (
    <StyledBox {...props}/>
  )
};

const StyledBox = styled.div<BoxProps>`
  width: fit-content;
  border: 1px solid var(--dark-700);
	border-radius: 0.5rem;
	background-color: white;
	padding: ${ props => props.padding };
`;