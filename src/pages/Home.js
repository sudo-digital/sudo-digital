import React, { Component } from 'react';
import sudoDigiHero from '../assets/sudoDigiHero.svg'

class Home extends Component {

  render() {
    const homeHero = sudoDigiHero
    return(
      <div className='container-fluid home purple-2-bg'>
        <div className='row'>
          <div className='col-xs-12 awesome-hero'>
            <img
              src={sudoDigiHero}
              alt='Sudo Digital'
              className='img-default'
              />
            <p>Since 2014, we’ve helped startups and top companies design and build amazing products.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2'>      
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
