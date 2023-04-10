import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getUser } from '../store/user/user.action';
import { Box, Grid } from "@mui/material"
import UserStrutur from '../component/UserStrutur';

const UserList = () => {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector((store) => store.user)

  useEffect(()=>{
    dispatch(getUser());
  }, []);
  return (
    <Box sx={{display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, width: "80%", margin: "30px auto"}}>
      {users?.map((user) => (
        <UserStrutur key={user._id} data={user}/>
      ))}
    </Box>
  )
}

export default UserList