import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import './list.css';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Código', width: 150 },
  {
    field: 'firstName',
    headerName: 'Primeiro Nome',
    width: 300,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Sobrenome',
    width: 300,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    width: 200,
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
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <div className='container-list-font'>
      <Box sx={{ height: 500, width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}
