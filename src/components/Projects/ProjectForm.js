import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import InputText from '../Inputs/InputText';
import InputSelect from '../Inputs/InputSelect';
import Button from '../Buttons/Button';
import { useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  assigned_to,
  getProject,
  project_manager,
  status,
} from '../../utils/mockData';
import Loader from '../Loader/Loader';

const ProjectForm = () => {
  const { editId } = useParams(); // If editId is present, we are editing a project
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!editId) return;
    (async () => {
      // Mock API call.
      try {
        setLoading(true);

        // In real life, we would make an API call to get the project by ID, for example:
        // const response = fetch(
        //   `https://jsonplaceholder.typicode.com/users/${editId}`
        // );
        // const project = await response.json();

        const project = await getProject(editId);
        setProject(project);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [editId]);

  const schemaValidate = Yup.object().shape({
    project_name: Yup.string()
      .min(3, 'Project name must contain a minimum of three characters')
      .required('This field is required'),
    description: Yup.string()
      .min(3, 'Project description must contain a minimum of three characters')
      .required('This field is required'),
    project_manager: Yup.string().required('This field is required'),
    assigned_to: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
  });

  return loading ? (
    <Loader />
  ) : (
    <Formik
      enableReinitialize
      initialValues={{
        project_name: project.name || '',
        description: project.description || '',
        project_manager: project.project_manager?.id || '',
        assigned_to: project.assigned_to?.id || '',
        status: project.status?.id || '',
      }}
      validationSchema={schemaValidate}
      onSubmit={(val, { resetForm }) => {
        if (editId) {
          console.log('EDIT PROJECT', val);
          alert('Edit project successful. See console for details');
          // Request API with method patch or put to update project
        } else {
          console.log('NEW PROJECT', val);
          alert('Add project successful. See console for details');
          // Request API with method post to create project
        }
        resetForm();
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <Container
          sx={{
            padding: '32px 16px',
            background: '#FFFFFF',
            boxShadow: ' 0px 2px 4px rgba(0, 0, 0, 0.15)',
            width: { md: '664px' },
          }}
        >
          <form>
            <InputText
              label='Project name'
              id='project_name'
              value={values.project_name}
              handleChange={handleChange}
              handleBlur={handleBlur}
              helperText={touched.project_name && errors.project_name}
            />
            <InputText
              label='Description'
              id='description'
              value={values.description}
              handleChange={handleChange}
              handleBlur={handleBlur}
              helperText={touched.description && errors.description}
            />
            <InputSelect
              label='Project manager'
              id='project_manager'
              options={{ source: project_manager, label: 'name', id: 'id' }}
              value={values.project_manager}
              handleChange={handleChange}
              handleBlur={handleBlur}
              helperText={touched.project_manager && errors.project_manager}
            />
            <InputSelect
              label='Assigned to'
              id='assigned_to'
              options={{
                source: assigned_to,
                label: ['name'],
                id: ['id'],
              }}
              value={values.assigned_to}
              handleChange={handleChange}
              handleBlur={handleBlur}
              helperText={touched.assigned_to && errors.assigned_to}
            />
            <InputSelect
              label='Status'
              id='status'
              options={{
                source: status,
                label: 'name',
                id: 'id',
              }}
              value={values.status}
              handleBlur={handleBlur}
              handleChange={handleChange}
              helperText={touched.status && errors.status}
            />
            <Button
              handleClick={handleSubmit}
              label={editId ? 'Edit project' : 'Create project'}
            />
          </form>
        </Container>
      )}
    </Formik>
  );
};

export default ProjectForm;
