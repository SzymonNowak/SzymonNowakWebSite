import React, { Component } from 'react';
import styled, { css } from 'styled-components';  
import asset from '../../../assets/6.PNG';


const Wrapper = styled.div`
margin-top:50px;
height:500px;
justify-self: center;
align-items:center;
display:flex;
`;

const Para1 = styled.p`

    font-size:10px;
    font-weight:bold;
padding:10px;

`;
const Span = styled.span`
color:gold;
`;

const LeftWrapper = styled.div`
 display:flex;
 flex-direction:column;
 justify-content: space-evenly;
 margin-right:100px;

 

`;

const Paragraph = styled.p`
margin-top:20px;
margin-bottom:20px;
`;
const H1 = styled.h1`


`;

const Button = styled.button`
width:150px;
height:40px;
border:none;
background-color:gold;
color:white;
font-weight:bold;
border-radius:50px;
`;

const BasicInfo = () => {
  return(
    <Wrapper>
      <div>
        <Para1>Welcome to my portfolio website!</Para1>
        <LeftWrapper>
          <H1>
            Hey folks, I'm
            <Span> A Developer</Span>
          </H1>
          <Paragraph>
              Welcome to my portfolio website!
          </Paragraph>

          <Button>Download CV</Button>
        </LeftWrapper>
      </div>
      <div>
        <img src={asset} alt="elo" />
      </div>
    </Wrapper>
  )
}
 
export default BasicInfo;
