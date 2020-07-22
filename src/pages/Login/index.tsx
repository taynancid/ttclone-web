import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store';



import { Container, InputWrapper, BirdIcon, SubmitButton } from './styles';
import api from '../../services/api';
import Input from '../../components/Input';
import { logIn } from '../../store/auth/actions';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const history = useHistory();


  async function login(): Promise<void> {
    try {
      const { data } = await api.post('login', {
        email,
        password,
      });
      
      dispatch(logIn());
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <BirdIcon />
      <h1>Enter on ttClone</h1>
      <InputWrapper>
        <Input placeholder="E-mail" onTextChange={setEmail} />
        <Input placeholder="Password" onTextChange={setPassword} />
      </InputWrapper>
      <SubmitButton onClick={() => login()}>Enter</SubmitButton>
    </Container>
  );
};

export default Login;
