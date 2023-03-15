import { Grid,Box,Button,Typography,styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { payWithPaytm } from '../../services/api';
import { post } from '../../utils/paytm';

//components
import Cartitem from './cartitem';
import Totalview from './totalview';
import Emptycart from './emptycart';


const Container = styled(Grid)(({theme}) => ({
 padding:'30px 135px',

 [theme.breakpoints.down('md')]: {
   padding:'15px 0px'
 }
   
}))


const Header = styled(Box)`
  padding: 15px 24px;
  background:#fff;
`
const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background:#fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 /10%);
  border-top:1px solid #f0f0f0;
`

const Buttoncss = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color:#ffff;
  width:250px;
  height:51px;
  border-radius:2px;
`
const LeftComponent = styled(Grid)(({theme}) => ({
  paddingRight:'15px !important' ,

  [theme.breakpoints.down('md')]: {
    marginBottom: 15
  }
  
}))



const Cart = () => {

 const {cartItems} = useSelector(state => state.cart);

 const buyNow = async () => {
  let response = await payWithPaytm({ amount:500, email: 'nagrakiran969@gmail.com'})
  let information = {
   action:'https://securegw-stage.paytm.in/order/process',
   params: response
  }
  post(information);
}


  return (
    <>   
    {
      cartItems.length ?
      <Container container>
         <LeftComponent item lg={9} md={9} sm={12} xs={12} >
           <Header>
             <Typography>My cart({cartItems.length})</Typography>
           </Header>
           {
            cartItems.map(item => {
              return  <Cartitem  item={item}/>
            })
           }

           <ButtonWrapper>
            <Buttoncss onClick={() => buyNow()} >Place Order</Buttoncss >
           </ButtonWrapper>
         </LeftComponent>
         <Grid item lg={3} md={3} sm={12} xs={12}>
             <Totalview  cartItems={cartItems}/>
         </Grid>
      </Container>
      :<Emptycart/>
    }
    </>
  )
}

export default Cart;