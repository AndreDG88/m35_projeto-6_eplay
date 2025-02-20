// arquivo de criação e configuração do efeito de loading do site.
//OBS: para este arquivo funcionar é preciso istalar a dependência "npm i --save react-spinners"
import { PacmanLoader } from 'react-spinners'
import { colors } from '../../global-styles'
import { Container } from './loader-styles'

const Loader = () => (
  <Container>
    <PacmanLoader color={colors.white} />
  </Container>
)

export default Loader
