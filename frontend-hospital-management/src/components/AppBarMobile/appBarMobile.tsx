import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import MobileDialog from '../MobileDialog/mobileDialog';

import './appBarMobile.css';

const userMobile = require("../../assets/userMobile.png");

export default function AppBarMobile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 8 }}
          >
            <img src={userMobile} width={50} />
          </IconButton>
          <div className='container-font-mobile'>
            HOSPITAL
          </div>
        </Toolbar>
      </AppBar>
      <div className='container-position'>
        <div className='container-align-form'>
          <Link to=''>
            <button className='my-button'>
              Atualizar Cadastro
            </button>
          </Link>
        </div>
        <div className='container-align-ra'>
          <MobileDialog />
        </div>
        <div className='container-align-password'>
          <button className='my-button'>
            Senha
          </button>
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