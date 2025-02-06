//Arquivo de criação e configuração do rodapé da página.
import {
  Container,
  Copyright,
  FooterSection,
  Link,
  Links,
  SectionTitle
} from './footer-styles'

//Const para controle de atualização do ano.
const currentYear = new Date().getFullYear()

//Const principal do rodapé.
const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          {/* Para as # dos links funcionarem deve instalar o plugin "npm install --save react-router-hash-link" e o "npm install --save-dev @types/react-router-hash-link"*/}
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">Ação</Link>
          </li>
          <li>
            <Link to="/categories#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categories#fight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <Copyright>
        {currentYear} - &copy; E-PLAY Todos os direitos reservados, página
        criada para fins de estudo. Criado por{' '}
        <a href="https://www.linkedin.com/in/andre-soares88/">André Soares</a>,
        veja mais projetos no meu{' '}
        <a href="https://github.com/AndreDG88">Github</a>.
      </Copyright>
    </div>
  </Container>
)

//Exportações.
export default Footer
