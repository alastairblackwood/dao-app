import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Audiowide, sans-serif',
    body: 'AudioWide, sans-serif',
  },
});

const colors = extendTheme({
  colors: {
    black: {
      100: '#f5f5f5',
      200: '#eaeaeb',
      300: '#cbcbce',
      400: '#97979c',
      500: '#2e2e3b',
      600: '#40434E',
    },
    blue: {
      100: '#F2F6FA',
      200: '#E5EEF5',
      300: '#BFD4E6',
      400: '#80A9CE',
      500: '#00539C',
      600: '#003E75',
      700: '#00294E',
    },
    gray: {
      100: '#f5f6f7',
      200: '#ebedef',
      300: '#cdd3d6',
      400: '#9ba7ad',
      500: '#37505c',
      600: '#293c45',
      700: '#1b282e',
    },
    green: {
      100: '#f4faf8',
      200: '#e8f4f1',
      300: '#c6e4db',
      400: '#8cc9b7',
      500: '#27936f',
      600: '#1b6e53',
      700: '#0f4937',
    },
    purple: {
      100: '#F9F3F9',
      200: '#F3E8F3',
      300: '#E1C5E1',
      400: '#C38BC3',
      500: '#871788',
      600: '#651166',
      700: '#430B44',
    },
    red: {
      100: '#FBF3F3',
      200: '#F7E7E6',
      300: '#EBC2C1',
      400: '#D78584',
      500: '#B00C09',
      600: '#840907',
      700: '#580604',
    },
    grey: {
      100: '#FFFFFF',
      200: '#c2c2c2',
      300: '#999999',
      400: '#7a7a7a',
      500: '#666666',
    },
  },
});

export default theme;
