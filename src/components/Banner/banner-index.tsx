//Arquivo de criação e configuração do banner de destaque da página.
import { Image, Title, Prices } from './banner-styles'
import Tag from '../Tag/tag-index'
import Button from '../Button/button-index'
import { parseToBrl } from '../../utils/utils-index'
import { useGetFeaturedGameQuery } from '../../services/api'

//Const principal do Banner.
const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique e aproveite a oferta!"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

//Exportações
export default Banner
