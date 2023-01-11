import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';

import { Profile } from './pages/Profile';

//ReactDOM permite navegar e manipular os elementos da página
//document.getElementByid().render = Selecionar e pegar dentro do documento um elemento pelo id = "root" para renderizar um conteúdo.
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Profile />
    </ThemeProvider>
  </React.StrictMode>
)

