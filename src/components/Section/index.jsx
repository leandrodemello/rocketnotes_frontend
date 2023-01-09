import { Container } from "./styles";

export function Section({ title, children }) { //CHILDREM CAPTURA TODO O ELEMENTO QUE ESTA DENTRO DA SECTION PARA SER VISUALIZADO
  return (
    <Container>
      <h2>{title}</h2>
      {children} 
    </Container>
  )
};