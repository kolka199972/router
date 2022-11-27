import React from 'react'
import {NavLink, useParams} from 'react-router-dom'

const UserPage = () => {
  const {userId} = useParams()
  return (
    <div>
      <h1>UserPage</h1>
      <ul>
        <li>
          <NavLink to='/users'>Users List Page</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${userId}/edit`}>Edit this user</NavLink>
        </li>
      </ul>
      <p>UserId: {userId}</p>
    </div>
  )
}

export default UserPage
