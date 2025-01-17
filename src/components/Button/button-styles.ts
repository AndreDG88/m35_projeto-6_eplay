//Arquivo de configuração do CSS dos botões.
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../global-styles'

//configuração CSS do container.
export const ButtonContainer = styled.button`
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
//configuração Para o link com react-router-dom.
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`