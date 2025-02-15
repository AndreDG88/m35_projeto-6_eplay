//Arquivo de criação e configuração do container de armazenamento dos cards de produto.
import { Game } from '../../pages/Home/home-index'
import Product from '../Product/product-index'
import { Container, List } from './productslist-styles'
import { parseToBrl } from '../../utils/utils-index'

//Configuração da tipagem das propriedades.
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

//Const principal do container de cards.
const ProductsList = ({ background, title, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

//Exportações
export default ProductsList
