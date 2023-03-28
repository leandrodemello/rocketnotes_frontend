import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'; 

import { Button } from '../../components/Button';
import { Input } from '../../components/Imput';

import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react'; 

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password ) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", {name, email, password})
      .then(() => { alert("Usuário cadastrado com sucesso!");
      navigate("/");
      })

      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  
  return (
    <Container>
      <Background/>

      <Form>
        <h1>Anotações fácil!</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={event => setName(event.target.value)}  
        />

        <Input
          placeholder="E-mail"
          type="tetx"
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={event => setPassword(event.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />
        
        <Link to="/">
        <FiArrowLeft />
          Voltar para o login
        </Link>

      </Form>
    </Container>

  );
}

