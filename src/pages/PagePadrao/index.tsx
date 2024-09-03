import Container from '@mui/material/Container';
import './App.css';
import { Outlet } from 'react-router-dom';

function PagePadrao() {
  return (
    <main className="primary">
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Container>
    </main>
  );
}

export default PagePadrao;
