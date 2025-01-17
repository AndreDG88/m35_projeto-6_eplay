//Arquivo de criação e configuração do cabeçalho da página.
import { Headerbar, Links, LinkItem, LinkCart } from './header-styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

//Const principal do Cabeçalho.
const Header = () => (
  <Headerbar>
    <div>
      {/* logo */}
      <img src={logo} alt="EPLAY" />

      {/* links de menu */}
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>

    {/* carrinho */}
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </Headerbar>
)

//Exportações
export default Header
