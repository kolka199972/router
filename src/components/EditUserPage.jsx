import React from 'react'
import {NavLink, useParams} from 'react-router-dom'

const EditUserPage = () => {
  const {userId} = useParams()
  return (
    <div>
      <h1>EditUserPage</h1>
      <ul>
        <li>
          <NavLink to={`/users/${userId}`}>User Page</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${+userId + 1}`}>Another User</NavLink>
        </li>
        <li>
          <NavLink to='/users'>Users List Page</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default EditUserPage
