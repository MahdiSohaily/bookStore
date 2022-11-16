import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navBar">
        <p className="logo">Book Store</p>
        <ul className={'menuNav'}>
          <li>
            <NavLink to="/">Books</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
