import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';

import './appBar.css';
const avatar = require("../../assets/user.png");


export default function ButtonAppBar() {
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
            <Avatar>
              <img src={avatar} width={40} />
            </Avatar>
          </IconButton>
          <div className='container'>
            <Link to='/lista'>
              <button className='conteiner-button'>
                Lista de Espera
              </button>
            </Link>
            <Link to='/senha'>
              <button className='conteiner-button'>
                Senha
              </button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
