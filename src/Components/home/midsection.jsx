import React from 'react'
import { Grid, styled } from '@mui/material';
import { imageURL } from '../../Constants/data';

const Wrapper = styled(Grid)`
   margin-top:10px;
   justify-content: space-between;
`


const Midsection = () => {
  return (
    <Wrapper  container >
       {
         imageURL.map(image => {
            return  <Grid item lg={4} md={4} sm={12} xs={12}> <img src={image} alt="add banner" style={{width:'100%'}}/>
             </Grid>
         })
       }
    </Wrapper>
  )
}

export default Midsection;