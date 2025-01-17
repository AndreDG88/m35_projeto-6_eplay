import Banner from './components/Banner/banner-index'
import Header from './components/Header/header-index'
import { GlobalCss } from './global-styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
