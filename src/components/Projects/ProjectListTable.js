import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Person from '../Person/Person';
import MenuOpen from '../MenuOpen/MenuOpen';
import StatusButton from '../Buttons/StatusButton';
import ProjectInfo from './ProjectInfo';

export default function ProjectListTable({ projects }) {
  // set table
  const columns = [
    {
      field: 'project_info',
      headerName: 'Project Info',
      name: 'project_info',
      width: 398,
      renderCell: params => (
        <ProjectInfo name={params.row.name} date={params.row.date} />
      ),
      valueGetter: params => params.row.name,
      sortable: false,
    },
    {
      field: 'project_manager',
      headerName: 'Project Manager',
      name: 'project_manager',
      width: 288,
      renderCell: params => (
        <Person
          name={params.row.project_manager.name}
          avatar={params.row.project_manager.avatar}
        />
      ),
      valueGetter: params => params.row.project_manager.name,
      sortable: false,
    },
    {
      field: 'assigned_to',
      headerName: 'Assigned to',
      name: 'assigned_to',
      width: 334,
      renderCell: params => (
        <Person
          name={params.row.assigned_to.name}
          avatar={params.row.assigned_to.avatar}
        />
      ),
      valueGetter: params => params.row.assigned_to.name,
      sortable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      name: 'status',
      width: 195,
      sortable: false,
      renderCell: params => <StatusButton status={params.row.status.name} />,
      valueGetter: params => params.row.status.name,
    },
    {
      field: 'actions',
      headerName: 'Action',
      sortable: false,
      filterable: false,
      renderCell: params => {
        return <MenuOpen id={params.row.id} />;
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
        height: '100%',
      }}
    >
      <DataGrid
        sx={{ height: '450px', padding: '19px 24px' }}
        // rows={data}
        rows={projects}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
}
