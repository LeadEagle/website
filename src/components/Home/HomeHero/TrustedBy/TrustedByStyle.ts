import { spacingX } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Container = styled.section`
  opacity: 0.25;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  ${spacingX(2)};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  ${spacingX(2)};
`;

export const CompanyLogo = styled.img`
  height: 2rem;
  width: auto;
  display: block;
`;

export const CompanyLink = styled.a``;
