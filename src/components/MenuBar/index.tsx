import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Button from '../Button';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  ProfileIcon,
} from './styles';

const MenuBar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [routeLocation, setRouteLocation] = useState('');
 
  React.useEffect(() => {
    setRouteLocation(location.pathname);
  }, [location]);

  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton className={`${routeLocation === '/' && 'active'}`} onClick={() => history.push('/')}>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton className={`${routeLocation === '/profile' && 'active'}`} onClick={() => history.push('/profile')}>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>
    </Container>
  );
};

export default MenuBar;
