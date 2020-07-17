import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const InputBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background: var(--search);
  border-bottom: 2px solid var(--twitter);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 5px 10px;

  > span {
    font-size: 15px;
    background: transparent;
    color: var(--twitter);
  }

  > input {
    font-size: 20px;
    background: transparent;

    &:focus {
      outline-width: 0px;
    }
  }
`;
