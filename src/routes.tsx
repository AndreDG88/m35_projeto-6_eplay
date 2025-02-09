import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home-index'
import Categories from './pages/Categories/categories-index'
import ProductPage from './pages/ProductPage/productPage-index'
import Checkout from './pages/Checkout/checkout-index'

//Configuração das rotas de navegação com Router-dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
