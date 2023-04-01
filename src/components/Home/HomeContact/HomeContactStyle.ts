import { Section } from '@shared/Section';
import { breakpoint } from '@theme/breakpoints';
import { spacingX, spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled(Section)`
  width: 100%;
  margin: auto;
`;

export const Inner = styled.div`
  display: flex;
  padding: 2.5rem 3rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${breakpoint('xs', 'lg')`
    flex-direction: column;
    align-items: center;
    ${spacingY(2)};
  `}

  ${breakpoint('lg')`
    justify-content: space-between;
  `}
`;

export const ContactLinkIconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;

  ${breakpoint('sm')`
    font-size: 2rem;
  `}

  @supports not (-webkit-touch-callout: none) {
    ${({ theme }) => {
      const filterColor = transparentize(0.67, theme.colors.primary);

      return css`
        filter: drop-shadow(0px 0px 16px ${filterColor})
          drop-shadow(0px 0px 128px ${filterColor});
      `;
    }}
  }
`;

export const ContactLinkTitle = styled.div`
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.66;
  font-size: 1.25rem;
  font-weight: 500;
  transition: 0.2s ease-in-out;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${breakpoint('sm')`
    font-size: 1.5rem;
  `}
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  ${spacingX(1)};

  @media only screen and (max-width: 420px) {
    width: 100%;
  }

  &:hover {
    ${ContactLinkTitle} {
      opacity: 1;
    }
  }
`;
