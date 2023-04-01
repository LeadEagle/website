import { spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Container = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.lg}px;
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
  padding: 4rem;
  align-items: center;

  background: linear-gradient(270deg, #2c2e31 0%, rgba(44, 46, 49, 0) 100%);
`;

export const Element = styled.article`
  display: flex;
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;

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

  svg {
    height: 100%;
    width: auto;
    max-height: 20rem;
    display: flex;
    margin: -1px;
  }
`;

export const ElementTitle = styled.h3`
  text-align: left;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 500;
  margin: 0;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;
