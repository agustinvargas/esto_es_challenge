import { Box, Typography } from '@mui/material';
import React from 'react';
import Nav from '../Navigation/Nav';

const Header = () => {
  return (
    <Box
      sx={{ marginBottom: '16px', padding: '0px 16px', background: '#FFFFFF' }}
    >
      <Box
        sx={{
          background: '#FFFFFF',
          height: '40px',
          padding: '4px 0',
          borderBottom: '1px solid #D9D9D9',
        }}
      >
        <Typography
          component='span'
          sx={{
            fontSize: '16px',
            fontFamily: 'Inter',
            fontWeight: '600',
            lineHeight: '32px',
            color: '#BDBDBD',
            textTransform: 'uppercase',
          }}
        >
          Logo
        </Typography>
      </Box>
      <Nav />
    </Box>
  );
};

export default Header;
