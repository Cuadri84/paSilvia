import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {userContext} from './context/userContext';
import Head from "./components/Head/Head";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

//CSS
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: '',
        cambiarUser: this.cambiarUser
    };
  }
  // COn este state estoy dando el user a todos los usercontext 
  cambiarUser = (name) => {
    this.setState({user:name})
  }


  render() {
  return (
    <div className="App">

    <userContext.Provider value={this.state}>
      <Router>
        <Head/>
        <Main/>  
      </Router>
      <Footer/>
      </userContext.Provider>
    </div>
  );
  }
}

export default App;
