import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Taynan Cid</h1>
        <h2>@taynacomtio</h2>

        <p>Apenas um cara que queria ser astronauta</p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, CE
          </li>
          <li>
            <CakeIcon />
            Nascido 27 de Maio de 1992
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong> 100</strong>
          </span>
          <span>
            <strong>100 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
