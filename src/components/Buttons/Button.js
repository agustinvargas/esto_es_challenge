import React from 'react';
import { Button as ButtonMUI } from '@mui/material';

const Button = ({ label }) => {
  return (
    <ButtonMUI
      variant='contained'
      disableElevation
      sx={{
        padding: '8px 16px',
        background: '#F5222D',
        borderRadius: '4px',
        textTransform: 'none',
        height: '40px',
        fontSize: '16px',
        fontWeight: '400',
      }}
    >
      {label}
    </ButtonMUI>
  );
};

export default Button;
