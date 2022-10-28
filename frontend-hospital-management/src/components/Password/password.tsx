import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonAppBar from '../AppBar/appBar';

import './password.css';
import PasswordPriority from '../PasswordPriority/passwordPriority';


export default function Password() {
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
              G.Nº: 45
            </div>
            <div className='container-description'>
              Senha destinada ao público que não prioritário.
            </div>
          </CardContent>
          <div className='container-button-geral'>
            <CardActions>
              <Button size="small">Antecessor</Button>
              <Button size="small">Sucessor</Button>
            </CardActions>
          </div>
        </Card>
        <br />
        <PasswordPriority />
      </div>
    </>
  );
}
