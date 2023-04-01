import { breakpoint } from '@theme/breakpoints';
import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 700;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${breakpoint('lg')`
    font-size: 2rem;
  `}
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryAccent};
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 300;
`;
