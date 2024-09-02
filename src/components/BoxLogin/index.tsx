import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import * as React from 'react';

function BoxLogin() {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const cleanTextFields = () => {
    setLogin('');
    setPassword('');
  };

  const sendToDataBase = () => {
    alert('Login: ' + login + ' Password: ' + password);
    cleanTextFields();
  };

  return (
    <Box
      sx={{
        bgcolor: '#2A2A2A',
        height: '60vh',
        width: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
        border: '2px solid #3A3A3A',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)',
      }}
    >
      <TextField
        id="outlined-basic"
        label="Login"
        variant="outlined"
        onChange={(e) => setLogin(e.target.value)}
        value={login}
        InputProps={{
          style: {
            backgroundColor: '#2E2E2E',
            color: '#E0E0E0',
            borderColor: '#4D4D4D',
          },
        }}
        InputLabelProps={{
          style: {
            color: '#E0E0E0',
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#4D4D4D',
            },
            '&:hover fieldset': {
              borderColor: '#E0E0E0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1E90FF',
            },
          },
        }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        InputProps={{
          style: {
            backgroundColor: '#2E2E2E',
            color: '#E0E0E0',
            borderColor: '#4D4D4D',
          },
        }}
        InputLabelProps={{
          style: {
            color: '#E0E0E0',
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#4D4D4D',
            },
            '&:hover fieldset': {
              borderColor: '#E0E0E0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1E90FF',
            },
          },
        }}
      />
      <Button variant="contained" onClick={() => sendToDataBase()}>
        Enviar
      </Button>
    </Box>
  );
}

export default BoxLogin;
