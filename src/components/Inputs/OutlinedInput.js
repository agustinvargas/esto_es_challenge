import React from 'react';
import { OutlinedInput as OutlinedInputMUI } from '@mui/material';

const OutlinedInput = ({ id, value, helperText, handleChange, handleBlur }) => {
  return (
    <OutlinedInputMUI
      fullWidth
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      sx={{
        borderColor: '#D9D9D9',
        borderRadius: '4px',
        height: '40px',
        color: '#595959',
        fontSize: '16px',
      }}
      id={id}
      aria-describedby={helperText}
    />
  );
};

export default OutlinedInput;
