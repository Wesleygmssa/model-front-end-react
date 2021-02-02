import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/Global';
import { Title, Paragrafo } from './styles';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: 'BOTAO_CLICADO',
    });
    // eslint-disable-next-line no-console
    console.log('Botão clicado');
  }
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
