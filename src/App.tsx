import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/header-index'
import { GlobalCss } from './global-styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
