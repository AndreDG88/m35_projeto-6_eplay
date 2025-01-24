//Arquivo de configuração do CSS da Section.
import styled from 'styled-components'
import { Props } from './section-index'
import { cores } from '../../global-styles'
import { Card } from '../Product/product-styles'

//Configuração CSS do container.
export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  //uso das props para alteração de cor dinâmica do fundo do container e dos cards.
  background-color: ${(props) =>
    props.background === 'black' ? cores.preto : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preto};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`
//Configuração CSS para o titulo do container.
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
