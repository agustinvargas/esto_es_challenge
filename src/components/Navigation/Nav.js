import { Box } from '@mui/material';
import React from 'react';
import BackNav from './BackNav';
import TitleNav from './TitleNav';

const Nav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: 'inset 0px -1px 0px #D9D9D9',
        height: '40px',
      }}
    >
      <BackNav />
      <TitleNav />
    </Box>
  );
};

export default Nav;
