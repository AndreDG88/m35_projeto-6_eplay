//Arquivo de configuração para as galerias de imagens e vídeos dos jogos.
import Section from '../Section/section-index'
import { Items, Item, Action, Modal, ModalContent } from './gallery-styles'
import exemploGaleria from '../../assets/images/exemplo-galeria.png'
import galeriaBig from '../../assets/images/galeria-big.png'
import zoomIcon from '../../assets/images/zoom.png'
import playIcon from '../../assets/images/play.png'
import closeIcon from '../../assets/images/fechar.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: exemploGaleria
  },
  {
    type: 'image',
    url: exemploGaleria
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/yF29baX-IsA?si=7GP1dIdvz_ydiZL2'
  }
]

type Props = {
  defaultCover: string
  name: string
}

//Const principal da Galeria.
const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoomIcon
    return playIcon
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para ampliar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="botão de fechar a janela" />
          </header>
          <img src={galeriaBig} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
//Exportações.
export default Gallery
