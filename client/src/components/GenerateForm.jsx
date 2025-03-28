import React, { useState } from 'react'
import styled from 'styled-components';
import Button from './Buttons'
import TextInput from './TextInput'
import { AutoAwesome, CreateRounded } from '@mui/icons-material';
import {CreatePost, GenerateImageFromPrompt } from '../api/index';
import { useNavigate } from 'react-router-dom'; 



const Form = styled.div`
flex: 1;
padding: 16px 20px;
display: flex;
flex-direction: column;
gap: 9%;
justify-content: center;

`;

const Top = styled.div`

display: flex;
flex-direction: column;
gap: 6px;

`;

const Body = styled.div`
display: flex;
flex-direction: column;
gap: 19px;
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary}

`;


const Actions = styled.div`
flex: 1;
display: flex;
gap: 8px;
`;

const Title = styled.div`
font-size: 28px;
font-weight: 500px;
color: ${({ theme }) => theme.text_primary};

`;

const Desc = styled.div`
font-size: 17px;
font-weight: 400px;
color: ${({ theme }) => theme.text_secondary};
`;
function GenerateForm({
 
    post,
    setPost,
    createPostLoading,
    setGenerateImageLoading,
    generateImageLoading,
    setCreatePostLoading,
}) {

    const [error, setError] = useState("");
    const navigate = useNavigate();


// In GenerateForm.jsx
const generateImageFun = async () => {
    setGenerateImageLoading(true);
    setError("");
    try {
      const res = await GenerateImageFromPrompt({ prompt: post.prompt });
      if (res.data?.photo) {
        // Remove any existing prefix and ensure it's treated as PNG
        const base64Data = res.data.photo.replace(/^data:image\/\w+;base64,/, '');
        setPost({
          ...post,
          photo: `data:image/png;base64,${base64Data}`,
        });
      }
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to generate image");
    } finally {
      setGenerateImageLoading(false);
    }
  };



const createPostFun = async () => {
    setCreatePostLoading(true);
    setError("");
    await CreatePost(post)
      .then((res) => {
        navigate("/");
        setCreatePostLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setCreatePostLoading(false);
      });
  };

    return (
        <Form>
            <Top>
                <Title>Generate Image with Prompt</Title>
                <Desc>Write your Prompt according to the image you want to generate!</Desc>
            </Top>
            <Body>
                <TextInput
                 label="Author"
                  placeholder='Enter Your Name..' 
                name="name"
                handleChange={(e) => setPost({...post, name: e.target.value})}
                 value={post.name} />
                <TextInput
                label="Image Prompt"
                 placeholder='Write a Detailed Prompt about the image. . . '
                  rows="8" textArea 
                  value={post.prompt} 
                  handleChange={(e) => setPost({...post, prompt: e.target.value})} name="prompt" />

                <Desc>** Post Your AI Generated Imaginations **</Desc>
            </Body>
            <Actions>
                <Button onClick={() => generateImageFun()} text="Generate" flex leftIcon={<AutoAwesome />} isLoading={generateImageLoading} isDisabled={post.prompt === ""}/>
                <Button onClick={() => createPostFun()} text="Post Image" flex leftIcon={<CreateRounded />} isLoading={createPostLoading} isDisabled={post.name === "" || post.prompt === "" || post.photo === ""} />
            </Actions>

        </Form>
    )
}

export default GenerateForm
