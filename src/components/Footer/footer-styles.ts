//Arquivo de configuração do CSS do rodapé da página.
import styled from 'styled-components'
import { colors } from '../../global-styles'
import { HashLink } from 'react-router-hash-link'

//Configuração CSS do container do rodapé
export const Container = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`

//Configuração CSS dos títulos.
export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`

//Configuração CSS da lista de links.
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

//Configuração CSS dos Links.
export const Link = styled(HashLink)`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`

//Configuração CSS do copyright.
export const Copyright = styled.p`
  a {
    color: ${colors.green};
    text-decoration: none;
    cursor: pointer;
  }
`
