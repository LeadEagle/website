import { breakpoint } from '@theme/breakpoints';
import { spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, #111213, #111213),
    linear-gradient(
      296.02deg,
      rgba(19, 25, 31, 0.25) 19.18%,
      rgba(53, 65, 76, 0.25) 107.74%
    ),
    #111213;
  background: radial-gradient(
      44.86% 56.08% at 17.5% 53.03%,
      rgba(38, 89, 137, 0.1) 0%,
      rgba(39, 115, 185, 0) 100%
    ),
    radial-gradient(
      44.86% 56.08% at 17.5% 53.03%,
      rgba(38, 89, 137, 0.1) 0%,
      rgba(39, 115, 185, 0) 100%
    ),
    radial-gradient(
      47.94% 54.36% at 95.3% 85.7%,
      rgba(38, 89, 137, 0.1) 0%,
      rgba(39, 115, 185, 0) 100%
    ),
    #111213;

  ${spacingY(3)};
  padding-bottom: 3rem;

  ${breakpoint('md')`
    ${spacingY(6)};
  `}
`;
