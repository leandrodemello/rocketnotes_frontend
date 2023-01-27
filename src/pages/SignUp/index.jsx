import { useState } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { api } from "../../"

import { Input } from '../../components/Imput';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }
  }

  return (
    <Container>
      <Background/>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}   //TODA VEZ QUE O VALOR DO INPUT MUDA, O ONCHANGE DISPARA UM EVENTO!
        />

        <Input
          placeholder="E-mail"
          type="tetx"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title="Cadastrar">
        </Button>
        
        <Link to="/">
        <FiArrowLeft />
          Voltar para o login
        </Link>

      </Form>

      
    </Container>
  );
}

