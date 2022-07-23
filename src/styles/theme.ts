import { extendTheme } from '@chakra-ui/react';

const colors = {
  yellow: '#FFBA08',
  black: '#000000',
  blueGray: '#47585B',
  gray: '#999999',
  white: '#FFFFFF',
  veryLightGray: '#F5F8FA',
  lightGrayy: '#DADADA',
};

const fonts = {
  heading: 'Poppins',
  body: 'Poppins',
};

const styles = {
  global: {
    body: {
      bg: 'white',
      color: 'blueGray',
      boxSizing: 'border-box',
      overflowX: 'hidden',
    },
  },
};

export const theme = extendTheme({ styles, colors, fonts });
