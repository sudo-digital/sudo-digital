import React, { Component } from 'react';
import { Link, Element} from 'react-scroll'
import axios from 'axios'
import logo from './logo.svg';
import bear from './bear.svg'
import illustration from './illustration.svg'
import './sass/app.sass'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios.post(`https://hooks.zapier.com/hooks/catch/4591901/pxpqd2/`,
      {
        headers: {'Access-Control-Allow-Origin': '*'},
        data: user
      }
    )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  render() {
    const logos = '/images/sudo-digi-logos.png'
    const webMobile = '/images/sd-web-mobile.png'
    const sudoCat = '/images/sudo-cat.png'

    return (
      <div className='app'>

        <div className='container-fluid header home-hero'>
          <div className='row middle-xs between-xs'>
            <div className='col-md-2 col-md-offset-0 col-xs-8 col-xs-offset-2'>
              <img
                src={logo}
                className='logo'
                alt='Sudo Digital Logo'
                />
            </div>
            <div className='col-md-10 col-xs-12 end-xs'>
              <nav>
                <Link to='services' smooth={true} duration={500}>Services</Link>
                <Link to='about' smooth={true} duration={500}>About</Link>
                <Link to='contact' smooth={true} duration={500}>Contact</Link>
              </nav>
            </div>
          </div>
          <div className='row hh-text'>
            <div className='col-md-6 col-xs-12'>
              <h2 className='light-text'>Sudo Digital</h2>
              <h4 className='light-text bold'>Design that thrives, online and off.</h4>
              <h5 className='light-text'>Design firm located in Denver, CO helping small and large brands with a variety of creative services.</h5>
              <div className='hh-cta m-b-0-md m-b-3-xs'>
                <Link to='contact' className='btn btn-purple'>Start The Conversation</Link>
              </div>
            </div>
            <div className='col-md-6 p-t-7-md p-t-0-xs'>
              <img
                src={bear}
                className='img-default blue-bear'
                alt='Denver Blue Bear'
                />
            </div>
          </div>
        </div>

        <Element className='container-fluid home-services pad-section' name='services'>
          <div className='row'>
            <div className='col-md-6 col-xs-12 p-t-4-md p-t-0-xs'>
              <p className='section'>services</p>
              <h3>Logo</h3>
              <p className='bold large p-r-4-md p-r-0-xs'>You need a logo that stands out from the crowd that doesn't cost a fortune. We'll quickly create a logo for use anywhere it's needed.</p>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img
                src={logos}
                className='img-default'
                alt='Bird Logo'
                />
            </div>
          </div>
        </Element>

        <div className='container-fluid pad-section'>
          <div className='row'>
            <div className='col-md-8 col-xs-12 p-r-2-md p-r-0-xs'>
              <img
                src={webMobile}
                className='img-default web-mobile'
                alt='Web and Mobile Mockup'
                />
            </div>
            <div className='col-md-4 col-xs-12'>
              <p className='section p-t-4-md p-t-2-xs'>services</p>
              <h3>Web & Mobile</h3>
              <p className='bold large p-r-4-md p-r-0-xs'>You need a logo that stands out from the crowd that doesn't cost a fortune. We'll quickly create a logo for use anywhere it's needed.</p>
            </div>
          </div>
        </div>

        <div className='container-fluid pad-section'>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              <p className='section'>services</p>
              <h3>Illustration</h3>
              <p className='bold large p-r-4-md p-r-0-xs'>You need a logo that stands out from the crowd that doesn't cost a fortune. We'll quickly create a logo for use anywhere it's needed.</p>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img
                src={illustration}
                className='img-default'
                alt='Bike Illustration'
                />
            </div>
          </div>
        </div>

        <Element className=' container-fluid pad-section about blue-1-bg' name='about'>
          <div className='row'>
            <div className='col-md-3 col-xs-12'>
              <img
                src={sudoCat}
                className='img-default sudo-cat'
                alt='Sudo Cat Sudo Digital'
                />
            </div>
            <div className='col-md-1 col-xs-12' />
            <div className='col-md-8 col-xs-12'>
              <p className='section blue'>about</p>
              <h3>Hello!</h3>
              <p className='large bold'>Sudo Digital, named after my cat Sudo, is a design firm located in Denver, CO. The real person behind the designs is <a className='paul-link' href='https://www.paulballas.com/' target='_blank' rel='noopener noreferrer'>Paul Ballas</a>, a designer with over 11 years of professional experience.</p>

              <p className='large bold'>Your design won't be outsourced to another person or company. I design (and code if you want) 100% of the designs myself. I treat each project with the utmost care while also delivering quickly.</p>
            </div>
          </div>
        </Element>

        <Element className='container-fluid pad-section contact' name='contact'>
          <div className='row'>

            <div className='col-md-6 col-xs-12'>
              <p className='section'>contact</p>
              <h3>Let's Chat</h3>
              <p className='large bold'>Fill out the form to start working with Sudo Digital.</p>
            </div>

            <div className='col-md-6 col-xs-12'>
              <form className='row' onSubmit={this.handleSubmit}>
                <div className='col-md-6 col-xs-12'>
                  <label>Name</label>
                  <input type='text' name='name' placeholder='Name...' />
                </div>
                <div className='col-md-6 col-xs-12'>
                  <label>Email Address</label>
                  <input type='email' name='email' placeholder='Email...' />
                </div>
                <div className='col-xs-12'>
                  <label>Message</label>
                  <textarea name='message' placeholder='How can Sudo Digital help?' />
                </div>
                <div className='col-xs-12'>
                  <input type='submit' value='Send Message'/>
                </div>
              </form>
            </div>

          </div>
        </Element>

        <div className='container-fluid footer white-1-bg pad-section-small'>
          <div className='row center-xs middle-xs'>
            <div className='col-md-3 col-xs-12'>
              <img
                src={logo}
                className='img-default footer'
                alt='Sudo Digital Logo'
                />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
