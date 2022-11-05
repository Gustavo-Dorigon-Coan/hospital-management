import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

import './appBarMobile.css';

const userMobile = require("../../assets/userMobile.png");

export default function AppBarMobile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/inbox' style={{ textDecoration: 'none' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 8 }}
            >
              <img src={userMobile} width={50} />
            </IconButton>
          </Link>
          <div className='container-font-mobile'>
            HOSPITAL
          </div>
        </Toolbar>
      </AppBar>
    </Box >
  );
}