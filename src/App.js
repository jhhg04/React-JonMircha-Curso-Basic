import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <section>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </section>
        <section>
          <hr />
          <Componente msg='Hola, Soy un Func Component Exp desde una prop' />
          <hr />
          <Propiedades
            cadena='Esto es una cadena de texto'
            numero={19}
            boolean={true}
            array={[1, 2, 3]}
            object={{ nombre: 'John', email: 'john@mail.com' }}
            function={(num) => num * num}
            elementReact={<i>Esto es un Elemento de React</i>}
            componentReact={
              <Componente msg='Soy un Compoentenpasado como Prop' />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
        </section>
      </header>
    </div>
  );
}

export default App;
