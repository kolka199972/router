import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const UsersLayout = () => {
  return (
    <div>
      <h1>Users Layout</h1>
      <NavLink to='/'>Main Page</NavLink>
      <Outlet />
      {/* <Switch>
        <Route path={path + '/:userId/profile'} component={UserPage} />
        <Route path={path + '/:userId/edit'} component={EditUserPage} />
        <Route path={path} exact component={UsersListPage} />
        <Redirect from={path + '/:userId'} to={path + '/:userId/profile'} />
      </Switch> */}
    </div>
  )
}

export default UsersLayout
