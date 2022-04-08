import { Avatar, Box } from '@mui/material';
import React from 'react';

const Person = ({ avatar, name }) => {
  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      {avatar && name ? (
        <Avatar alt={name} src={avatar} sx={{ width: 24, height: 24 }} />
      ) : (
        name &&
        !avatar && (
          <Avatar
            alt={name}
            sx={{ width: 24, height: 24 }}
            {...stringAvatar(name)}
          />
        )
      )}

      <span>{name}</span>
    </Box>
  );
};

export default Person;
