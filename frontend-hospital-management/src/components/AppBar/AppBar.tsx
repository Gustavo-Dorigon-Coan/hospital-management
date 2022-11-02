import { Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";

import './appBar.css';

const avatar = require("../../assets/user.png");
const logout = require("../../assets/logout.png");


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <div className='container'>
            <div className='container-icon-button'>
              <Link to='/*'>
                <IconButton>
                  <Avatar>
                    <img src={logout} width={40} />
                  </Avatar>
                </IconButton>
              </Link>
            </div>
            <div className='container-div'>
              <div>
                <Link to='/inbox'>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: -1 }}
                  >
                    <Avatar>
                      <img src={avatar} width={40} />
                    </Avatar>
                  </IconButton>
                </Link>
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
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box >
  );
}
