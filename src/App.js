import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthorizedRoute from './AuthorizedRoute';
import PrimaryLayout from './components/layouts/PrimaryLayout';
import UnauthorizedLayout from './components/layouts/UnauthorizedLayout';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/" component={PrimaryLayout} />
          <Redirect to="/auth" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
