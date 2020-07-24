import React, { useState } from 'react';
import { View } from 'react-native';
import { useHistory, useLocation } from 'react-router-dom';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';
import HomeTimeline from '../HomeTimeline';

const Main: React.FC = () => {
  const location = useLocation();
  const [routeLocation, setRouteLocation] = useState('');

  React.useEffect(() => {
    setRouteLocation(location.pathname);
  }, [location]);

  return (
    <Container>
      {routeLocation === '/profile' && (
        <>
          <Header>
            <button>
              <BackIcon />
            </button>

            <ProfileInfo>
              <strong>Taynan</strong>
              <span>100 tweets</span>
            </ProfileInfo>
          </Header>

          <ProfilePage />
        </>
      )}
      {routeLocation === '/' && <HomeTimeline />}

      {/* <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  );
};

export default Main;
