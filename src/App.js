import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import './sass/app.sass'

import Home from './pages/Home'
import HomeTwo from './pages/HomeTwo'
import Services from './pages/Services'

class App extends Component {

  render() {
    return(
      <Router>
        <Route path="/" exact component={HomeTwo} />
        <Route path="/services" exact component={Services} />
      </Router>
    )
  }
}

export default App;
