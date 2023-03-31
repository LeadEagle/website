import { ValueOf } from '@typeDefs/common';
import getConfig from 'next/config';
import { DefaultTheme } from 'styled-components';

interface Font {
  type: keyof DefaultTheme['fontFamily'];
  name: ValueOf<DefaultTheme['fontFamily']>;
  path: string;
  weight: number;
}

const { publicRuntimeConfig } = getConfig();
export const BASE_PATH =
  typeof window !== 'undefined'
    ? window.location.origin
    : publicRuntimeConfig.BASE_PATH || 'https://leadeagle.pl';

export const fonts: Font[] = [
  {
    type: 'primary',
    name: 'Inter',
    path: 'Inter/Inter-Bold.ttf',
    weight: 700,
  },
  {
    type: 'primary',
    name: 'Inter',
    path: 'Inter/Inter-Medium.ttf',
    weight: 500,
  },
];

export const paths = {
  home: '/',
};

export const titleTemplate = '%s | LeadEagle';

export const Cookies = {};
