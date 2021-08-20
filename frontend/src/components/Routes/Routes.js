import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RobotList from '../../container/RobotList/RobotList';
import NavBar from '../NavBar/NavBar';

const Routes = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={RobotList} />
    </Switch>
  </Router>
);

export default Routes;
