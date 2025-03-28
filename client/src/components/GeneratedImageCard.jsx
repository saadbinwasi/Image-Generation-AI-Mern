import React from 'react'
import styled from 'styled-components'
import { CircularProgress,Typography } from '@mui/material';


const Container = styled.div`
flex: 1;
align-items: center;
display: flex;
gap: 16px;
flex-direction: column;
justify-content: center;
padding: 16px;
border: 2px dashed ${({theme}) => theme.yellow || 'grey'};
color:  ${({theme}) => theme.arrow + 80};
border-radius: 20px;
min-height: 300px;

`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 24px;
background: ${({theme}) => theme.black + 50};

`

function GeneratedImageCard({src,loading}) {
  return (
  <Container>

    {
        loading ? <> <CircularProgress style={{color:"grey",width: "24px", height: "24px"}}/>
        <Typography style={{ color: "grey"}}>Generating Your Image </Typography>
        <Typography style={{fontSize: "14px" , color: "#b1b2b3"}}>Please Wait . . . . </Typography>
        
        </> : (
        <>

        {
            src ? <Image src={src}/> : <> Write a Prompt to generate Image </>
        }
        
        </>
   ) }
  </Container>
  )
}

export default GeneratedImageCard
