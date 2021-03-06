import { Typography } from '@mui/material';
import React from 'react';

const ProjectName = ({ name }) => {
  return (
    <Typography
      component='h3'
      sx={{
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: '14px',
        lineHeight: '20px',
      }}
    >
      {name}
    </Typography>
  );
};

export default ProjectName;
