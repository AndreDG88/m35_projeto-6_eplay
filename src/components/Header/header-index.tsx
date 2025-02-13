//Arquivo de criação e configuração do cabeçalho da página.
import { Link } from 'react-router-dom'
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
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store-index'
import { useState } from 'react'

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
                <Link to="/categories">Categorias</Link>
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
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </NavMobile>
    </Headerbar>
  )
}

//Exportações
export default Header
