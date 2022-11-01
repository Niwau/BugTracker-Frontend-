import styled from 'styled-components'

export const Textarea = styled.textarea`
  resize: none;
  outline: none;
  border-radius: 0.5rem;
  border: 1px solid var(--dark-600);
  padding: 1rem;
  font-family: 'Inter', sans-serif;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`
export const ModalFooter = styled.footer`
  display: flex;
  gap: 0.5rem;
`