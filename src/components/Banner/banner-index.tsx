//Arquivo de criação e configuração do banner de destaque da página.
import { Imagem, Titulo, Precos } from './banner-styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

//Const principal do Banner.
const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Precos>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,00
      </Precos>
    </div>
  </Imagem>
)

//Exportações
export default Banner
