import React, { useState } from 'react';

import Input from '../../components/Input';

import {Container, InputWrapper, BirdIcon, SubmitButton } from './styles';

const Login: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
      <Container>
        <BirdIcon />
        <h1>Enter on ttClone</h1>
        {/* <InputWrapper> */}
          <Input />
          <Input />
          <SubmitButton>
            Enter
          </SubmitButton>
        {/* </InputWrapper> */}
      </Container>
  );
}

export default Login;