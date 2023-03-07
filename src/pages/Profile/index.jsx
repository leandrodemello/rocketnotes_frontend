import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Imput';
import { Button } from '../../components/Button';


import { Container, Form, Avatar } from "./styles";

import { Link } from 'react-router-dom';


export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdate() {
    const user = {
      name, 
      email,  
      password: passwordNew,
      old_password: passwordOld,
    };

    await updateProfile({ user });
  }


  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
          src="https://github.com/leandrodemello.png" 
          alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>

        </Avatar>

        <Input 
          icon={FiUser}
          placeholder="Usuário"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input 
          icon={FiMail}
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          icon={FiLock}
          placeholder="Senha atual"
          type="password"
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          icon={FiLock}
          placeholder="Nova senha"
          type="password"
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button 
        title="Salvar" onClick={handleUpdate}>
        </Button> 
        

      </Form>

    </Container>
  );
}