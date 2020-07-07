import React, { useState } from 'react';

import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

const Login: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <LoginForm />
      <h1>oi</h1>
    </>
  );
}

export default Login;