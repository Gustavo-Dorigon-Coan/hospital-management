import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MobileDialog from '../MobileDialog/mobileDialog';

import './appBarMobile.css';

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
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hospital
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className='container-position'>
        <div className='container-align-form'>
          <Link to='/senha'>
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
      </div>
    </Box >
  );
}