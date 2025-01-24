//Página para apresentar os detalhes sobre o jogo.
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero/hero-index'

//Const principal de montagem da página.
const ProductPage = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
    </>
  )
}

//Exportações.
export default ProductPage
