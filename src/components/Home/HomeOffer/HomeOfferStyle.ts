import { Section } from '@shared/Section';
import { breakpoint } from '@theme/breakpoints';
import { spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Container = styled(Section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;

  ${spacingY(3)};
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${spacingY(2)};
`;

export const ElementInner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  ${breakpoint('sm')`
    padding: 2rem;
    background: linear-gradient(270deg, #2c2e31 0%, rgba(44, 46, 49, 0) 100%);
  `}

  ${breakpoint('lg')`
    padding: 4rem;
  `}
`;

export const Element = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  ${spacingY(1.5, 'rem', { reversed: true })};

  ${breakpoint('sm')`
    flex-direction: row;
    border-radius: 2rem;
    overflow: hidden;
    ${spacingY(0, 'rem', { reversed: true })};
  `}

  ${breakpoint('sm')`
    &:nth-child(odd) {
      ${ElementInner} {
        margin-right: -1px;
      }
    }
  
    &:nth-child(even) {
      flex-direction: row-reverse;
  
      ${ElementInner} {
        background: linear-gradient(90deg, #2c2e31 0%, rgba(44, 46, 49, 0) 100%);
        margin-left: -1px;
      }
    }
  `}

  svg {
    max-height: 21rem;
    max-width: 20rem;
    display: flex;
    margin: -1px;

    ${breakpoint('xs', 'sm')`
      border-radius: 2rem;
      margin: auto;
    `}

    ${breakpoint('sm')`
      height: 100%;
      width: 100%;
    `}
  }
`;

export const ElementTitle = styled.h3`
  text-align: left;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 500;
  margin: 0;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  ${breakpoint('xs', 'sm')`
    text-align: center;
    width: 100%;
    font-size: 1.25rem;
  `};

  ${breakpoint('lg')`
     font-size: 1.5rem;
  `}
`;
