import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: white;
  width: min-content;
  padding: 3rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.02);
  border-radius: 0.5rem;
  border: 1px solid var(--dark-600);
`