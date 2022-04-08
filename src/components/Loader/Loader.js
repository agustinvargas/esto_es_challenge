import { CircularProgress, Container } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <CircularProgress />
    </Container>
  );
};

export default Loader;
