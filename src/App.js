import React, { Component } from 'react';
import logo from './logo.svg';
import bear from './bear.svg'
import './sass/app.sass'

class App extends Component {
  render() {
    return (
      <div>
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
                <a>About</a>
                <a>Services</a>
                <a>Contact</a>
              </nav>
            </div>
          </div>
          <div className='row hh-text'>
            <div className='col-md-6 col-xs-12'>
              <h2 className='light-text'>Sudo Digital</h2>
              <h4 className='light-text bold'>Design that thrives, online and off.</h4>
              <h5 className='light-text'>Design firm located in Denver, CO helping brands look amazing, through a variety of creative services.</h5>
              <div className='hh-cta m-b-0-md m-b-3-xs'>
                <a className='btn btn-purple'>Start The Conversation</a>
              </div>
            </div>
            <div className='col-md-6'>
              <img
                src={bear}
                className='img-default blue-bear'
                alt='Denver Blue Bear'
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
