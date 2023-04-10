import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getPost } from '../store/post/post.action';
import { Box, Button } from '@mui/material';
import PostStructure from '../component/PostStructure';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
  const dispatch = useDispatch();
  const {posts, loading, error} = useSelector((store) => store.post)
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/post-form");
  }

  useEffect(()=>{
    dispatch(getPost());
  }, [])
  return (
    <>
    <Box sx={{width: "60%", margin: "30px auto", display: "flex", gap: "20px", flexDirection: "column"}}>
      <Button sx={{alignSelf:"end"}} onClick = {handleCreate}>Create Post</Button>
      {posts?.map((post) => (
        <PostStructure key={post._id} data={post}/>
      ))}
    </Box>
    </>
  )
}

export default PostList