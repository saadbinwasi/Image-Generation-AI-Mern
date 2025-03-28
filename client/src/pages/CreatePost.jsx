import React, { useState } from 'react'
import styled from 'styled-components'
import GenerateForm from '../components/GenerateForm';
import GeneratedImageCard from '../components/GeneratedImageCard';

const Container = styled.div`
height: 100%;
overflow-y: scroll;
height: 100%;
overflow-y: scroll;
background: ${({theme}) => theme.bg};
padding: 40px 30px;
padding-bottom: 50px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
@media (max-width: 768){
    padding: 6px 10px;
}

`;


const Headline = styled.div`
font-size: 34px;
font-weight: 500px;
color: ${({theme}) => theme.text_primary};
display: flex;
align-items: center;
flex-direction: column;


@media (max-width:600px) {
    font-size: 22px;

}`;

const Wrapper = styled.div`
flex: 1;
width: 100%;
height: fit-content;
max-width: 1200px;
gap: 8%;
display: flex;
justify-content: center;
@media (max-width: 786px) {
  flex-direction: column;
}

`;


function CreatePost() {
  const [generateImageLoading,setGenerateImageLoading] = useState(false)
  const [createPostLoading,setCreatePostLoading] = useState(false)
  const [post,setPost] = useState({
    name: "",
    prompt: "",
    photo: "",

  })
  return (
<Container>
<Wrapper>
<GenerateForm post={post} setPost={setPost} createPostLoading={createPostLoading} generateImageLoading={generateImageLoading} setCreatePostLoading={setCreatePostLoading} setGenerateImageLoading={setGenerateImageLoading}/>
<GeneratedImageCard src={post?.photo} loading={generateImageLoading}/>
</Wrapper>
</Container>
  )
}

export default CreatePost
