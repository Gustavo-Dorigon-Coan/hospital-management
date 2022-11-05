import LockResetIcon from '@mui/icons-material/LockReset';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import { Link } from 'react-router-dom';

import './options.css';
const userMobile = require('../../assets/userMobile.png');
const settings = require('../../assets/settings.png');


export default function Options() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Configurações">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }}>
              <img src={settings} width={40} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to='/mobileHome' style={{ color: 'inherit', textDecoration: 'none' }}>
          <MenuItem>
            <div>
              <img src={userMobile} width={30} />
            </div>
            <div className='spacing'>
              Usuário/Mobile
            </div>
          </MenuItem>
        </Link>
        <Divider />
        <Link to='/redefinirSenha' style={{ color: 'inherit', textDecoration: 'none' }}>
          <MenuItem>
            <ListItemIcon>
              <LockResetIcon fontSize="small" />
            </ListItemIcon>
            Redefinir Senha
          </MenuItem>
        </Link>
        <Link to='*' style={{ color: 'inherit', textDecoration: 'none' }}>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Sair
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
}
