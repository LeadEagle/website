import styled from 'styled-components';

export const Section = styled.section`
  max-width: calc(${({ theme }) => theme.breakpoints.lg}px + 4rem);
  padding: 2rem;
`;
