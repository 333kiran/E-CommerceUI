import React from 'react'
import Header from './Components/headers/header';
import Home from './Components/home/home';
import Productdetails from './Components/details/productdetails';
import Cart from './Components/cart/cart';

import Dataprovider from './context/dataprovider';

import { Box } from '@mui/material';

import { BrowserRouter, Routes,Route } from 'react-router-dom';


 function App() {
  return (
    <Dataprovider>
      <BrowserRouter>
         <Header/>
         <Box style={{marginTop:55}}>
          <Routes>
           <Route path="/" element={ <Home/>} />
            <Route path="/product/:id" element={ <Productdetails/>} />
            <Route path="/electronic/:id" element={ <Productdetails/>} />
            <Route path='/cart' element={<Cart/>} />
            </Routes>
         </Box>
      </BrowserRouter>
    </Dataprovider>
  )
}
 export default App ;