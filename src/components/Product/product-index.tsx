//Arquivo de criação e configuração dos cards de produtos da página.
import Tag from '../Tag/tag-index'
import { Card, Descricao, Titulo } from './product-styles'

//Const principal do card.
const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
      eligendi, totam libero cum exercitationem eaque saepe. Blanditiis
      quibusdam, ad quidem commodi, culpa aperiam similique ea delectus iure
      ipsa dolor consequuntur!
    </Descricao>
  </Card>
)

//Exportações
export default Product
