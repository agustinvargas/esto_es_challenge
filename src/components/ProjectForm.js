import React from 'react';
import { Container } from '@mui/material';
import InputText from './Inputs/InputText';
import InputSelect from './Inputs/InputSelect';
import Button from './Buttons/Button';

const ProjectForm = () => {
  return (
    <Container
      sx={{
        padding: '32px 0',
        marginTop: '16px',
        background: '#FFFFFF',
        boxShadow: ' 0px 2px 4px rgba(0, 0, 0, 0.15)',
      }}
    >
      <InputText label='Project name' helperText='' />
      <InputText label='Description' helperText='' />
      <InputSelect label='Project manager' placeholder='Select a person' />
      <InputSelect label='Assigned to' placeholder='Select a person' />
      <InputSelect label='Status' placeholder='Enabled' />
      <Button label='Create project' />
    </Container>
  );
};

export default ProjectForm;
