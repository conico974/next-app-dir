import { ThemeOverride } from '@chakra-ui/react';

const base = {
  50: '#f6f6ef',
  100: '#e2e3d3',
  200: '#cdd1b6',
  300: '#b6be96',
  400: '#9fac77',
  500: '#81925d',
  600: '#63724a',
  700: '#445135',
  800: '#283120',
  900: '#0c1009',
};

const secondary = {
  50: '#ffe5ed',
  100: '#fab9ca',
  200: '#f38ba6',
  300: '#ed5e83',
  400: '#e83361',
  500: '#ce1b47',
  600: '#a11436',
  700: '#740c27',
  800: '#460517',
  900: '#1d0008',
};

export const colors: ThemeOverride['colors'] = {
  base,
  primary: base[50],
  secondary,
  primaryBlurred: `${base[50]}66`,
  text: {
    primary: base[800],
    heading: secondary[700],
    subheading: secondary[600],
  },
};
