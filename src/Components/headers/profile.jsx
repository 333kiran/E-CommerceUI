import React, { useState } from 'react'
import {FaPowerOff } from "react-icons/fa";

import {Box, Typography, Menu, MenuItem, styled} from '@mui/material';

const Component = styled(Menu)`
  margin-top:5px;


`
const Logout = styled(Typography)`
 font-size:14px;
 margin-left:20%;
`


const Profile = ({account,setAccount}) => {

 const [open, setOpen] = useState(false);

 const handleClick = (event) => {
    setOpen(event.currentTarget);

 }

 const handleClose = () => {
     setOpen(false);
 }

 const logoutUser = () => {
       setAccount('');
 }

  return (
    <> 
       <Box  onClick={handleClick}> <Typography  style={{marginTop:2, cursor:'pointer'}}>{account}</Typography></Box>
       <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
       
      >
        
        <MenuItem onClick={() => {handleClose(); logoutUser();}}>
        <FaPowerOff color="blue"  size="2rem"/>
            <Logout>Logout</Logout>
        </MenuItem>
      </Component>
 </>
  )
}

export default Profile;