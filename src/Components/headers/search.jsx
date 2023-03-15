
import React,{useState,useEffect} from 'react'
import { InputBase,Box, styled, List, ListItem } from '@mui/material';
import {FaSearch } from "react-icons/fa"

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';


const SearchContainer = styled(Box)`
 background:#fff;
 width:38%;
 border-radius:2px;
 margin-left:12px;
 display: flex;
`

const InputSearchBase = styled(InputBase)`
  padding-left:20px;
  width:100%;
`
const ListWrapper = styled(List)`
  position:absolute;
  background:#ffffff;
  color:#000;
  margin-top:36px;
  
`

const Search = () => {

 const [text, setText] = useState("");

 const {products} = useSelector(state => state.getProducts);

const dispatch = useDispatch();

useEffect(() => {
   dispatch(getProducts())
},[dispatch])

  

   const getText = (text) => {
     setText(text);
   }

  return (
    
      <SearchContainer>
        <InputSearchBase
         placeholder='Search for products,brand and more'
         onChange={(e) => getText(e.target.value)}
         value = {text}
        />
          <FaSearch color="blue" style={{padding:5,marginRight:10,marginTop:3}}/>
           
         {
            text && 
            <ListWrapper>
              {
                
               products.filter((product) => {
               return product.title.longTitle.toLowerCase().includes(text.toLocaleLowerCase())
               })
               .map((product) => (
                  <ListItem> <Link to={`/product/${product.id}`} onClick={() => setText('')} style={{textDecoration:'none', color:'inherit'}}>
                   {product.title.longTitle} 
                   </Link>
                  </ListItem>
                ))
              }
           

            </ListWrapper>
           }
      </SearchContainer>
    
  )
}

export default Search;
