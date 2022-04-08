import { Box } from '@mui/material';
import React from 'react';
import ProjectDate from './ProjectDate';
import ProjectName from './ProjectName';

const ProjectInfo = ({ name, date }) => {
  return (
    <Box>
      <ProjectName name={name} />
      <ProjectDate date={date} />
    </Box>
  );
};

export default ProjectInfo;
