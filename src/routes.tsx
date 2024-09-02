import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import PagePadrao from './pages/PagePadrao';
import Login from './pages/Login';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagePadrao />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
