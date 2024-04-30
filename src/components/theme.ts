import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}


export const lightTheme = extendTheme({
  colors: {
    primary: {
      500: '#ffffff', // White for primary (background) in light theme
    },
    secondary: {
      500: '#D13232', // Darker gray for secondary in light theme
    },
    tertiary: {
      500: '#FFFBE8', // Darker gray for tertiary in light theme
    },
  },
});
export const darkTheme = extendTheme({
  colors: {
    primary: {
      500: '#FFFBE8'
    },
    secondary: {
      500: '#D13232'
    },
    tertiary: {
      500: '#1D1D1D'
    }
  },
});


export default darkTheme;
