import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import PagePadrao from './pages/PagePadrao';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import { UserProvider } from './context/UserContext';
import Profile from './pages/Profile';
import AllProfile from './pages/AllProfiles';

function AppRouter() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PagePadrao />}>
            <Route index element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="profile" element={<Profile />} />
            <Route path="all-profile" element={<AllProfile />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default AppRouter;
