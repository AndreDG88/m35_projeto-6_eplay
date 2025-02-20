//Página para apresentar os detalhes sobre o jogo.
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero/hero-index'
import Section from '../../components/Section/section-index'
import Gallery from '../../components/Gallery/gallery-index'
import { useGetGameQuery } from '../../services/api'
import Loader from '../../components/Loader/loader-index'

type GameParams = {
  id: string
}

//Const principal de montagem da página.
const ProductPage = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o Jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

//Exportações.
export default ProductPage
