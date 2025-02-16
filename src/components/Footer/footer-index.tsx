//Arquivo de criação e configuração do rodapé da página.
import * as S from './footer-styles'

//Const para controle de atualização do ano.
const currentYear = new Date().getFullYear()

//Const principal do rodapé.
const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          {/* Para as # dos links funcionarem deve instalar o plugin "npm install --save react-router-hash-link" e o "npm install --save-dev @types/react-router-hash-link"*/}
          <li>
            <S.Link
              title="Clique para acessar nossos jogos de RPG."
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique para acessar nossos jogos de Ação."
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique para acessar nossos jogos de Esportes."
              to="/categories#sports"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique para acessar nossos jogos de Simulação."
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique para acessar nossos jogos de Luta."
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique para acessar a seção de promoções."
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique para ver os próximos lançamentos."
              to="/#coming-soon"
            >
              Em Breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.Copyright>
        {currentYear} - &copy; E-PLAY Todos os direitos reservados, página
        criada para fins de estudo. Criado por{' '}
        <a href="https://www.linkedin.com/in/andre-soares88/">André Soares</a>,
        veja mais projetos no meu{' '}
        <a href="https://github.com/AndreDG88">Github</a>.
      </S.Copyright>
    </div>
  </S.Container>
)

//Exportações.
export default Footer
