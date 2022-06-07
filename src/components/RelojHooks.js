import React, { useState, useEffect } from 'react';

function Reloj({ hora }) {
  return <h3>{hora}</h3>;
}

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let tempo;

    if (visible) {
      tempo = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(tempo);
    }
    return () => {
      clearInterval(tempo);
      console.log('Fase de desmontaje');
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj-Hooks useEffect</h2>
      {visible && <Reloj hora={hora} />}
      <button onClick={() => setVisible(true)}>init</button>
      <button onClick={() => setVisible(false)}>stop</button>
    </>
  );
}
