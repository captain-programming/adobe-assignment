import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../store/post/post.action';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] =useState("");
  const {login} = useSelector((store) => store.user)

  const handleSubmit = () => {
    dispatch(createPost({content: text, user_id: login._id}))
  }

  return (
    <Box width="40%" margin={"50px auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} padding={"30px"}  borderRadius="10px" display={"flex"} flexDirection={"column"} gap={2}>
      <Typography variant='h6'>Create Post</Typography>
      <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleSubmit}>Create Post</Button>
    </Box>
  )
}

export default PostForm