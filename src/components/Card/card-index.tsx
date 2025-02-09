//Criação e configuração dos cards que compõem a área de checkout.
import { Container } from './card-styles'

//Configuração de tipagem
type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
)

//exportações
export default Card
