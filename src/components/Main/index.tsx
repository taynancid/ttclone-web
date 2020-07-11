import React from 'react';
import { View } from 'react-native';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Taynan</strong>
          <span>100 tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage />

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  );
}

export default Main;