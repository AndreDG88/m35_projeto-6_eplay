//Criação e configuração do banner da página de detalhes do jogo.
import bannerHogwarts from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button/button-index'
import Tag from '../Tag/tag-index'
import { Banner, Infos } from './hero-styles'

//const principal do banner.
const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerHogwarts})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>

      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Button variant="primary" title="Adicionar" type="button">
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

//Exportações.
export default Hero
