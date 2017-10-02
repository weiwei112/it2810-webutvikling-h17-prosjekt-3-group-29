import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/activities' activeClassName='active' exact={true}>
                Activities
              </NavLink>
            </li>
            <li>
              <NavLink to='/todo' activeClassName='active' exact={true}>
                To-Do
              </NavLink>
            </li>
            <li>
              <NavLink to='/notes' activeClassName='active' exact={true}>
                Notes
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to='/documentation' activeClassName='active' exact={true}>
                Documentation
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
}
