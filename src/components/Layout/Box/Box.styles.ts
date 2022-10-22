import styled from "styled-components";
import { BoxProps } from "./Box";

export const StyledBox = styled.div<BoxProps>`
	width: fit-content;
  border: 1px solid var(--dark-700);
	border-radius: 0.5rem;
	background-color: white;
	padding: ${({ padding }) => padding };
`;