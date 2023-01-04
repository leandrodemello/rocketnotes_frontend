import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import { Details } from './pages/Details';


//ReactDOM permite navegar e manipular os elementos da página
//document.getElementByid().render = Selecionar e pegar dentro do documento um elemento pelo id = "root" para renderizar um conteúdo.
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  </React.StrictMode>
)

