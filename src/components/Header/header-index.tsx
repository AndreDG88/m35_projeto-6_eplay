//Arquivo de criação e configuração do cabeçalho da página.
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store-index'
import { HashLink } from 'react-router-hash-link'
import * as S from './header-styles'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'
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
    <S.Headerbar>
      <S.HeaderRow>
        <div>
          {/* Menu para Mobile - aparece apenas na visão smartphone */}
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>

          {/* logo */}
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>

          {/* links de menu */}
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique para e veja nossas próximas novidades."
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique para e veja nossas Promoções."
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>

        {/* carrinho */}
        <S.CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cartIcon} alt="carrinho" />
        </S.CartButton>
      </S.HeaderRow>

      {/* Menu para Mobile - aparece apenas na visão smartphone */}
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Clique para acessar a página de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique para e veja nossas próximas novidades."
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique para e veja nossas Promoções."
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.Headerbar>
  )
}

//Exportações
export default Header
