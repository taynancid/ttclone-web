import React from 'react';

import { Container, InputBody } from './styles';

type Props = {
  placeholder?: string;
  onTextChange: (text: string) => void;
}

const Input: React.FC<Props> = ({ placeholder, onTextChange }) => {
  return (
    <Container>
      <InputBody>
        <span>{placeholder}</span>
        <input type='text' />
      </InputBody>
    </Container>
  );
};

export default Input;
