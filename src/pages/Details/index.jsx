import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';



export function Details(){ 

  return(// um componente retorna um único elemento
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Saepe neque hic repellendus soluta enim? Recusandae nesciunt fugiat sint dicta modi 
            ipsum quos, quia consequatur delectus in porro necessitatibus ducimus accusamus.
          </p>

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
        </Content>
      </main>

    </Container>
  )


}; 
   
