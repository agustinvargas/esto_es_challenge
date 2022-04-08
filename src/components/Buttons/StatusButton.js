import { Button } from '@mui/material';
import React from 'react';

const StatusButton = ({ status }) => {
  return (
    <Button
      sx={{
        background: '#F5F5F5',
        border: '1px solid #D9D9D9',
        borderRadius: '4px',
        padding: '1px 8px',
        color: '#595959',
        fontSize: '12px',
        textTransform: 'none',
        cursor: 'inherit',
      }}
      variant='outlined'
    >
      {status}
    </Button>
  );
};

export default StatusButton;
