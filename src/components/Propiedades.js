import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades(props) {
  return (
    <div>
      <h1>Propiedades</h1>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.boolean ? 'True' : 'False'}</li>
        <li>{props.array.join(', ')}</li>
        <li>{props.object.nombre + ' - ' + props.object.email}</li>
        <li>{props.array.map(props.function).join(', ')}</li>
        <li>{props.elementReact}</li>
        <li>{props.componentReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: 'Las Props',
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
