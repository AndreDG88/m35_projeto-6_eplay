import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/header-index'
import { GlobalCss } from './global-styles'
import Rotas from './routes'
import Footer from './components/Footer/footer-index'
import { store } from './store/store-index'
import Cart from './components/cart/cart-index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
