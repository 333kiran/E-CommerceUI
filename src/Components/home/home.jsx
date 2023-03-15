import React,{useEffect} from 'react'
import {Box, styled } from '@mui/material';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

//components
import Navbar from './navbar';
import Banner from './banner';
import Slide from './slide';
import Midslide from './midslide';
import Midsection from './midsection';

const Component = styled(Box)`
 padding: 8px 10px;
 background:#f2f2ff;
`

const Home = () => {

   const {products} = useSelector(state => state.getProducts);
    console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch( getProducts());
  },[dispatch]);
  return (
    
      <>
      <Navbar/>
      <Component>
      <Banner/>
      <Midslide   products={products} title="Deal of the Day"   timer={true}/>
      <Midsection/>
      <Slide   products={products}  title="Discounts for You"  timer={false}/>
      <Slide   products={products}  title="Top Selections" timer={false}/>
      <Slide   products={products}   title="Recommended Items" timer={false}/>
      <Slide   products={products}  title="Trending Offers" timer={false}/>
      <Slide   products={products}  title="Season's top picks" timer={false}/>
      <Slide   products={products}   title="Top deal on Acessories"timer={false}/>
      </Component>
      </>
    
  )
}

export default Home;
