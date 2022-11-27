import React from 'react'
import {Navigate, NavLink, Outlet, useRoutes} from 'react-router-dom'
import EditUserPage from './components/EditUserPage'
import MainPage from './components/MainPage'
import UserPage from './components/UserPage'
import UsersLayout from './components/UsersLayout'
import UsersListPage from './components/UsersListPage'

const App = () => {
  const routes = useRoutes([
    {path: '', element: <MainPage />},
    {
      path: 'users',
      element: <UsersLayout />,
      children: [
        {index: true, element: <UsersListPage />},
        {
          path: ':userId',
          element: <Outlet />,
          children: [
            {path: 'profile', element: <UserPage />},
            {path: 'edit', element: <EditUserPage />},
            {index: true, element: <Navigate to='./profile' />},
            {path: '*', element: <Navigate to='../profile' />}
          ]
        }
      ]
    },
    {path: '*', element: <Navigate to='' />}
  ])
  return (
    <div>
      <h1>App Layout</h1>
      <NavLink to='/users'>Users List Page</NavLink>
      {routes}
      {/* <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/users' component={UsersLayout} />
        <Redirect to='/' />
      </Switch> */}
    </div>
  )
}

export default App
