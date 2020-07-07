import React from 'react';

import { LoginContainer } from './styles';

const Login: React.FC = () => {

    return (
        <LoginContainer> 
            <button
            type="button"
            onClick={() => {
              /* TODO OPEN MODAL */
            }}
          >
            <div className="text">Novo Prato</div>
           </button>
        </LoginContainer>
    );
}

export default Login;