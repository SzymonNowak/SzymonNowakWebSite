import React, { Component } from 'react';
import GridTemplate from '../templates/GridTemplate';
import NavBar from '../components/organisms/NavBar/NavBar';


class Home extends Component {

  render(){
    return(
      <GridTemplate>
        <NavBar />

      </GridTemplate>
    )
  }
}
export default Home;

