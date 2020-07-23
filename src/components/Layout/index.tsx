import React from 'react';

import { Container, Wrapper } from './styles';
import Main from '../Main';
import MenuBar from '../MenuBar';


const Layout: React.FC = () => {
  

  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
      </Wrapper>
    </Container>
  );
};

export default Layout;
