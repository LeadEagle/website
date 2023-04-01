import { spacingX } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.lg}px;
  width: 100%;
  margin: auto;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 3rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ContactLinkIconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;

  ${({ theme }) => {
    const filterColor = transparentize(0.67, theme.colors.primary);

    return css`
      filter: drop-shadow(0px 0px 16px ${filterColor})
        drop-shadow(0px 0px 128px ${filterColor});
    `;
  }}
`;

export const ContactLinkTitle = styled.div`
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.66;
  font-size: 1.5rem;
  font-weight: 500;
  transition: 0.2s ease-in-out;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;

  ${spacingX(1)};

  &:hover {
    ${ContactLinkTitle} {
      opacity: 1;
    }
  }
`;
