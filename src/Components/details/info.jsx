import React from 'react'
import { Typography,Box, Table, TableBody, TableRow, TableCell,styled } from '@mui/material';
import {FaTag} from 'react-icons/fa';

const SmallText = styled(Box)`
vertical-align: baseline;
  & > p {
 font-size:14px;
 margin-top:10px;
  } 
`

const ColumnText = styled(TableRow)`
  font-size:14px;
  vertical-align: baseline;

  & > td {
  font-size:14px;
 margin-top:10px;
 border:none;
    
  }
`


const Info = ({product}) => {
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const date = new Date(new Date().getTime()+ (5 * 24 * 60 * 60 * 1000));
  return (
    <>
     <Typography>{product.title.longTitle}</Typography>
            <Typography  style={{marginTop: 3, fontSize: 14 , color: '#878787'}}>
              8 Ratings & 1 Review
              <Box component="span" >  <img src={fassured} alt="text" style={{width:77, marginLeft: 20}}/></Box> 
            </Typography>
            <Typography>
              <Box component="span" style={{fontSize: 28}}> ₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{color:'#878787'}}><strike>  ₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{color:'#388e3c'}}>{product.price.discount}</Box>

            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><FaTag style={{marginRight:10}} color="green" size="1rem"/>Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account T&C</Typography>
                <Typography><FaTag style={{marginRight:10}} color="green" size="1rem"/>Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
                <Typography><FaTag style={{marginRight:10}} color="green" size="1rem"/>Special PriceGet extra 4% off (price inclusive of cashback/coupon) T&C</Typography>
                <Typography><FaTag style={{marginRight:10}} color="green" size="1rem"/>Buy this Product and Get Extra ₹500 Off on Two-Wheelers T&C</Typography>
                <Typography><FaTag style={{marginRight:10}} color="green" size="1rem"/>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</Typography>
                <Typography><FaTag  style={{marginRight:10}} color="green" size="1rem"/>Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText >
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivery by { date.toDateString( )} | ₹40</TableCell>
                    </ColumnText >
                    <ColumnText >
                        <TableCell style={{color:'#878787'}}> Warranty</TableCell>
                        <TableCell >No  Warranty</TableCell>
                    </ColumnText >
                    <ColumnText >
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell >
                            <Box component="span" style={{ color:'#2874f0'}}> CORSECA</Box>
                            <Typography>7 day seller replacement policy/brand assistance for device issues</Typography>
                            <Typography>GST invoice available</Typography>
                            <Typography>See other Sellers starting from ₹{product.price.cost}/-</Typography>
                        </TableCell>
                    </ColumnText >
                    <ColumnText >
                        <TableCell  colSpan={2}>
                            <img src={adURL} alt="add" style={{width:390}} />
                        </TableCell>
                    </ColumnText >
                    <ColumnText >
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>
                    </ColumnText >
                </TableBody>
            </Table>
    </>
  )
}

export default Info;