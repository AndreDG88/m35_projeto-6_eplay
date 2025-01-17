//Arquivo de configuração do CSS do Cabeçalho da página.
import styled from 'styled-components'
import { cores } from '../../global-styles'

//configuração CSS da barra de fundo.
export const Headerbar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

//Configuração CSS dos links do menu.
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`

//Configuração CSS do Carrinho.
export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
