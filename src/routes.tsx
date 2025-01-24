import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home-index'
import Categories from './pages/Categories/categories-index'
import ProductPage from './pages/ProductPage/productPage-index'

//Configuração das rotas de navegação com Router-dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<ProductPage />} />
  </Routes>
)

export default Rotas
