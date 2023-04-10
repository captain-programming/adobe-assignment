import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { decreasePostLike, deletePosts, increasePostLike } from '../store/post/post.action';
import { useNavigate, useParams } from 'react-router-dom';
import ModalComponent from './ModalComponent';

const PostById = () => {
  const {onePost} = useSelector((store) => store.post);
  const {login} = useSelector((store) => store.user)
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const [openModale, setOpenModal] = useState(false);

  const closemodal = () => setOpenModal(false);
  const openmodalHandle = () => setOpenModal(true);

  const increaseLikeFun = () => {
    dispatch(increasePostLike(id));
  }

  const decreaseLikeFun = () => {
    dispatch(decreasePostLike(id));
  }

  const deletePosthandle = () => {
    dispatch(deletePosts(id));
    navigate("/");
  }

  return (
    <>
    <Box sx={{width: "50%", margin: "40px auto"}}>
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h6" fontSize={"18px"}>Publish by: {moment(onePost?.created_at).fromNow()}</Typography>
      </Box>
        <Typography sx={{marginTop: "20px"}}>Message:- {onePost.content}</Typography>
        <Box sx={{display: "flex", justifyContent: "space-around", marginTop: "30px"}}>
          {onePost?.user_id === login?._id && <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}} onClick = {openmodalHandle}>Edit</Button>}
          {onePost?.user_id === login?._id && <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}} onClick={deletePosthandle}>Delete</Button>}
          <Box sx={{display: "flex", gap: "10px"}}>
            <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}}onClick={increaseLikeFun}>Like</Button>
            <Typography variant="h6" fontSize={"18px"}>{onePost?.likes}</Typography>
            <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}}onClick={decreaseLikeFun}>Unlike</Button>
          </Box>
        </Box>
    </Box>
    <ModalComponent closemodal={closemodal} openModale={openModale} content={onePost?.content} id={id}/>
    </>
  )
}

export default PostById