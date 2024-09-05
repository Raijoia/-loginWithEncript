import { useState } from 'react';
import { User } from '../../context/UserContext';
import api from '../../services/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AllProfile() {
  const [allProfiles, setAllProfiles] = useState<User[]>([]);
  const getAllProfiles = () => {
    api
      .get('/user/all')
      .then((response) => {
        console.log(response.data);
        setAllProfiles(response.data);
      })
      .catch((error) => {
        console.log(error.response?.data?.message || 'Error fetching profiles');
        throw new Error(
          `Error getting all profiles: ${error.response?.data?.message}`
        );
      });
  };

  if (allProfiles.length === 0) {
    getAllProfiles();
  }

  return (
    <TableContainer component={Paper} sx={{ bgcolor: '#2A2A2A' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#E0E0E0' }}>Id</TableCell>
            <TableCell align="right" sx={{ color: '#E0E0E0' }}>
              Username
            </TableCell>
            <TableCell align="right" sx={{ color: '#E0E0E0' }}>
              E-mail
            </TableCell>
            <TableCell align="right" sx={{ color: '#E0E0E0' }}>
              Password
            </TableCell>
            <TableCell align="right" sx={{ color: '#E0E0E0' }}>
              Ativo
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProfiles.map((profile) => (
            <TableRow
              key={profile.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                color: '#E0E0E0',
              }}
            >
              <TableCell component="th" scope="row" sx={{ color: '#E0E0E0' }}>
                {profile.id}
              </TableCell>
              <TableCell align="right" sx={{ color: '#E0E0E0' }}>{profile.username}</TableCell>
              <TableCell align="right" sx={{ color: '#E0E0E0' }}>{profile.email}</TableCell>
              <TableCell align="right" sx={{ color: '#E0E0E0' }}>{profile.password}</TableCell>
              <TableCell align="right" sx={{ color: '#E0E0E0' }}>{profile.ativo == true ? 'Active' : 'Disable' }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AllProfile;
