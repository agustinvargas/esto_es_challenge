import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const Person = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <Avatar
        alt='Remy Sharp'
        src='/static/images/avatar/1.jpg'
        sx={{ width: 24, height: 24, marginTop: { xs: '4px', md: '0' } }}
      />
      <span>Ignacio Truffa</span>
    </Box>
  );
};

export default Person;
