//Arquivo de criação e configuração do banner de destaque da página.
import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home/home-index'
import { Imagem, Titulo, Precos } from './banner-styles'
import Tag from '../Tag/tag-index'
import Button from '../Button/button-index'
import { formataPreco } from '../ProductsList/productslist-index'

//Const principal do Banner.
const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

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
        <Button type="link" to="/produto" title="Clique e aproveite a oferta!">
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

//Exportações
export default Banner
