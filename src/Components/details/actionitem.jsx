import React,{useState} from 'react'

import { Box,Button, styled } from '@mui/material';
import {FaCartPlus} from 'react-icons/fa';
import {MdFlashOn } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { payWithPaytm } from '../../services/api';
import { post } from '../../utils/paytm';

const LeftContainer= styled(Box)(({theme}) => ({
  minWidth:'40%',
  padding:'40px 0px 0px 80px',
  [theme.breakpoints.down('lg')]: {
    padding:'28px 20px'
  }
}));

const Image =styled('img')({
  width:'93%',
  padding: 15
})

const StyledButton = styled(Button)(({theme}) => ({
  width:'48%',
  height:'50px',
  borderRadius: 2,
  [theme.breakpoints.down('lg')]: {
    width:'43%'
  },
  [theme.breakpoints.down('md')]: {
    width:'48%'
  },
  [theme.breakpoints.down('sm')]: {
    width:'45%',
    fontSize: '10px'

  },

}));

const Actionitem = ({product}) => {


const navigate = useNavigate();
const dispatch = useDispatch();

const [quantity, setQuantity] = useState(1);

const {id } = product;

const addItemToCart = () => {
  dispatch(addToCart(id,  quantity))
  navigate('/cart')
}

const buyNow = async () => {
   let response = await payWithPaytm({ amount:500, email: 'nagrakiran969@gmail.com'})
   let information = {
    action:'https://securegw-stage.paytm.in/order/process',
    params: response
   }
   post(information);
}

  return (
    <LeftContainer>
      <Box style={{ padding:' 15px 20px ',
  border:'1px solid #f0f0f0'}}>
        <Image src={product.detailUrl} alt="detailspic"/>
      </Box>
        <StyledButton variant="contained" onClick={() => addItemToCart()} style={{marginRight: 10, background:'orange'}} > <FaCartPlus size='1.5rem'/> &nbsp;Add to Cart</StyledButton>
        <StyledButton  variant="contained" onClick={() => buyNow()} style ={{background: '#fb541b'}}> <MdFlashOn size="1.5rem" />Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default Actionitem ;