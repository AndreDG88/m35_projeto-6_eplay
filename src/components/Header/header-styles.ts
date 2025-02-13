//Arquivo de configuração do CSS do Cabeçalho da página.
import styled from 'styled-components'
import { breakpoints, cores } from '../../global-styles'

//Configuração CSS dos links do menu.
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

//configuração CSS da barra de fundo.
export const Headerbar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`

//Configuração CSS do Carrinho.
export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }

  span {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

//Configuração CSS para menu mobile
export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.branco};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
