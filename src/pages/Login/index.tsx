import React, { useState } from 'react';

import Input from '../../components/Input';

import { Container, InputWrapper, BirdIcon, SubmitButton } from './styles';

const Login: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <Container>
      <BirdIcon />
      <h1>Enter on ttClone</h1>
      <InputWrapper>
        <Input placeholder="E-mail" onTextChange={() => console.log('todo')} />
        <Input
          placeholder="Password"
          onTextChange={() => console.log('todo')}
        />
      </InputWrapper>
      <SubmitButton>Enter</SubmitButton>
    </Container>
  );
};

export default Login;
