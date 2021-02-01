import React from 'react';
import Login from './pages/Login';
import GlobalStyle, { Container } from './styles/Global';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Login />
    </Container>
  );
}

export default App;
