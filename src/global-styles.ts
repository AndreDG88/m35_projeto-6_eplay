// Arquivo para as configurações globais do projeto.
import { createGlobalStyle } from 'styled-components'

//Constante para as variáveis de colors.
export const colors = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  lightGray: '#a3a3a3',
  green: '#10ac84'
}

//configurações dos formatos para o responsivo.
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

//Constante do css clobal.
export const GlobalCss = createGlobalStyle`

  //Config. de reset do projeto.
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;

    body {
      background-color: ${colors.black};
      color: ${colors.white};
      padding-top: 40px;
    }
  }

  //Configuração do container principal do projeto.
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    //responsivo
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
  }
`
