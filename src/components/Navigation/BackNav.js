import { Box, Typography } from '@mui/material';
import React from 'react';
import BackArrowIcon from '../Icons/BackArrowIcon';
import { useNavigate } from 'react-router-dom';

const BackNav = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        fontFamily: 'Inter',
        fontSize: '12px',
        lineHeight: '22px',
        cursor: 'pointer',
      }}
      onClick={() => navigate(-1)}
    >
      <BackArrowIcon />
      <Typography
        component='span'
        sx={{ color: 'rgba(0, 0, 0, 0.65)', fontSize: '12px' }}
      >
        Back
      </Typography>
    </Box>
  );
};

export default BackNav;
