import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ProjectInfo from './ProjectInfo';
import Person from '../Person/Person';
import StatusButton from '../Buttons/StatusButton';
import MenuOpen from '../MenuOpen/MenuOpen';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const data = [
  {
    id: 1,
    projectInfo: {
      name: 'Project 1',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Ignacio Truffa',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
  {
    id: 2,
    projectInfo: {
      name: 'Aroject 2',
      date: 'Creation date: 12/12/2019',
    },
    projectManager: {
      name: 'John Doe',
      avatar: false,
    },
    assignedTo: {
      name: 'Juan Perez',
      avatar:
        'https://www.dzoom.org.es/wp-content/uploads/2010/09/retrato-fondo-profundidad-campo-734x489.jpg',
    },
    status: {
      enabled: true,
    },
  },
];

export default function ProjectListTable() {
  // set table
  const columns = [
    {
      field: 'projectInfo',
      headerName: 'Project Info',
      name: 'projectInfo',
      //   sortable: false,
      width: 398,
      renderCell: params => (
        <ProjectInfo
          name={params.row.projectInfo.name}
          date={params.row.projectInfo.date}
        />
      ),
      sortComparator: (v1, v2) => v1.name.localeCompare(v2.name),
    },
    {
      field: 'projectManager',
      headerName: 'Project Manager',
      name: 'projectManager',
      width: 288,
      renderCell: params => (
        <Person
          name={params.row.projectManager.name}
          avatar={params.row.projectManager.avatar}
        />
      ),
      sortComparator: (v1, v2) => v1.name.localeCompare(v2.name),
    },
    {
      field: 'assignedTo',
      headerName: 'Assigned to',
      name: 'assignedTo',
      width: 334,
      renderCell: params => (
        <Person
          name={params.row.assignedTo.name}
          avatar={params.row.assignedTo.avatar}
        />
      ),
      sortComparator: (v1, v2) => v1.name.localeCompare(v2.name),
    },
    {
      field: 'status',
      headerName: 'Status',
      name: 'status',
      width: 195,
      renderCell: params => <StatusButton status={params.row.status.enabled} />,
    },
    {
      field: 'actions',
      headerName: 'Action',
      sortable: false,
      // width: 'auto',

      renderCell: params => {
        return <MenuOpen id={params.id} />;
      },
    },
  ];
  return (
    <Box
      width={{ sx: '100%', md: '1345x' }}
      sx={{
        m: '0 48px',
        background: 'white',
        boxShadow: 'inset 0px -1px 0px #D9D9D9',
        display: { xs: 'none', md: 'block' },
      }}
    >
      <DataGrid
        sx={{ height: '500px', padding: '19px 24px' }}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Box>
  );
}
