import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log('Moviendo Scroll, cada ves que la depemcia cambie[scroll]');
    const detectarScroll = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener('scroll', detectarScroll);

    return () => {
      window.removeEventListener('scroll', detectarScroll);
      console.log('Fase de Desmontaje');
    };
  }, [scrollY]);

  useEffect(() => {
    console.log('Fase de Montaje, solo al inicio por tener [] vacio');
  }, []);

  useEffect(() => {
    console.log('Fase de Update, carga en cada update si no tiene[]');
  });

  useEffect(() => {
    return () => {
      console.log(
        'Fase de desmontaje,para desuscribirce a eventeos y peticiones si tiene un return y no tiene[]'
      );
    };
  });

  return (
    <>
      <h2>Hooks-useEffect y el CicloVida</h2>
      <p>ScrollY del navegador {scrollY} px</p>
    </>
  );
}
