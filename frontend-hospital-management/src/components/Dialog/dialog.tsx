import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import './dialog.css';
import ButtonGenre from '../ButtonGenre/buttonGenre';
import ButtonHealth from '../ButtonHealth/buttonhealth';
const adicionar = require("../../assets/adicionar.png");

export default function DialogForm() {
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseSave = () => {
    setOpen(false);
    alert("Registro salvo com sucesso");
  };

  const handleCloseCancel = () => {
    setOpen(false);
    alert("Erro ao salvar registro");
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <img src={adicionar} width={40} />
      </IconButton>
      <Dialog open={open} onClose={handleClickOpen}>
        <DialogTitle>Inserir Novo Registro</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Área destinada a novas inserções de dados dos pacientes!!
          </DialogContentText>
          <Box component="form">
            <div className='container-input-text'>
              <TextField
                margin="normal"
                required
                id="primaryName"
                label="Primeiro Nome"
                name="primaryName"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoFocus
              />
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nome Completo"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Idade"
              name="age"
              type="number"
              autoFocus
            />
            <ButtonGenre />
            <br></br>
            <ButtonHealth />
            <TextField
              margin="normal"
              required
              fullWidth
              id="symptoms"
              label="Sintomas"
              name="symptoms"
              autoFocus
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel}>Cancelar</Button>
          <Button onClick={handleCloseSave}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}
