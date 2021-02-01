import React from 'react';
import Login from './pages/Login';
import GlobalStyle from './styles/Global';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Login />
    </>
  );
}

export default App;
