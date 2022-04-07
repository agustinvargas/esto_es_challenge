import { Container } from '@mui/material';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <Container sx={{ padding: { xs: '0px 16px' } }} fluid>
      {children}
    </Container>
  );
};

export default Layout;
