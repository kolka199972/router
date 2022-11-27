import React from 'react'
import {NavLink, Redirect, Route, Switch, useRouteMatch} from 'react-router-dom'
import EditUserPage from './EditUserPage'
import UserPage from './UserPage'
import UsersListPage from './UsersListPage'

const UsersLayout = () => {
  const {path} = useRouteMatch()
  return (
    <div>
      <h1>Users Layout</h1>
      <NavLink to='/'>Main Page</NavLink>
      <Switch>
        <Route path={path + '/:userId/profile'} component={UserPage} />
        <Route path={path + '/:userId/edit'} component={EditUserPage} />
        <Route path={path} exact component={UsersListPage} />
        <Redirect from={path + '/:userId'} to={path + '/:userId/profile'} />
      </Switch>
    </div>
  )
}

export default UsersLayout
