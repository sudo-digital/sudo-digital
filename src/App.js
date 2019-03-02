import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/app.sass'

class App extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-12'>
              <p>Hello World!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
