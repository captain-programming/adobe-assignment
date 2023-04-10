import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editPosts } from '../store/post/post.action';

const ModalComponent = ({closemodal, openModale, content, id}) => {

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(editPosts(id, {content: text}));
    closemodal();
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  return (
    <Modal
      open={openModale}
      onClose={closemodal}
    >
      <Box sx={style}>
        <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Post
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue={content}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleClick}>Update Post</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalComponent