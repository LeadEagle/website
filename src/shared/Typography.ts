import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 700;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryAccent};
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 300;
`;
