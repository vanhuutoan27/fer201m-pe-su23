import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Dashboard() {
  const url = 'https://65375a84bb226bb85dd31896.mockapi.io/api/v1/staffManagement';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="content" style={{ padding: '100px 0' }}>
      <h1>Dashboard</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Created At</TableCell>
              <TableCell align="left">Avatar</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="right">
                <span style={{ marginRight: '70px' }}>Action</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.createdAt}</TableCell>
                <TableCell align="left">
                  <Avatar alt={row.name} src={row.avatar} />
                </TableCell>
                <TableCell align="left">{row.age}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="right">
                  <Link to="/add">
                    <AddCircleIcon className="custom-icon" />
                  </Link>
                  <Link to="/update">
                    <EditIcon className="custom-icon" />
                  </Link>
                  <Link to="/remove">
                    <DeleteIcon className="custom-icon" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dashboard;
