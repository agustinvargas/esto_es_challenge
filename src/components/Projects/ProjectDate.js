import { Typography } from '@mui/material';
import React from 'react';

const ProjectDate = () => {
  return (
    <Typography
      component='small'
      sx={{
        color: 'rgba(0, 0, 0, 0.45)',
        fontSize: '10px',
        lineHeight: '16px',
      }}
    >
      Creation date: 09/09/2020 10:30 am
    </Typography>
  );
};

export default ProjectDate;
