import { Container } from '@mui/material';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <Container sx={{ width: { xs: '328px', md: '1096px' } }}>
      {children}
    </Container>
  );
};

export default Layout;
