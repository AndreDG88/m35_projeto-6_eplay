//Arquivo de criação e configuração do container de armazenamento dos cards de produto.
import Product from '../Product/product-index'
import { Container, List } from './productslist-styles'
import imagemTeste from '../../assets/images/image-teste-222x250.png'

//Configuração da tipagem das propriedades.
export type Props = {
  title: string
  background: 'gray' | 'black'
}

//Const principal do container de cards.
const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image={imagemTeste}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image={imagemTeste}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image={imagemTeste}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image={imagemTeste}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do Jogo"
        />
      </List>
    </div>
  </Container>
)

//Exportações
export default ProductsList
