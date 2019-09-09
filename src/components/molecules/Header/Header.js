import React, { Component } from 'react';
import styled, { css } from 'styled-components';  

const TextBox = styled.div`
margin-top:20px;
`;
const Paragraph = styled.div`

font-size:35px;
font-weight:bold;
text-align:center;
`;
const Wrapper = styled.div`

margin-top: 60px;
justify-self: center;

`;

const Header = () => {
  return(
    <Wrapper>
      <TextBox>
        <Paragraph>
              Things I have created to broaden my
        </Paragraph>
      </TextBox>
      <TextBox>
        <Paragraph>
             knowledge and skill
        </Paragraph>
      </TextBox>
    </Wrapper>
    
  )
}
 
export default Header;
