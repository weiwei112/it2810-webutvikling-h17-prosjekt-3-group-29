import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.nav.classList.toggle('open');
  }

  render() {
    return (
      <header>
        <nav ref={(nav) => this.nav = nav}>
          <div className='icon' onClick={this.toggleNav}>&#9776;</div>
          <ul>
            <li>
              <NavLink to='/' activeClassName='active' exact={true}>
                Activities
              </NavLink>
            </li>
            <li>
              <NavLink to='/todo' activeClassName='active' exact={true}>
                Todo
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
