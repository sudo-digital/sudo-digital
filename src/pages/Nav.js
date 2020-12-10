import React from 'react';
import { NavLink } from "react-router-dom"
import SDLogoMark from '../assets/sudo-digital-mark-pink.svg'

class Nav extends React.Component {

  logomark = () => {
    if (this.props.logo) {
      return (
        <NavLink to='/'>
          <img
            src={SDLogoMark}
            alt='Sudo Digital Logomark'
            className='img-default'
             />
        </NavLink>
      )
    }
  }

  render() {
    return (
      <header
        style={{background: '#151419'}}
        className='container-full header'>
        <div className='row middle-xs'>
          <div className='col-md-1 col-xs-12'>
            {this.logomark()}
          </div>
          <div className='col-md-11 col-xs-12 end-md center-xs'>
            <NavLink
              className='nav'
              activeClassName='active'
              to="/services">Services

            </NavLink>
            <NavLink
              className='nav'
              activeClassName='active'
              to="/clients">Clients

            </NavLink>
            <NavLink
              className='nav'
              activeClassName='active'
              to="/about">About

            </NavLink>
            <NavLink
              className='nav'
              activeClassName='active'
              to="/contact">Contact

            </NavLink>
          </div>
        </div>
      </header>
    )
  }
}

export default Nav;
