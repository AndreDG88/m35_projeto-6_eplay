//Arquivo de configuração da área de carrinho da página.
import { RootReducer } from '../../store/store-index'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/button-index'
import * as S from './cart-styles'
import Tag from '../Tag/tag-index'
import { close, remove } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils/utils-index'

//Função principal do carrinho.
const Cart = () => {
  //Estado para controlar se o carrinho está aberto ou fechado.
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  //função de soma dos valores
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  //função de remoção de um item do carrinho.
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      {/* overlay */}
      <S.Overlay onClick={closeCart} />
      {/* barra lateral*/}
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button title="Clique para ir para a compra" type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

//exportações.
export default Cart
