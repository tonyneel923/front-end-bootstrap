import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PrimaryHeader from '../ui/PrimaryHeader/PrimaryHeader';

// Sub Layouts
import UserSubLayout from './UserSubLayout';

const PrimaryLayout = ({ match }) => (
  <div>
    <PrimaryHeader />
    <div>
      <Switch>
        <Route path={'/'} exact component={HomePage} />
        <Route path={'/users'} component={UserSubLayout} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  </div>
);

export default PrimaryLayout;
