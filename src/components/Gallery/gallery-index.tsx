//Arquivo de configuração para as galerias de imagens e vídeos dos jogos.
import { useState } from 'react'
import Section from '../Section/section-index'
import * as S from './gallery-styles'
import zoomIcon from '../../assets/images/zoom.png'
import playIcon from '../../assets/images/play.png'
import closeIcon from '../../assets/images/fechar.png'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isvisible: boolean
}

//Const principal da Galeria.
const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isvisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoomIcon
    return playIcon
  }

  const closeModal = () => {
    setModal({
      isvisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isvisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para ampliar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isvisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={closeIcon}
              alt="botão de fechar a janela"
              onClick={closeModal}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </S.Modal>
    </>
  )
}
//Exportações.
export default Gallery
