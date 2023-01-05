import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';


export function Details(){ 

  return(// um componente retorna um único elemento
    <Container>
      
      <Header />

      <Button title="Voltar"/>
       
        
    </Container>
  )
}; 
   
