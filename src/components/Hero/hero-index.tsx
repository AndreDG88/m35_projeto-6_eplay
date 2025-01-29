//Criação e configuração do banner da página de detalhes do jogo.
import { Game } from '../../pages/Home/home-index'
import Button from '../Button/button-index'
import Tag from '../Tag/tag-index'
import { Banner, Infos } from './hero-styles'
import { formataPreco } from '../ProductsList/productslist-index'

type Props = {
  game: Game
}

//const principal do banner.
const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>

      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button variant="primary" title="Adicionar" type="button">
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

//Exportações.
export default Hero
