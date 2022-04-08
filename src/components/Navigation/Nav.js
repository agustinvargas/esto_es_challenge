import { Box } from '@mui/material';
import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import Button from '../Buttons/Button';
import AddIcon from '../Icons/AddIcon';
import BackNav from './BackNav';
import TitleNav from './TitleNav';

const Nav = () => {
  const { pathname } = useLocation();
  const { projectId } = useParams(); // only for edit
  const navigate = useNavigate();

  const isHome = pathname === '/';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: isHome ? 'space-between' : 'flex-start',
        gap: { xs: '8px', md: '24px' },
        boxShadow: 'inset 0px -1px 0px #D9D9D9',
        height: { xs: '40px', md: '56px' },
        padding: { xs: '4px 16px', md: '8px 48px' },
      }}
    >
      {isHome ? (
        <>
          <TitleNav title={'My projects'} />
          <Button
            label='Add project'
            icon={<AddIcon />}
            handleClick={() => navigate('/projects/create')}
          />
        </>
      ) : (
        <>
          <BackNav />
          <TitleNav title={projectId ? 'Edit project' : 'Add project'} />
        </>
      )}
    </Box>
  );
};

export default Nav;
