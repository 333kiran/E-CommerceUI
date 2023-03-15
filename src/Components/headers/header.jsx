 import React,{useState} from 'react'
 import { AppBar, Toolbar,Box,Typography, IconButton,Drawer,List,ListItem,styled } from '@mui/material';
 import Search from './search'
 import CustomButtons from './CustomButtons';
 import { Link } from 'react-router-dom';
 import {MdViewHeadline} from 'react-icons/md';
 
 const Styledheader = styled(AppBar)`
  background:#2874f0;
  height:55px;
 `

 const Component = styled(Link)`
   margin-left:12%; 
   line-height:0;
   text-decoration:none;
   color:inherit;
 `
 const SubHeading = styled(Typography)`
 font-size:10px;
 font-style:italic;
//  `
 const PlusImage = styled('img')
 ({ width: 13,
  height: 13,
  marginLeft:4
 })
 
 const Custombuttonwrapper = styled(Box)(({theme}) => ({
  margin: '0 3% 0 auto',

   [theme.breakpoints.down('md')]: {
     display:'none'
   }
}));

const MenuButton = styled(IconButton)(({theme}) => ({
    display:'none',
    [theme.breakpoints.down('md')]: {
      display:'block'
    }
}));

 const  Header = () =>  {

 const logourl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
 const subUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"

const [open, setOpen] = useState(false);

const handleOpen = () => {
  setOpen(true);
}

const listMenu = () => (
  <Box style={{width:200}} onClick={handleClose}>
    <List>
      <ListItem>
        <CustomButtons/>
      </ListItem>
    </List>
  </Box>
)

const handleClose = () => {
  setOpen(false);
}



   return (
     
     <Styledheader>
     <Toolbar style={{minHeight:55}}>
      <MenuButton style={{color: 'inherit'}} onClick={handleOpen} >
        <MdViewHeadline/>
      </MenuButton >

        <Drawer open={open} onClose={handleClose}>
          {listMenu()}
        </Drawer>

       <Component to={'/'}>
        <img src={logourl} alt="logo" className='logo' style={{width: 75}} />
       
        <Box style={{ display: 'flex'}}>
          <SubHeading>Explore&nbsp;
          <Box component='span' style={{color:"yellow"}}>Plus </Box>
            
            </SubHeading>
            <PlusImage src={subUrl} alt="pluslogo"/>
        </Box>
        </Component>

       <Search/>
        <Custombuttonwrapper>
          <CustomButtons/>
        </Custombuttonwrapper>
       </Toolbar>
       </Styledheader>
        
   )
 }
 
 export default Header;