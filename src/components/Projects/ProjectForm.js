import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import InputText from '../Inputs/InputText';
import InputSelect from '../Inputs/InputSelect';
import Button from '../Buttons/Button';
import { useParams } from 'react-router-dom';

const ProjectForm = () => {
  const { editId } = useParams();
  // const [project, setProject] = useState(null);

  // useEffect(() => {
  //   if(!editId) return;

  //   (async()=>{
  //     const response = await fetch(`/api/projects/${editId}`);
  //     const project = await response.json();
  //     setProject(project);
  //   })()
  // }, []);

  return (
    <Container
      sx={{
        padding: '32px 16px',
        background: '#FFFFFF',
        boxShadow: ' 0px 2px 4px rgba(0, 0, 0, 0.15)',
        width: { md: '664px' },
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
