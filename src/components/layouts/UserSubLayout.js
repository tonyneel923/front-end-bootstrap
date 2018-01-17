import React from 'react'
import { Switch, Route } from 'react-router-dom'

// pages
import UserProfilePage from '../pages/UserProfilePage'

const UserSubLayout = ({ match }) => (
  <div>
    <div>
      <Switch>
        <Route path={'/users/:userId'}  component={UserProfilePage} />
      </Switch>
    </div>
  </div>
);

export default UserSubLayout
