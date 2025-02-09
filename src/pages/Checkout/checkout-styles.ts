//Arquivo de estilização CSS dos elementos de Checkout.
import styled from 'styled-components'
import { cores } from '../../global-styles'

//Configuração de Tipagem.
type inputGroupProps = {
  maxWidth?: string
}

type rowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

//CSS para as divs que representam as "Linhas" que agrupam os inputs.
export const Row = styled.div<rowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
`

//CSS para a div que compõe um grupo de input individual (label + input).
export const InputGroup = styled.div<inputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${cores.branco};
    border: 1px solid ${cores.branco};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branco};
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preto)};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
