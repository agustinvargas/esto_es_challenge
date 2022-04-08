import { Typography } from '@mui/material';
import React from 'react';

const TitleNav = ({ title }) => {
  return (
    <Typography
      sx={{
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '32px',
        fontFamily: 'Inter',
      }}
      component='h2'
    >
      {title}
    </Typography>
  );
};

export default TitleNav;
