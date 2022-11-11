import CloseIcon from '@mui/icons-material/Close';
import { Alert, IconButton, Snackbar } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as React from 'react';

import './atualizarCadastro.css';

export default function AtualizarCadastro() {

  const [open, setOpen] = React.useState(false);
  const [openDialogSave, setOpenDialogSave] = React.useState(false);
  const [openDialogCancel, setOpenDialogCancel] = React.useState(false);

  const handleClickOpenButton = () => {
    setOpen(true);
  };

  const handleCloseCancel = () => {
    setOpen(false);
    setOpenDialogSave(false);
  };

  const handleCloseAlertSave = () => {
    setOpenDialogSave(false);
    setOpen(false);
  }

  const handleCloseAlertCancel = () => {
    setOpenDialogCancel(false);
  }

  const handleClickSave = () => {
    setOpenDialogSave(true);
  };

  const handleClickCancel = () => {
    setOpenDialogCancel(true);
  };

  return (
    <div>
      <button className='my-button' onClick={handleClickOpenButton} >
        Atualizar Cadastro
      </button>
      <Dialog open={open} onClose={handleClickOpenButton}>
        <div>
          <div className='flex-mobile-cadastro'>
            <DialogTitle>Atualização de Cadastro</DialogTitle>
          </div>
          <div className='flex-position-mobile-cadastro'>
            <IconButton onClick={handleCloseCancel}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <DialogContent>
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
                name="email"
                label="Email"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Bairro"
                name="symptoms"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="End."
                name="endereco"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Municipio"
                name="municipio"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Telefone"
                name="telefone"
                type="tel"
                placeholder="(xx)x-xxxx-xxxx"
                autoFocus
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button >
          </Button>
          <Button onClick={handleClickCancel}>Cancelar</Button>
          <Snackbar open={openDialogCancel} autoHideDuration={4000} onClose={handleCloseAlertCancel}>
            <Alert onClose={handleCloseAlertCancel} variant="filled" severity="error" sx={{ width: '100%' }}>
              Ocorreu um erro ao atualizar o cadastro!
            </Alert>
          </Snackbar>
          <Button onClick={handleClickSave}>Salvar</Button>
          <Snackbar open={openDialogSave} autoHideDuration={4000} onClose={handleCloseAlertSave}>
            <Alert onClose={handleCloseAlertSave} variant="filled" severity="success" sx={{ width: '100%' }}>
              Cadastro salvo com sucesso!
            </Alert>
          </Snackbar>
        </DialogActions>
      </Dialog>
    </div >
  );
}
