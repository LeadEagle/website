import { spacingX, spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${spacingY(1)};
`;

export const LogosWrapper = styled.div`
  display: flex;
  align-items: center;
  ${spacingX(1)};

  svg {
    height: 1rem;
  }
`;

export const Inner = styled.div`
  text-align: center;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.25;
`;
