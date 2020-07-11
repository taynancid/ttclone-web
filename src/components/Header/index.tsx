import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <button
      type="button"
      onClick={() => {
        /* TODO OPEN MODAL */
      }}
    >
      <div className="text">Novo Prato</div>
      <div className="icon">
        <FiPlusSquare size={24} />
      </div>
    </button>
  </Container>
);

export default Header;