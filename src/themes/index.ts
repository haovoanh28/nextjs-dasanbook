'use client';
import { Roboto, Montserrat  } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const monserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: monserrat.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: 'red',
          }),
        }),
      },
    },
  },
});

export default theme;
