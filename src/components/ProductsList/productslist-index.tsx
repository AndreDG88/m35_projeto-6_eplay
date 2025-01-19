//Arquivo de criação e configuração do container de armazenamento dos cards de produto.
import Product from '../Product/product-index'
import { Container, List } from './productslist-styles'

//Configuração da tipagem das propriedades.
type Props = {
  title: string
  background: 'gray' | 'black'
}

//Const principal do container de cards.
const ProductsList = ({ background, title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

//Exportações
export default ProductsList
