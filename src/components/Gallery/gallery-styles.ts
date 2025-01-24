//Arquivo de criação do css das falerias.
import styled from 'styled-components'
import { cores } from '../../global-styles'

//css da listagem
export const Items = styled.ul`
  display: flex;
`

//css do li.
export const Item = styled.li`
  margin-right: 16px;

  img {
    border: 2px solid ${cores.branco};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`
