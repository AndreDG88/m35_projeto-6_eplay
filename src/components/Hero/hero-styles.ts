//Arquivo de configuração do CSS do hero.
import styled from 'styled-components'
import { cores } from '../../global-styles'
import { TagContainer } from '../Tag/tag-styles'

//Config CSS da div que ira receber a imagem
export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  padding-top: 16px;

  //ajuste de preenchimento da imagem.
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  //aplicação do filtro preto
  &::after {
    position: absolute;
    background-color: ${cores.preto};
    opacity: 0.56;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  //Para os textos ficarem acima do filtro.
  .container {
    z-index: 1;
    position: relative;
    //ajustando a posição dos textos.
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

//Config CSS da caixa de informações do banner.
export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preto};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`