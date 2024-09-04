import Box from '@mui/material/Box';
import { Alert, AlertColor, Button, Collapse, Link, TextField } from '@mui/material';
import * as React from 'react';
import api from '../../services/api';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function BoxLogin() {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showAlert, setShowAlert] = React.useState(false);
  const [messageAlert, setMessageAlert] = React.useState('');
  const [severityAlert, setSeverityAlert] =
    React.useState<AlertColor>('error');

  const context = React.useContext(UserContext);
  const navigate = useNavigate();

  const { setUser } = context || {};

  const cleanTextFields = () => {
    setLogin('');
    setPassword('');
  };

  const checkInDatabase = () => {
    api.post('/user/login', {
      email: login,
      password
    }).then((response) => {
      console.log(response.data);
      if (setUser) {
        setUser({
          id: response.data.id,
          email: response.data.email,
          username: response.data.username,
          ativo: response.data.ativo,
          password: response.data.password,
          createdAt: response.data.createdAt,
          updatedAt: response.data.updated,
          deletedAt: response.data.deletedAt,
        });
      }
      setMessageAlert('Logado com sucesso');
      setSeverityAlert('success');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
      navigate('/profile');
    }).catch((error) => {
      console.log(error.response);
      setMessageAlert(`Erro ao logar usuário: ${error.response.data.message}`);
      setSeverityAlert('error');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 10000);
    })

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
      <Collapse in={showAlert}>
        <Alert
          severity={severityAlert}
          sx={{ transition: 'opacity 0.5s ease-in-out' }}
        >
          {messageAlert}
        </Alert>
      </Collapse>
      <Link
        href="/cadastro"
        underline="hover"
        variant="body2"
        sx={{ color: '#1E90FF' }}
      >
        Não tem uma conta? Cadastre-se
      </Link>
      <Button variant="contained" onClick={() => checkInDatabase()}>
        Enviar
      </Button>
    </Box>
  );
}

export default BoxLogin;
