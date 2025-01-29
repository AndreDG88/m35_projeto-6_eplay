//Arquivo de criação e configuração dos cards de produtos da página.
import Tag from '../Tag/tag-index'
import { Card, Descricao, Titulo, Infos } from './product-styles'

//Configuração de tipagem das Propriedades.
type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

//Const principal do card.
const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  //função para reduzir textos.
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}

//Exportações
export default Product
