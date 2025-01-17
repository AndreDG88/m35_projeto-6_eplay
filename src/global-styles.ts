// Arquivo para as configurações globais do projeto.
import { createGlobalStyle } from 'styled-components'

//Constante para as variáveis de cores.
const cores = {
  branco: '#eee',
  preto: '#111',
  cinza: '#333',
  verde: '#10ac84'
}

//Constante do css clobal.
export const GlobalCss = createGlobalStyle`

  //Config. de reset do projeto.
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    body {
      background-color: ${cores.preto};
      color: ${cores.branco};
    }
  }
`
