import { StyledBox } from "./Box.styles";

export interface BoxProps {
  children: React.ReactNode;
  padding: string
}

export const Box = (props : BoxProps) => {
  return (
    <StyledBox {...props}/>
  )
};
