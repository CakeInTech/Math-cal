/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './page.css';

const links = [
  {
    id: 1,
    path: '/home',
    text: 'home',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: 'about',
    text: 'About',
  },

];

class Navbar extends PureComponent {
  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg special-nav">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Math Magician</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
              <ul className="navbar-nav">
                {links.map((pages) => (
                  <li className="nav-item" key={pages.id}>
                    {/* <a className={({ isActive }) => (isActive ? activeLink : undefined)}> */}
                    <NavLink
                      to={pages.path}
                      className="nav-link"
                    >
                      {pages.text}
                    </NavLink>
                    {/* </a> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
