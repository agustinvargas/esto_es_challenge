import { Typography } from '@mui/material';
import React from 'react';

const ProjectDate = ({ date }) => {
  return (
    <Typography
      component='small'
      sx={{
        color: 'rgba(0, 0, 0, 0.45)',
        fontSize: '10px',
        lineHeight: '16px',
      }}
    >
      {date}
    </Typography>
  );
};

export default ProjectDate;
