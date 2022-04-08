import { Box } from '@mui/system';
import React from 'react';
import MenuOpen from '../MenuOpen/MenuOpen';
import Person from '../Person/Person';
import ProjectInfo from './ProjectInfo';

const ProjectContainer = ({ projects }) => {
  return projects.map((project, index) => (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        alignItems: 'start',
        justifyContent: 'space-between',
        padding: '8px 16px',
        backgroundColor: '#fff',
        height: '80px',
        boxShadow: 'inset 0px -1px 0px #D9D9D9',
      }}
      key={index}
    >
      <Box
        sx={{
          diplay: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <ProjectInfo name={project.name} date={project.date} />
        <Person
          avatar={project.assigned_to.avatar}
          name={project.assigned_to.name}
        />
      </Box>
      <Box>
        <MenuOpen id={project.id} />
      </Box>
    </Box>
  ));
};

export default ProjectContainer;
