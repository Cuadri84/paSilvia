import React, { Component } from "react";
import {userContext} from '../../context/userContext';
class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value:''
    }
  }

  
  handleChange=(event)=> {
    this.setState({value: event.target.value});
  }
  handleSubmit=(event)=> {
    event.preventDefault();
    console.log(document.getElementById("a").value)
  }
  
  
  render() {
    
        return <div>
        <userContext.Consumer>
       
        {({user,cambiarUser}) =>
        <>
        <form onSubmit={this.handleSubmit}>
        <input id='a' type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Usuario"/>
        </form> 
        {/* {this.state.value == '' ? <p>No va</p> : <h3>{()=>cambiarUser(this.state)}</h3>} */}
        </>}

        </userContext.Consumer>
       
        </div>;
  }
}

export default Home;




//  Funciona
{/* <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Usuario"/>
    </form> */}


    // {({user,cambiarUser})=>
    //         <>
    //         <h3>user: {user} </h3>
    //         <button onClick={()=>cambiarUser('pepe')} >Cambia Nombre</button>
    //       </>}