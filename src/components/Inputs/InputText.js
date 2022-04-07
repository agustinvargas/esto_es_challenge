import React from 'react';
import { Box, FormHelperText } from '@mui/material';
import OutlinedInput from './OutlinedInput';
import InputLabel from './InputLabel';

const InputText = ({ label, helperText }) => {
  return (
    <Box sx={{ marginBottom: '16px' }}>
      <InputLabel label={label} />
      <OutlinedInput label={label} />
      <FormHelperText id={helperText}>{helperText}</FormHelperText>
    </Box>
  );
};

export default InputText;
