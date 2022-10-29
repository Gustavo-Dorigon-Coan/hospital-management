import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import ButtonAppBar from '../AppBar/appBar';
import DialogForm from '../Dialog/dialog';

import './list.css';

const upload = require("../../assets/upload.png");

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Código',
    width: 60,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Nome Completo',
    sortable: false,
    width: 300,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    width: 50,
    editable: false,
  },
  {
    field: 'symptoms',
    headerName: 'Sintomas/Problemas',
    type: 'text',
    width: 450,
    editable: false,
  },
  {
    field: "prioritaria",
    headerName: "Senha Prioritária",
    sortable: false,
    width: 140,
    renderCell: () => {
      return <Button variant="contained" endIcon={<SendIcon />} color="error" size="small" onClick={sendEmailPriority}>Prioritária</Button>;
    }
  },
  {
    field: "geral",
    headerName: "Senha Geral",
    sortable: false,
    width: 100,
    renderCell: () => {
      return <Button variant="contained" endIcon={<SendIcon />} color="warning" size="small" onClick={sendEmailGeneral}>Geral</Button>;
    }
  },
  {
    field: "arquivos",
    headerName: "Anexos",
    sortable: false,
    width: 70,
    renderCell: () => {
      return <Button component="label" >
        <input hidden accept="image/*" multiple type="file" />
        <img src={upload} width={35} />
      </Button>;
    }
  },
];


const rows = [
  { id: 1, lastName: 'João Da Silva', age: 70, symptoms: 'Dores de barriga acompanhado com dores de cabeça' },
  { id: 2, lastName: 'Gleberson Apiriqueta', age: 65, symptoms: 'Dores de cabeça' },
  { id: 3, lastName: 'Saunara Das Neves', age: 14, symptoms: 'Vomito seguido de diarreia' },
  { id: 4, lastName: 'Nacim de Sistemas', age: 20, symptoms: 'Dores nas costas' },
  { id: 5, lastName: 'Dexter Fleder', age: 25, symptoms: 'Dores nas pernas' },
  { id: 6, lastName: 'Kolibali Naster', age: 37, symptoms: 'Barriga inchada' },
  { id: 7, lastName: 'Stefani do Anjos', age: 42, symptoms: 'Machucou jogando vôlei' },
  { id: 8, lastName: 'Glades Das Dores', age: 54, symptoms: 'Pisou em um prego' },
  { id: 9, lastName: 'Jonas Scobar', age: 10, symptoms: 'Se ralou de bicicleta' },
];

function sendEmailPriority() {
  const templateParams = {}

  emailjs.send("service_soys3sp", "template_ywwtagu", templateParams, "iuEuy6lN76d8e2uUp")
    .then((response) => {
      console.log("EMAIL ENVIADO COM SUCESSO", response.status, response.text)
      alert("EMAIL ENVIADO COM SUCESSO");
    }, (error) => {
      console.log("ERRO AO ENVIAR EMAIL", error)
      alert("ERRO AO ENVIAR EMAIL");
    })
}

function sendEmailGeneral() {
  const templateParams = {}

  emailjs.send("service_soys3sp", "template_0k72jph", templateParams, "iuEuy6lN76d8e2uUp")
    .then((response) => {
      console.log("EMAIL ENVIADO COM SUCESSO", response.status, response.text)
    }, (error) => {
      console.log("ERRO AO ENVIAR EMAIL", error)
      alert("ERRO AO ENVIAR EMAIL");
    })
}

export default function DataGridDemo() {
  return (
    <div className='container-list-font'>
      <ButtonAppBar />
      <Box sx={{ height: 610, width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
      <footer>
        <IconButton>
          <DialogForm />
        </IconButton>
      </footer>
    </div>
  );
}
