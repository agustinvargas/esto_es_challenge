import React from 'react';
import { OutlinedInput as OutlinedInputMUI } from '@mui/material';

const OutlinedInput = ({ label, helperText }) => {
  return (
    <OutlinedInputMUI
      fullWidth
      sx={{
        borderColor: '#D9D9D9',
        borderRadius: '4px',
        height: '40px',
        color: '#595959',
        fontSize: '16px',
      }}
      id={label}
      aria-describedby={helperText}
    />
  );
};

export default OutlinedInput;
