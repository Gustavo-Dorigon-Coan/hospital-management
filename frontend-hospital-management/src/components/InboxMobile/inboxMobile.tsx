import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import AtualizarCadastro from '../AtualizarCadastro/atualizarCadastro';
import MobileDialog from '../MobileDialog/mobileDialog';

import './inboxMobile.css';

export default function InboxMobile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className='container-position'>
        <div className='container-align-form'>
          <AtualizarCadastro />
        </div>
        <div className='container-align-ra'>
          <MobileDialog />
        </div>
        <div className='container-align-password'>
          <Link to='/senhaMobile'>
            <button className='my-button'>
              Senha
            </button>
          </Link>
        </div>
        <div className='container-align-exit'>
          <Link to='*'>
            <button className='my-button-exit'>
              Sair
            </button>
          </Link>
        </div>
      </div>
    </Box >
  );
}