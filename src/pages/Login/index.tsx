import React, { useState } from 'react';

import Input from '../../components/Input';
import { Container, InputWrapper, BirdIcon, SubmitButton } from './styles';
import api from '../../services/api';

const Login: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  async function login(): Promise<void> {
    const { data } = await api.post('login', {
      email,
      password,
    });

    console.log(data);
  }

  return (
    <Container>
      <BirdIcon />
      <h1>Enter on ttClone</h1>
      <InputWrapper>
        <Input placeholder="E-mail" onTextChange={setEmail} />
        <Input
          placeholder="Password"
          onTextChange={setPassword}
        />
      </InputWrapper>
      <SubmitButton onClick={login}>Enter</SubmitButton>
    </Container>
  );
};

export default Login;
