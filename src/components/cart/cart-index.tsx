//Arquivo de configuração da área de carrinho da página.
import { RootReducer } from '../../store/store-index'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/button-index'
import * as S from './cart-styles'
import Tag from '../Tag/tag-index'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils/utils-index'

//Função principal do carrinho.
const Cart = () => {
  //Estado para controlar se o carrinho está aberto ou fechado.
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  //função de remoção de um item do carrinho.
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  //Função para que ao clicar no botão de "Continuar com a compra", além de levar para o checkout, ele também feche o carrinho.
  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      {/* overlay */}
      <S.Overlay onClick={closeCart} />
      {/* barra lateral*/}
      <S.Sidebar>
        {items.length > 0 ? (
          <>
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
              Total de {parseToBrl(getTotalPrice(items))}{' '}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              onClick={goToCheckout}
              title="Clique para ir para a compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, deve ter ao menos um item adicionado para
            poder seguir com a compra.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

//exportações.
export default Cart
