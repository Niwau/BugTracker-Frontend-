import styled from 'styled-components';

export const Wrapper = styled.aside`
  gap: 3.2rem;
  align-items: center;
  padding: 1.6rem;
  width: fit-content;
  height: 100%;
  outline: 1px solid var(--dark-600);
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);

  svg {
    color: var(--dark-900);
    font-size: 2rem;
  }

`;

export const Profile = styled.img`
  width: 5rem;
`