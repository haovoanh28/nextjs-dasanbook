'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

export default function TestPage() {
   const theme = useTheme();

   return (
      <Container>
         <Typography variant="body1" gutterBottom>wtf</Typography>
         <div>haha</div>
      </Container>
   )
}

