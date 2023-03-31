import { DefaultTheme } from 'styled-components';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  fontFamily: {
    primary: 'Inter',
  },
  fontWeight: {
    primary: {
      medium: 500,
      bold: 700,
    },
  },
  colors: {
    primary: '#2773BA',
    gray: '#2C2E31',
    light: 'rgba(255,255,255,0.9)',
  },
  breakpoints,
};

export default theme;
