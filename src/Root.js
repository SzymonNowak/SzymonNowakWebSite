import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import MainTemplate from "./templates/MainTemplate";
import Home from "./view/Home";
import About from "./view/About";
import Contact from "./view/Contact";
import Projects from "./view/Projects";
import { routes } from "./routes/routes";

class Root extends Component {

  render(){
    return(
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.basic} render={() => <Redirect to="/home" />} />
            <Route path={routes.home} component={Home} />
            <Route path={routes.about} component={About} />
            <Route path={routes.contact} component={Contact} />
            <Route path={routes.projects} component={Projects} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    )
  }
}
export default Root;

