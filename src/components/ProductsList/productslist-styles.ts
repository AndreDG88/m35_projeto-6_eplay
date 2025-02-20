//Arquivo de configuração do CSS do container de cards de produto.
import styled from 'styled-components'
import { Props } from './productslist-index'
import { breakpoints, colors } from '../../global-styles'
import { Card } from '../Product/product-styles'

//Configuração CSS do container.
export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  //uso das props para alteração de cor dinâmica do fundo do container e dos cards.
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }
`

//Configuração CSS da lista do container.
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  //Responsivo
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

//Configuração CSS para o titulo do container.
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
