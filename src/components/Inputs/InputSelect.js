import React from 'react';
import { Select, MenuItem, Box, FormHelperText } from '@mui/material';
import InputLabel from './InputLabel';

const InputSelect = ({
  label,
  handleBlur,
  options,
  handleChange,
  value,
  id,
  helperText,
}) => {
  return (
    <Box id={id} sx={{ marginBottom: '16px' }}>
      <InputLabel label={label} />
      <Select
        sx={{
          borderColor: '#D9D9D9',
          borderRadius: '4px',
          height: '40px',
          color: '#595959',
          fontSize: '16px',
        }}
        onBlur={handleBlur}
        labelId={label}
        fullWidth
        id={id}
        value={value}
        onChange={handleChange}
        name={id}
      >
        <MenuItem value='' disabled>
          Choose an option
        </MenuItem>
        {options?.source?.length > 0 &&
          options?.source?.map(option => (
            <MenuItem key={option[options.id]} value={option[options.id]}>
              {option[options.label]}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText id={id}>{helperText}</FormHelperText>
    </Box>
  );
};

export default InputSelect;
