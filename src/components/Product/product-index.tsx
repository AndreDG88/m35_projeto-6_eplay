//Arquivo de criação e configuração dos cards de produtos da página.
import Tag from '../Tag/tag-index'
import * as S from './product-styles'

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
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }

  return (
    <S.Card
      title={`Clique aqui e saiba mais detalhes sobre ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

//Exportações
export default Product
