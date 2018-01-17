import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrimaryHeader from '../ui/PrimaryHeader'
import HomePage from '../pages/HomePage'
import Registration from '../pages/Registration'

// Sub Layouts
import UserSubLayout from './UserSubLayout'

const PrimaryLayout = ({ match }) => (
  <div>
    <PrimaryHeader />
    <div>
      <Switch>
        <Route path={`${match.path}`} exact component={HomePage} />
        <Route path={`${match.path}users`} component={UserSubLayout} />
        <Route path={`${match.path}`} component={Registration} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </div>
  </div>
);
export default PrimaryLayout
