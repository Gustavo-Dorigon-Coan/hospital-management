import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import ButtonAppBar from '../AppBar/appBar';
import PasswordPriority from '../PasswordPriority/passwordPriority';

import './password.css';

export default function Password() {

  const [contador, setContador] = useState(15);

  function diminuiContador() {
    if (contador != 0) {
      setContador(contador - 1);
    }
  };

  function adicionaContador() {
    setContador(contador + 1);
  };

  return (
    <>
      <ButtonAppBar />
      <br />
      <div className='container-card'>
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <div className='container-text'>
              Senha Geral
            </div>
            <div className='container-number'>
              {contador}
            </div>
            <div className='container-description'>
              Senha destinada ao público não prioritário.
            </div>
          </CardContent>
          <div className='container-button-geral'>
            <CardActions>
              <Button size="small" onClick={diminuiContador}>Anterior</Button>
              <Button size="small" onClick={adicionaContador}>Próximo</Button>
            </CardActions>
          </div>
        </Card>
        <br />
        <PasswordPriority />
      </div>
    </>
  );
}
