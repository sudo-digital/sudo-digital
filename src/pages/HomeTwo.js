import React from 'react';
import SDMarkHero from '../assets/sudo-digital-mark-lg.svg'
import phoneExplode from '../assets/phone-explode.png'
import webAppHome from '../assets/web-app-home.png'
import Nav from './Nav.js'
import Logos from './Logos.js'
import Footer from './Footer.js'

class HomeTwo extends React.Component {

  render() {
    const homePageBG = {
      background: '#151419'
    }
    const subTitleStyle = {
      color: '#FFFFFF',
      fontFamily: 'Larken, serif',
      fontSize: '2rem'
    }
    return(
      <div style={homePageBG} className='pg-home'>



        <div className='container h-hero'>
          <div className='row center-xs'>
            <div className='col-xs-12'>
              <img
                src={SDMarkHero}
                alt='Sudo Digital'
                className='h-hero-img'
                />
              <h1
                style={subTitleStyle}
                className='type-larken'>Creative Agency Based in Denver, CO
              </h1>
            </div>
          </div>
        </div>

        <div className='container-fluid home-2 bg-light-gray'>
          <div className='row p-b-2-xs'>
            <div className='col-md-6 col-xs-12'>
              <img
                src={phoneExplode}
                alt='iPhone Explode'
                className='img-default m-b-1-xs'
                />
            </div>
            <div className='col-md-6 col-xs-12 left-text-md center-text-xs'>
              <h2 className='type-larken p-t-3-md p-t-0-xs'>Extraordinary Apps</h2>
              <p className='lg'>You need an app that's not only beautiful and easy to use but also built with intentionality. Every design decision, no matter how small, can have a big impact on your app. Which is why we treat client apps like it's one of our children—with the utmost attention to detail.</p>
            </div>
          </div>
        </div>

        <div className='container home-3 bg-green'>
          <div className='row'>
            <div className='col-md-5 col-xs-12 left-text-md center-text-xs p-l-3-md p-l-0-xs'>
              <h2 className='type-larken p-t-3-md p-t-0-xs'>Beautiful Design</h2>
              <p className='lg'>Have a great product needs a design refresh? You've come to the right place. We will help your brand stand out with fresh colors, iconography, and custom illustrations.</p>
            </div>
            <div className='col-md-7 col-xs-12'>
              <img
                src={webAppHome}
                alt='Web App Example'
                className='img-default'
                />
            </div>
          </div>
        </div>

        <div className='container-fluid home-4 bg-navy'>
          <div className='row center-xs'>
            <div className='col-xs-12'>
              <h3 className='type-larken center-text-xs type-light'>Helping Brands That Serve Humanity</h3>
            </div>
          </div>
          <Logos />
        </div>

        <Footer/>

      </div>
    )
  }
}

export default HomeTwo;
