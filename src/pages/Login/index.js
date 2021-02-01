import React from 'react';
import { Container } from '../../styles/Global';
import { Title, Paragrafo } from './styles';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
