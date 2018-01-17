import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrimaryHeader from '../ui/PrimaryHeader'
import HomePage from '../pages/HomePage'

// Sub Layouts
import UserSubLayout from './UserSubLayout'

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
export default PrimaryLayout
