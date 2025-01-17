import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner/banner-index'
import Header from './components/Header/header-index'
import { GlobalCss } from './global-styles'

//Configuração das rotas de navegação com Router-dom
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
