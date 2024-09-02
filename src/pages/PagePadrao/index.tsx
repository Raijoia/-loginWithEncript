import Container from '@mui/material/Container';
import './App.css';
import BoxLogin from '../../components/BoxLogin';

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
        <BoxLogin />
      </Container>
    </main>
  );
}

export default PagePadrao;
