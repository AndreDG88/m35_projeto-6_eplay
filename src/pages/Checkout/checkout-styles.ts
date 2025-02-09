//Arquivo de estilização CSS dos elementos de Checkout.
import styled from 'styled-components'
import { cores } from '../../global-styles'

//CSS para as divs que representam as "Linhas" que agrupam os inputs.
export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

//CSS para a div que compõe um grupo de input individual (label + input).
export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${cores.branco};
    border: 1px solid ${cores.branco};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
