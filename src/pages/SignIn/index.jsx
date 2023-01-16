import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Imput';
import { Button } from '../../components/Button';



export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="tetx"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button 
          title="Entrar">
        </Button>

        <a href="#">
          <FiLock />
          Criar conta
        </a>
        
      </Form>

      <Background/>
      
    </Container>
  );
}