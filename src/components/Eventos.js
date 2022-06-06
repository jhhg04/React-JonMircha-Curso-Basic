import React, { Component } from 'react';

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log('sumando');
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log('sumando');
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Class Components ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Properties Initializer
// sin constructor, se define directamente el state sin la palabra this
// y los eventos se declaran sin const por que es un metodo de clase y con arrow ()=>

export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  sumar = (e) => {
    console.log('sumando');
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    console.log('sumando');
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Class Components ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// function Boton() {
//   return <button>Boton hecho componente</button>;
// }

// function Boton(props) {
//   return <button onClick={props.myonClick}>Boton hecho componente</button>;
// }

// const Boton = (props) => (
//   <button onClick={props.myonClick}>Boton hecho componente</button>
// );

const Boton = ({ myonClick }) => (
  <button onClick={myonClick}>Boton hecho componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };
  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, 'Hola, pasando param desde Evento')
          }
        >
          Saludar
        </button>
        {/* Evento Personalizado, los Componentens no usan los metodos de JSX como obClick  */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, 'Hola, pasando param desde Evento')
          }
        /> */}
        <Boton
          myonClick={(e) =>
            this.handleClick(e, 'Hola, pasando param desde Evento')
          }
        />
      </div>
    );
  }
}
