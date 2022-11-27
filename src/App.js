import React from 'react'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'
import MainPage from './components/MainPage'
import UsersLayout from './components/UsersLayout'

const App = () => {
  return (
    <div>
      <h1>App Layout</h1>
      <NavLink to='/users'>Users List Page</NavLink>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/users' component={UsersLayout} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App
