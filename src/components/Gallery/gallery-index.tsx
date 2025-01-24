//Arquivo de configuração para as galerias de imagens e vídeos dos jogos.
import Section from '../Section/section-index'
import exemploGaleria from '../../assets/images/exemplo-galeria.png'
import { Items, Item } from './gallery-styles'

//Const principal da Galeria.
const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={exemploGaleria} alt="Imagem da galeria" />
      </Item>
      <Item>
        <img src={exemploGaleria} alt="Imagem da galeria" />
      </Item>
      <Item>
        <img src={exemploGaleria} alt="Imagem da galeria" />
      </Item>
      <Item>
        <img src={exemploGaleria} alt="Imagem da galeria" />
      </Item>
    </Items>
  </Section>
)

//Exportações.
export default Gallery
