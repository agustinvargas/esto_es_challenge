import React from 'react';
import { InputLabel as InputLabelMUI } from '@mui/material';

const InputLabel = ({ label }) => {
  return (
    <InputLabelMUI
      sx={{ fontSize: '14px', lineHeight: '22px', color: '#262626' }}
      htmlFor={label}
    >
      {label}
    </InputLabelMUI>
  );
};

export default InputLabel;
