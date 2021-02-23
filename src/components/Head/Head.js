import React, { Component } from "react";
import Nav from "./Nav/Nav";
import {userContext} from '../../context/userContext';

class Head extends Component {
  render() {
    return <div>
      <h1>NOTICIAS REACT</h1>
      <userContext.Consumer>
        
          {context=><h3>user:{context.user}</h3>}
        
        </userContext.Consumer>
      <Nav/>
      </div>;
  }
}

export default Head;
