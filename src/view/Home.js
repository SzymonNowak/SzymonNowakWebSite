import React, { Component } from 'react';
import GridTemplate from '../templates/GridTemplate';
import NavBar from '../components/organisms/NavBar/NavBar';
import Header from '../components/molecules/Header/Header';

class Home extends Component {

  render(){
    return(
      <GridTemplate>
        <NavBar />
        <Header />
      </GridTemplate>
    )
  }
}
export default Home;

