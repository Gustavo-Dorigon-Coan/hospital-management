import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';

import './passwordPriority.css';

export default function PasswordPriority() {

  const [contador, setContador] = useState(5);

  function diminuiContador() {
    if (contador != 0) {
      setContador(contador - 1);
    }
  };

  function adicionaContador() {
    setContador(contador + 1);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <div className='container-text'>
          Senha Prioritária
        </div>
        <div className='container-number-idicador'>
          {contador}
        </div>
        <div className='container-description'>
          Senha destinada ao público prioritário.
        </div>
      </CardContent>
      <div className='container-button-priori'>
        <CardActions>
          <Button size="small" onClick={diminuiContador}>Anterior</Button>
          <Button size="small" onClick={adicionaContador}>Próximo</Button>
        </CardActions>
      </div>
    </Card>
  );
}
