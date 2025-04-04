import {useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'wheat',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const ConfirmModal = ({action, open, handleClose, title, text}) => {
    return (
        <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        {text}
                    </Typography>
                    <div style={{display: "flex", justifyContent: "right"}}>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button color='error' onClick={() => {
                            action()
                            handleClose()
                        }}>Delete</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default ConfirmModal