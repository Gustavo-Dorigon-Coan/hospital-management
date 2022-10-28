import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import './passwordPriority.css';

export default function PasswordPriority() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <div className='container-text'>
          Senha Prioritária
        </div>
        <div className='container-number'>
          P.Nº: 5
        </div>
        <div className='container-description'>
          Senha destinada ao público prioritário.
        </div>
      </CardContent>
      <div className='container-button-priori'>
        <CardActions>
          <Button size="small">Antecessor</Button>
          <Button size="small">Sucessor</Button>
        </CardActions>
      </div>
    </Card>
  );
}
