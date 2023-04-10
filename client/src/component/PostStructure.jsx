import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decreasePostLike, deletePosts, getPostById, increasePostLike } from '../store/post/post.action';
import ModalComponent from './ModalComponent';

const PostStructure = ({data}) => {
  const {content, likes, users, created_at, user_id, _id} = data;
  const {login} = useSelector((store) => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openModale, setOpenModal] = useState(false);

  const closemodal = () => setOpenModal(false);
  const openmodalHandle = () => setOpenModal(true);

  const navigatePage = () => {
    dispatch(getPostById(_id));
    navigate(`/posts/${_id}`);
  }

  const increaseLikeFun = () => {
    dispatch(increasePostLike(_id));
  }

  const decreaseLikeFun = () => {
    dispatch(decreasePostLike(_id));
  }

  const deletePosthandle = () => {
    dispatch(deletePosts(_id))
  }

  return (
    <>
    <Box sx={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}padding={"30px"} fontFamily={"DM Serif"} borderRadius={"10px"}>
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h6" fontSize={"18px"}>Posted by: {users[0]?.name}</Typography>
        <Typography variant="h6" fontSize={"18px"}>Publish by: {moment(created_at).fromNow()}</Typography>
      </Box>
        <Typography sx={{marginTop: "20px"}}>{content}</Typography>
        <Box sx={{display: "flex", justifyContent: "space-around", marginTop: "30px"}}>
          <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}} onClick={navigatePage}>View</Button>
          {user_id === login?._id && <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}} onClick={openmodalHandle}>Edit</Button>}
          {user_id === login?._id && <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}} onClick={deletePosthandle}>Delete</Button>}
          <Box sx={{display: "flex", gap: "10px"}}>
            <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}}
            onClick={increaseLikeFun}>Like</Button>
            <Typography variant="h6" fontSize={"18px"}>{likes}</Typography>
            <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}}onClick={decreaseLikeFun}>Unlike</Button>
          </Box>
        </Box>
    </Box>
    <ModalComponent closemodal={closemodal} openModale={openModale} content={content} id={_id}/>
    </>
  )
}

export default PostStructure