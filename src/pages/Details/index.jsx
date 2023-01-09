import { Container, Links } from './styles';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';



export function Details(){ 

  return(// um componente retorna um único elemento
    <Container>
      <Header />
      <ButtonText title="Excluir Notas" />

      <Section title="Links úteis">
        <Links> 
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          
        </Links>
      </Section>

      <Section title="Marcadores">
          <Tag title="express" />
          <Tag title="nodejs" />
      </Section>

      <Button title="Voltar"/>
    </Container>
  )


}; 
   
