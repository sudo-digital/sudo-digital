import React from 'react';
import { NavLink, Link } from "react-router-dom"
import SDLogoMark from '../assets/sudo-digital-mark-pink.svg'

class Footer extends React.Component {

  render() {
    return(
        <footer className='container-fluid footer'>
          <div className='row center-xs middle-xs'>

            <div className='col-md-4 col-xs-12 col-xs-12 m-b-0-md m-b-2-xs'>
              <h4 className='type-larken'>Ready to chat?</h4>
              <p>Reach us at info@sudodigital.com</p>
              <a href='mailto:info@sudodigital.com' className='btn primary'>Send An Email</a>
            </div>

            <div className='col-md-4 col-xs-12 m-b-0-md m-b-2-xs'>
              <NavLink to='/'>
                <img
                  src={SDLogoMark}
                  alt='Sudo Digital Logomark'
                  className='img-default footer-logo'
                   />
              </NavLink>
            </div>

            <div className='col-md-4'>
              <Link
                className='footer-link'
                to='/services'>
                Services
              </Link>

              <Link
                className='footer-link'
                to='/clients'>
                Clients
              </Link>

              <Link
                className='footer-link'
                to='/about'>
                About
              </Link>

              <Link
                className='footer-link'
                to='/contact'>
                Contact</
                Link>
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer;
