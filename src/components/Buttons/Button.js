import React from 'react';
import { Button as ButtonMUI } from '@mui/material';

const Button = ({ label, icon, handleClick }) => {
  return (
    <ButtonMUI
      onClick={handleClick}
      onSubmit={handleClick}
      variant='contained'
      startIcon={icon}
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
