import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primaryColor: #C3073F;
  --primaryDarkColor: #1A1A1D;
  --SuccessColor: #0197f5;
  --infoColor: #0197f6;
  --errorColor: #F2AF29;
  --warningColor: #F2AF29;

}
  *{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background: var(--primaryDarkColor);
    color: var(--primaryColor);

  }

  html, body, #root{
    height: 100%;
  }
  button{
    cursor: pointer;
    background: var(--primaryColor);
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 24px;
    font-weight: 700;
  }

  a{
    text-decoration: none;
    color: var(--primaryColor);

  }

  ul{
    list-style: none;
  }
`;

export const Container = styled.div`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
