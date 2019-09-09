import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display:flex;
  justify-content: space-evenly;
  align-items:baseline;
  margin:20px;
  /* grid-area: Nav; */
`;
const  Span = styled.span`
  font-size:25px;
  margin-left:10px;
  text-transform:uppercase;
  letter-spacing:1px;
  color:black;
`;


const Logo = styled.div`
  font-size:35px;
  color:black;
`;

const ListOfNavItem = styled.ul`
  flex-basis:30%;
  display: flex;
  justify-content: space-evenly;
  padding:20px;

`;

const ListItem = styled.li`
 list-style:none;
`;

const StyledLink = styled(Link)`
  text-decoration:none;
  font-weight:bold;

`;

const LanguageButton = styled.button`
  font-size:15px;
  border:none;
  background-color:transparent;
  padding:30px;
  cursor: pointer;

  
`;
const LanguageText = styled.span`
  margin-left:5px;
  font-weight:bold;
`;

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Logo>
          <i className="far fa-user" />
          <StyledLink to="/home">
            <Span>Szymon Nowak</Span>
          </StyledLink>
        </Logo>
        <ListOfNavItem>
          <ListItem>
            <StyledLink to="/about">About</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/contact">Contact</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/projects">Projects</StyledLink>
          </ListItem>
        </ListOfNavItem>
        <LanguageButton>
          <i className="fas fa-flag" />
          <LanguageText>
            language version.
          </LanguageText>
        </LanguageButton>
      </Nav>
    );
  }
}

export default NavBar;
