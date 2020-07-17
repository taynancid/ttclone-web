import styled from 'styled-components';

import {
 KiwiBird
} from '../../styles/icons';

import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled.div`
  height: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 0px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 23px;
    margin: 30px 0px 10px;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 150px;
`;

export const BirdIcon = styled(KiwiBird)`
  width: 36px;
  height: 36px;

  fill: var(--white);
`;
export const SubmitButton = styled(Button)`
  margin: 10px;
  width: 100%;
`;
