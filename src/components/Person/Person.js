import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const Person = ({ avatar, name }) => {
  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
        marginTop: { xs: '4px', md: 'initial' },
      }}
    >
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

      <Typography
        component='span'
        sx={{
          fontSize: '12px',
          lineHeight: '22px',
          color: 'rgba(0, 0, 0, 0.65)',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Person;
