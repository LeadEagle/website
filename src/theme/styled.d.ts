import 'styled-components';
import breakpoints from './breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: Record<'primary', 'Inter'>;
    fontWeight: {
      primary: {
        medium: number;
        bold: number;
      };
    };
    colors: Record<string, string>;
    breakpoints: typeof breakpoints;
  }
}
