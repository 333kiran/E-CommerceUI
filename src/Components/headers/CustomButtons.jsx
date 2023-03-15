import React,{useState, useContext} from 'react'
import { Box, Button, Typography,styled, Badge } from '@mui/material';
import { Link } from 'react-router-dom';

import {FaShoppingCart} from "react-icons/fa";

import { DataContext} from '../../context/dataprovider';
import { useSelector } from 'react-redux';

//components
import Logindialog from '../login/logindialog';
import Profile from './profile';

const Wrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  margin: '0 2% 0 auto',
  '& > * ' : {
    marginRight:'40px !important',
    fontSize:14,
    alignItems:'center'
  },
  [theme.breakpoints.down('md')]: {
    display:'block'
  }
}));



 const Container = styled(Link)(({theme}) => ({
  display:'flex',
  textDecoration:'none',
  color:'inherit',
 [theme.breakpoints.down('md')]: {
  display:'block'
 }
}));



const LoginButton = styled(Button)`
  color:#2874f0;
  background:#fff;
  text-transforrm:none;
  padding:5px 40px;
  border-radius:2px;
  box-shadow:none;
  font-weight:600;
  height:32px;
`



const CustomButtons = () => {

  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const {cartItems} = useSelector(state => state.cart);

  const openDialog = () => {
     setOpen(true);
  }

  return (
    < Wrapper>
    {
      account ? <Profile account={account}  setAccount={setAccount}/> :
      <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>

    }
        <Typography  style={{marginTop: 3, width:135}}>Become a Seller</Typography>
        <Typography  style={{marginTop: 3}}>More</Typography>
        <Container to='/cart'>
          <Badge badgeContent={cartItems?.length} color="secondary">
          <FaShoppingCart size="1.5rem"/> 
          </Badge>
            <Typography style={{marginLeft: 10}}>Cart</Typography>
            
        </Container>
        <Logindialog  open={open} setOpen={setOpen} />
    </ Wrapper>
  )
}

export default CustomButtons;