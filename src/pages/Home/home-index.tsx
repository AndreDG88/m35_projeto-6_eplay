import Banner from '../../components/Banner/banner-index'
import ProductsList from '../../components/ProductsList/productslist-index'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

//Arquivo de estruturação da página Home do site, usando o React Router Dom.
const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

//Exportações.
export default Home
