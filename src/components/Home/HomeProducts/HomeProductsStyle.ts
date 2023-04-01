import { Section } from '@shared/Section';
import { breakpoint } from '@theme/breakpoints';
import { spacingX, spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

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
  width: 100%;

  ${breakpoint('xs', 'md')`
    flex-direction: column;
    max-width: 20rem;
    ${spacingY(2)};
  `}

  ${breakpoint('md')`
    ${spacingX(2)};
  `}
`;

export const ProductLogoWrapper = styled.div<{ shadowColor: string }>`
  background: ${({ theme }) => theme.colors.gray};
  padding: 1.5rem 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 0.2s ease-in-out;

  ${breakpoint('sm')`
    padding: 2rem 3rem;
  `}

  svg {
    height: 2rem;
    overflow: visible;

    ${breakpoint('lg')`
      height: 3rem;
    `}

    ${({ shadowColor }) => {
      const filterColor = transparentize(0.67, shadowColor);

      return css`
        path.symbol {
          filter: drop-shadow(0px 0px 16px ${filterColor})
            drop-shadow(0px 0px 128px ${filterColor});
        }
      `;
    }}
  }
`;

export const ProductTitle = styled.div`
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  padding: 0 0.5rem;
`;

export const Product = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  ${spacingY(1.5)};

  &:hover {
    ${ProductLogoWrapper} {
      filter: brightness(105%);
    }
  }
`;
