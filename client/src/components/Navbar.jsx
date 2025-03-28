import React from 'react'
import styled from 'styled-components'
import Button from './Buttons'
import {AddRounded, ExploreRounded} from "@mui/icons-material"
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
flex: 1;
background: ${({theme}) => theme.navbar || '#1E1E1E'};
color: ${({theme}) => theme.text_primary};
font-weight: bold;
font-size: 22px;
padding: 14px 50px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
@media only screen and (max-width: 600px){
    padding: 10px 12px;
}
@


`;

function Navbar() {

    const Navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split('/')
  return (
   
    <Container>
     GenGram
      {path[1] === "post" ? (
      <Button onClick={() => Navigate('/')} text="Explore Posts" leftIcon={<ExploreRounded fontSize='18px'/>}></Button>
      ): (
        <Button onClick={() => Navigate('/post')} text="Create New Post" leftIcon={<AddRounded fontSize='18px'/>}></Button>
      )}
    
    </Container>
  )
}

export default Navbar
