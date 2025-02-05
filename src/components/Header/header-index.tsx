//Arquivo de criação e configuração do cabeçalho da página.
import { Link } from 'react-router-dom'
import { Headerbar, Links, LinkItem, CartButton } from './header-styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store-index'

//Const principal do Cabeçalho.
const Header = () => {
  //const para função de abrir a área do carrinho.
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart) //Para ler as propriedades do reducer e contar os itens do carrinho

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Headerbar>
      <div>
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
        {items.length} - produto(s)
        <img src={carrinho} alt="carrinho" />
      </CartButton>
    </Headerbar>
  )
}

//Exportações
export default Header
