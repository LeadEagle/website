import { breakpoint } from '@theme/breakpoints';
import { spacingX, spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Container = styled.section`
  opacity: 0.25;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-direction: column;
  ${spacingY(1.5)};

  ${breakpoint('sm')`
    padding: 2rem;
  `}

  ${breakpoint('lg')`
    flex-direction: row;
    ${spacingX(2)};
    ${spacingY(0)};
  `}
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 700;

  ${breakpoint('sm')`
    font-size: 1.5rem;
  `}
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CompanyLogo = styled.img`
  height: 1rem;
  width: auto;
  display: block;

  ${breakpoint('sm')`
    height: 2rem;
  `}
`;

export const CompanyLink = styled.a``;
