import {
  Button,
  Dialog as DialogMUI,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from '@mui/material';
import React from 'react';
import Draggable from 'react-draggable';

const DialogForDelete = ({ id, openConfirm, setOpenConfirm }) => {
  //   const [openConfirm, setOpenConfirm] = useState(false);

  const handleClose = () => {
    setOpenConfirm(false);
  };

  const handleDelete = id => {
    console.log('DELETE PROJECT BY ID: ', id);
    handleClose();
    alert(
      "You've deleted project with id: " + id + '. This is a mockup (see code).'
    );
    // In real case, you would make a request to the server to delete the project
  };

  return (
    <DialogMUI
      open={openConfirm}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby='draggable-dialog-title'
    >
      <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
        Hey, think about it more carefully
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this project?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </DialogActions>
    </DialogMUI>
  );
};

export default DialogForDelete;

function PaperComponent(props) {
  return (
    <Draggable
      handle='#draggable-dialog-title'
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
