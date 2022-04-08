import React from 'react';
import { Box, FormHelperText } from '@mui/material';
import OutlinedInput from './OutlinedInput';
import InputLabel from './InputLabel';

const InputText = ({
  label,
  helperText,
  id,
  handleChange,
  value,
  handleBlur,
}) => {
  return (
    <Box sx={{ marginBottom: '16px' }}>
      <InputLabel label={label} />
      <OutlinedInput
        id={id}
        helperText={helperText}
        handleChange={handleChange}
        handleBlur={handleBlur}
        value={value}
      />
      <FormHelperText id={id}>{helperText}</FormHelperText>
    </Box>
  );
};

export default InputText;
