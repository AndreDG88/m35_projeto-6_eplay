//Arquivo de configução das seções de conteúdo das páginas.
import { Container, Title } from './section-styles'

//Config das Propriedades.
export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

//const principal da Section.
const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </Container>
)

//Exportações.
export default Section
