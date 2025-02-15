//Arquivo de criação e configuração do cabeçalho da página.
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store-index'
import { HashLink } from 'react-router-hash-link'
import {
  Headerbar,
  Links,
  LinkItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './header-styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'

//Const principal do Cabeçalho.
const Header = () => {
  //const para função de abrir a área do carrinho.
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart) //Para ler as propriedades do reducer e contar os itens do carrinho
  const [isMenuOpen, setIsMenuOpen] = useState(false) //Para fazer a função da abertura do menu mobile.

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Headerbar>
      <HeaderRow>
        <div>
          {/* Menu para Mobile - aparece apenas na visão smartphone */}
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>

          {/* logo */}
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>

          {/* links de menu */}
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique para e veja nossas próximas novidades."
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique para e veja nossas Promoções."
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>

        {/* carrinho */}
        <CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </CartButton>
      </HeaderRow>

      {/* Menu para Mobile - aparece apenas na visão smartphone */}
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              title="Clique para acessar a página de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique para e veja nossas próximas novidades."
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique para e veja nossas Promoções."
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </Headerbar>
  )
}

//Exportações
export default Header
