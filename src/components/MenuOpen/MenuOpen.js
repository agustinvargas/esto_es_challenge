import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React from 'react';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';
import MenuOpenIcon from '../Icons/MenuOpenIcon';

const MenuOpen = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size='small'
        // sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      >
        <MenuOpenIcon />
      </IconButton>
      <Menu
        sx={{ left: '12px' }}
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            width: '181px',
            mt: 1.5,

            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Box sx={{ display: 'flex', gap: '13.4px', alignItems: 'center' }}>
            <EditIcon />
            <Typography
              component='span'
              sx={{ color: '#262626', fontSize: '12px' }}
            >
              Edit
            </Typography>
          </Box>
        </MenuItem>
        <Divider light />
        <MenuItem>
          <Box sx={{ display: 'flex', gap: '13.4px', alignItems: 'center' }}>
            <DeleteIcon />
            <Typography
              component='span'
              sx={{ color: '#262626', fontSize: '12px' }}
            >
              Delete
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuOpen;
