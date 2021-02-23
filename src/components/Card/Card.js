import React, { Component } from "react";

class Card extends Component {
  render() {
    return <div>
      <p>{this.props.tarea}</p>
      <button onClick={this.props.borrar} >Borrar Noticia</button>
    </div>;
  }
}

export default Card;
