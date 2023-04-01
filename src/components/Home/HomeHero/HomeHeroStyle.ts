import { spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Container = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.33);
  ${spacingY(3.5)};
`;

export const LogoWrapper = styled.div`
  svg {
    overflow: visible;
    height: 4rem;
  }

  path.symbol {
    filter: drop-shadow(0px 0px 32px rgba(39, 115, 185, 0.5))
      drop-shadow(0px 0px 250px #2773b9);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
