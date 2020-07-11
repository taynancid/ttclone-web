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
      <LoginForm />
    </>
  );
}

export default Login;