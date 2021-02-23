import React, { Component } from "react";
import {Link} from 'react-router-dom'

import './Nav.css'

class Nav extends Component {
  render() {
    return <nav>
        <ul className="navBar">
        
        <li><Link to="/">Home </Link></li>
        <li><Link to="/form">Form </Link></li>
        <li><Link to="/list">ListNews</Link> </li>
        
      </ul>
    </nav>;
  }
}

export default Nav;
