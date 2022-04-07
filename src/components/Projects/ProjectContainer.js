import { Box } from '@mui/system';
import React from 'react';
import MenuOpen from '../MenuOpen/MenuOpen';
// import MenuOpenIcon from '../Icons/MenuOpenIcon';
import Person from '../Person/Person';
import ProjectDate from './ProjectDate';
import ProjectName from './ProjectName';

const ProjectContainer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        padding: '0 16px',
        backgroundColor: '#fff',
      }}
    >
      <Box
        sx={{ diplay: 'flex', flexDirection: 'column', alignItems: 'start' }}
      >
        <ProjectName />
        <ProjectDate />
        <Person />
      </Box>
      <Box>
        {/* <MenuOpenIcon /> */}
        <MenuOpen />
      </Box>
    </Box>
  );
};

export default ProjectContainer;
