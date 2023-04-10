import { Box, Button, Typography } from '@mui/material'
import moment from "moment";
import React from 'react'

const UserStrutur = ({data}) => {
  const {created_at, bio, email, name} = data

  return (
    <Box sx={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "30px", borderRadius: "10px"}}>
      <Box sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
        <Typography variant='h6' fontSize={"17px"}>User Name: <span style={{fontWeight: "normal"}}>{name}</span></Typography>
        <Typography variant='h6' fontSize={"17px"}>User Email: <span style={{fontWeight: "normal"}}>{email}</span></Typography>
        <Typography variant='h6' fontSize={"17px"}>User Bio: <span style={{fontWeight: "normal"}}>{bio}</span></Typography>
      </Box>
      <Typography mt={5} sx={{textAlign: "end"}}>Joined before {moment(created_at).fromNow()}</Typography>
      <Box mt={3} sx={{display: "flex", gap: "10px"}}>
        <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}}>View</Button>
        <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}}>Edit</Button>
        <Button sx={{backgroundColor: "ButtonFace", borderRadius: "5px", padding: "0px 10px"}}>Delete</Button>
      </Box>
    </Box>
  )
}

export default UserStrutur