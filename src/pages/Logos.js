import React from 'react';
import Logo1 from '../assets/logos/bowtie.png'
import Logo2 from '../assets/logos/fitmind.png'
import Logo3 from '../assets/logos/maya.svg'
import Logo4 from '../assets/logos/medstar.svg'
import Logo5 from '../assets/logos/pana.png'
import Logo6 from '../assets/logos/simplifed.png'
import Logo7 from '../assets/logos/tmf.png'
import Logo8 from '../assets/logos/usac.png'
import Logo9 from '../assets/logos/vmp.svg'

class Logos extends React.Component {

  constructor(){
    super();
    this.state = {
      loaded: false
    };
  }

  render() {
    return(
      <div className='p-t-2-xs p-b-4-xs'>

        <div className='row middle-xs center-xs m-b-2-xs'>
          <div className='col-md col-xs-4'>
            <img
              className='img-default home-logo'
              src={Logo1}
              alt='Bowtie Logomark'
              />
          </div>
          <div className='col-md col-xs-4'>
            <img
              className='img-default home-logo'
              src={Logo2}
              alt='FitMind Logomark'
              />
          </div>
          <div className='col-md col-xs-4'>
            <img
              className='img-default home-logo'
              src={Logo3}
              alt='Maya Health Logomark'
              />
          </div>
        </div>

        <div className='row middle-xs center-xs m-b-2-xs'>
          <div className='col-md col-xs-4'>
            <img
              className='img-default home-logo'
              src={Logo4}
              alt='WISE Center Logomark'
              />
          </div>
          <div className='col-md col-xs-4'>
            <img
              className='img-default home-logo pana'
              src={Logo5}
              alt='Pana Logomark'
              />
          </div>
          <div className='col-md col-xs-4'>
            <img
              className='img-default home-logo'
              src={Logo6}
              alt='SimpliFed Logomark'
              />
          </div>
        </div>

        <div className='row middle-xs center-xs'>
          <div className='col-md col-xs-4'>
            <img
              className='img-default home-logo'
              src={Logo7}
              alt='The Motley Fool Logomark'
              />
          </div>
          <div className='col-md col-xs-3'>
            <img
              className='img-default home-logo usac'
              src={Logo8}
              alt='USA Cycling Logomark'
              />
          </div>
          <div className='col-md col-xs-4'>
            <img
              className='img-default home-logo'
              src={Logo9}
              alt='VMP Logomark'
              />
          </div>
        </div>

      </div>
    )
  }
}

export default Logos;
