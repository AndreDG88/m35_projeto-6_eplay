//Arquivo de configuração do CSS das tags.
import styled from 'styled-components'
import { colors } from '../../global-styles'
import { Props } from './tag-index'

//configuração CSS do container.
export const TagContainer = styled.div<Props>`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
`
