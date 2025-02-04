//Arquivo de configuração da área de carrinho da página.
import Button from '../Button/button-index'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './cart-styles'
import StarWars from '../../assets/images/star_wars.png'
import Tag from '../Tag/tag-index'

//Função principal do carrinho.
const Cart = () => (
  <CartContainer>
    {/* overlay */}
    <Overlay />
    {/* barra lateral*/}
    <Sidebar>
      <ul>
        <CartItem>
          <img src={StarWars} />
          <div>
            <h3>Name</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={StarWars} />
          <div>
            <h3>Name</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button title="Clique para ir para a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

//exportações.
export default Cart
