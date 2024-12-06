import React from 'react'
import { useRouteError,NavLink } from 'react-router-dom'

const Error = () => {
  const err = useRouteError();
    return (
    <div>
      <h1>Error Occured</h1>
      {err && <p>{err.data}</p> }
      <NavLink to='/'>
        <button>Go Home</button>
      </NavLink>
    </div>
  )
}

export default Error
