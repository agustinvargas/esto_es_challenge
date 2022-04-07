import React from 'react';
import { Select, MenuItem, Box } from '@mui/material';
import InputLabel from './InputLabel';

const InputSelect = ({ label, placeholder }) => {
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ marginBottom: '16px' }}>
      <InputLabel label={label} />
      <Select
        sx={{
          borderColor: '#D9D9D9',
          borderRadius: '4px',
          height: '40px',
          color: '#595959',
          fontSize: '16px',
        }}
        // multiple
        displayEmpty
        labelId={label}
        fullWidth
        value={age}
        onChange={handleChange}
        renderValue={value => (value !== '' ? value : placeholder)}
      >
        <MenuItem value='' disabled>
          Choose an option
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </Box>
  );
};

export default InputSelect;
