//Criação e configuração do banner da página de detalhes do jogo.
import { useDispatch } from 'react-redux'
import Button from '../Button/button-index'
import Tag from '../Tag/tag-index'
import { Banner, Infos } from './hero-styles'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils/utils-index'

type Props = {
  game: Game
}

//const principal do banner.
const Hero = ({ game }: Props) => {
  //função para adicionar um item ao carrinho.
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
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
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              title="Adicionar"
              type="button"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

//Exportações.
export default Hero
