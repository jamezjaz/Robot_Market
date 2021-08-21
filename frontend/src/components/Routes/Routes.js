import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from '../../container/Cart/Cart';
import RobotList from '../../container/RobotList/RobotList';
import NavBar from '../NavBar/NavBar';

const Routes = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={RobotList} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </Router>
);

export default Routes;
