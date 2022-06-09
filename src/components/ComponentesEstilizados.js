import React from 'react';
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

export default function ComponentesEstilizados() {
  let mainColor = '#bf4080',
    mainColor80 = '#bf408080';

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
  `;

  const MyH3 = styled.h3`
    background-color: ${mainColor};
    color: ${(props) => props.color};
    color: ${({ color }) => color};
    color: ${({ color }) => color || '#000'};
    padding: 2rem;
    text-align: center;
    /* transition: all 0.5s ease-out; */
    transition: ${setTransitionTime('1s')};
    animation: ${fadeIn} 5s ease-out;

    ${(props) =>
      props.isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `}

    &:hover {
      background-color: ${mainColor80};
    }
  `;
  const light = {
    color: '#222',
    bgColor: '#DDD',
  };

  const dark = {
    color: '#DDD',
    bgColor: '#222',
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h2{
      padding: 2rem;
      background-color:#fff;
      color:#61dafb;
      text-transform:uppercase;
    }
`;
  return (
    <>
      <GlobalStyle />
      <h2>Styled-Components</h2>
      <MyH3>Soy un h3 con Styled-Components</MyH3>
      <MyH3 color='#61dafb'>Soy un h3 con Styled-Components</MyH3>
      <MyH3 isButton>Soy un h3 con Styled como boton</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja light</Box>
        <BoxRounded>Soy una caja BoxRounded light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
        <BoxRounded>Soy una caja BoxRounded dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}
