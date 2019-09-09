import React, { Component } from 'react';
import styled, { css } from 'styled-components';  

const TextBox = styled.div`

margin-top: 20px;
justify-self: center;

`;
const Paragraph = styled.div`

font-size:35px;
font-weight:bold;

`;

const Header = () => {
  return(
    <>
      <TextBox>
        <Paragraph>
              Things I have created to develop my
        </Paragraph>
      </TextBox>
      <TextBox>
        <Paragraph>
             knowledge and skill
        </Paragraph>
      </TextBox>
    </>
  )
}
 
export default Header;
