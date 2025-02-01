//Arquivo de criação e configuração do banner de destaque da página.
import { Imagem, Titulo, Precos } from './banner-styles'
import Tag from '../Tag/tag-index'
import Button from '../Button/button-index'
import { formataPreco } from '../ProductsList/productslist-index'
import { useGetFeaturedGameQuery } from '../../services/api'

//Const principal do Banner.
const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique e aproveite a oferta!"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

//Exportações
export default Banner
