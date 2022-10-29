import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import './dialog.css';
import ButtonGenre from '../ButtonGenre/buttonGenre';
import ButtonHealth from '../ButtonHealth/buttonhealth';

const adicionar = require("../../assets/adicionar.png");

export default function DialogForm() {
  const [open, setOpen] = React.useState(false);

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
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Primeiro Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="nameFull"
                label="Nome Completo"
                type="nameFull"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="age"
                label="Idade"
                name="age"
                type="number"
              />
            </Grid>
          </Grid>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel}>Cancelar</Button>
          <Button onClick={handleCloseSave}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}
