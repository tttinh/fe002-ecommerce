import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './components/header';
import HomePage from './pages/home';
import ErrorPage from './pages/error';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Auth routes */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        {/* Unknown routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
