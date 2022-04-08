import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Nav from '../Navigation/Nav';

const Header = () => {
  return (
    <Box
      sx={{
        marginBottom: '16px',
        background: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          background: '#FFFFFF',
          padding: { xs: '4px 16px', md: '4px 48px' },
          height: { xs: '40px', md: '56px' },
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
      <Divider />
      <Nav />
    </Box>
  );
};

export default Header;
