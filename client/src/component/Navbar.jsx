import React, { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material";
import {NavLink} from "react-router-dom"
import {CgProfile} from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { currentUser, getUser } from '../store/user/user.action';

const Navbar = () => {
  const dispatch = useDispatch();
  const {users, loading, error, login} = useSelector((store) => store.user)
  const [toggle, setToggle] = useState(false);

  const changeUser = (user) => {
    dispatch(currentUser(user));
  }

  useEffect(()=>{
    dispatch(getUser());
  }, []);

  return (
    <Box sx={{display: "flex", width: "cals(100% - 10px)", bgcolor: "rgb(130, 200, 200)", justifyContent: "space-around", padding: "10px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      
      <NavLink to={"/"} style={{textDecoration: "none", color: "black", fontWeight: "bold"}}>Home</NavLink>
      <NavLink to={"/users/list"} style={{textDecoration: "none", color: "black", fontWeight: "bold"}}>Users List</NavLink>
      <NavLink to="/analytics" style={{textDecoration: "none", color: "black", fontWeight: "bold"}}>Analytics Pages</NavLink>

      <Box sx={{display: "flex", gap: 1, alignItems: "center"}} onMouseEnter={()=>setToggle(true)} >
        <NavLink to="/profile" style={{textDecoration: "none", color: "black", fontWeight: "bold"}}>
        <Box sx={{display: "flex", gap: 1, alignItems: "center"}}>
          <CgProfile />{login?.name}
        </Box>
        </NavLink> 
        {toggle && 
        <Box position={"absolute"} top={"40px"} bgcolor={"white"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} padding={"10px"} borderRadius={"10px"} onMouseLeave={()=> setToggle(false)}>
          {users?.map((user)=> (
            <Typography key={user._id} sx={{cursor: "pointer", padding: "10px", ":hover": {color: "red"}}} onClick={()=> changeUser(user)}>{user.name}</Typography>
          ))}
          <Typography fontWeight={"bold"}>Switch User</Typography>
        </Box>}
        
      </Box>
    </Box>
  )
}

export default Navbar