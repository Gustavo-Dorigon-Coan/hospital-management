import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import ButtonAppBar from '../AppBar/appBar';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';

import './list.css';
const adicionar = require("../../assets/adicionar.png");

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Código', width: 150, editable: true },
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
    width: 200,
    editable: false,
  },
  {
    field: 'symptoms',
    headerName: 'Sintomas/Problemas',
    type: 'text',
    width: 450,
    editable: false,
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

export default function DataGridDemo() {
  return (
    <div className='container-list-font'>
      <ButtonAppBar />
      <Box sx={{ height: 500, width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
        <h1>teste</h1>
      </Box>
      <footer>
        <IconButton>
          <Avatar>
            <img src={adicionar} width={50} />
          </Avatar>
        </IconButton>
      </footer>
    </div>
  );
}
