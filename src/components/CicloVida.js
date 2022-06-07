import React, { Component } from 'react';

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(4, 'El componente se ha eliminado del DOM');
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}
export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, 'El Componente se inicializa, aun NO esta en el DOM');

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.tempo = null;
  }

  componentDidMount() {
    console.log(2, 'El componente ya se encuentra en el DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(3, 'El Estado o las props del  componente han cambiado');
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.tempo = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  init = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };
  stop = () => {
    clearInterval(this.tempo);
    this.setState({
      visible: false,
    });
  };
  render() {
    console.log(
      1,
      'El Componente se dibuja (o redibuja por algun cambio)en el DOM'
    );
    return (
      <>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.init}>init</button>
        <button onClick={this.stop}>stop</button>
      </>
    );
  }
}
