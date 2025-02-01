import Banner from '../../components/Banner/banner-index'
import ProductsList from '../../components/ProductsList/productslist-index'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

//construtor dos jogos usados na página
export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

//Arquivo de estruturação da página Home do site, usando o React Router Dom.
const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGames} title="Promoções" background="gray" />
        <ProductsList games={soonGames} title="Em Breve" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

//Exportações.
export default Home
