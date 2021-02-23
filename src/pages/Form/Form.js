import React, { Component } from "react";
import Card from '../../components/Card/Card'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mensaje: false,
      value: "",
      tareas: "",
    };
  }



  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.setState({ mensaje: true });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.setState({ tareas: [...this.state.tareas, this.state.value] });
    this.setState({
      value: "",
    });
  };

  pintar = () => {
    return this.state.tareas === ""
      ? <> </>
      : this.state.tareas.map((n, i) => (
          <Card tarea={n} key={i} borrar={() => this.borraUno(i)} />
        ));
    //aqui le paso 3 props una de ellas una funcion que el hijo puede ejecutar cuando quiera
  };

  borraUno = (i) => {
    let arr_filtrado = this.state.tareas.filter((item, key) => key !== i);
    this.setState({ tareas: arr_filtrado });
  };

 

 

  render() {
    return (
      <div>
        <form className="formulario" onSubmit={this.handleSubmit}>
          <label>
            <h1>Nueva Noticia:</h1>
            <input
              type="text"
              name="name"
              className="texto"
              autoComplete="off"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          {this.state.mensaje === false ? (
            <> </>
          ) : (
            <input type="submit" value="ADD" className="button" />
          )}
          {/* ternario que hace que no se muestre el boton add hasta que escribas */}
        </form>
        

        <div className="fondoList">{this.pintar()}</div>


      </div>
    );
  }
}

export default Form;
