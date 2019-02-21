import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from "../pages";


class App extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/cart' component={CartPage}/>
      </Switch>
    );
  }
}

App.propTypes = {};

export default App;
