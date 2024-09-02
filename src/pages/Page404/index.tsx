import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <main className="">
      <div>
        <h1>Error 404</h1>
        <p className="">Página não encontrada</p>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Voltar para a página anterior
        </Button>
      </div>
    </main>
  );
};

export default Page404;
