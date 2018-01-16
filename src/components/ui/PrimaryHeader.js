import React from 'react'
import { NavLink } from 'react-router-dom'

const PrimaryHeader = () => (
  <header className="primary-header">
    <h1>Welcome to our app!</h1>
    <nav>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/users/3" activeClassName="active">Users</NavLink>
      <NavLink to="/products" activeClassName="active">Products</NavLink>
    </nav>
  </header>
)

export default PrimaryHeader
