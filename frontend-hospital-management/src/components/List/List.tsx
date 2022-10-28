import Box from '@mui/material/Box';
import { DataGrid, GridApi, GridCellValue, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import ButtonAppBar from '../AppBar/appBar';
import IconButton from '@mui/material/IconButton';
import { Avatar, Button } from '@mui/material';

import './list.css';
import DialogForm from '../Dialog/dialog';
const adicionar = require("../../assets/adicionar.png");
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
    width: 120,
    renderCell: (params) => {
      const senhaPrioritaria = (e: any) => {
        e.stopPropagation();
        return alert("AQUI IRA GERAR UMA SENHA PRIORITÁRIA");
      };
      return <Button variant="contained" color="error" size="small" onClick={senhaPrioritaria}>Prioritária</Button>;
    }
  },
  {
    field: "geral",
    headerName: "Senha Geral",
    sortable: false,
    width: 100,
    renderCell: (params) => {
      const senhaPrioritaria = (e: any) => {
        e.stopPropagation();
        return alert("AQUI IRA GERAR UMA SENHA GERAL");
      };
      return <Button variant="contained" color="success" size="small" onClick={senhaPrioritaria}>Geral</Button>;
    }
  },
  {
    field: "arquivos",
    headerName: "Anexos",
    sortable: false,
    width: 70,
    renderCell: (params) => {
      const senhaPrioritaria = (e: any) => {
        e.stopPropagation();
        return
      };
      return <Button component="label" onClick={senhaPrioritaria}>
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
