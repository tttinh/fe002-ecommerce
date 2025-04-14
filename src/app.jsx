import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router';
import Header from './components/header';
import HomePage from './pages/home';
import ErrorPage from './pages/error';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const ProtectedRoute = ({ children, path }) => {
  const isAuthenticated = true;
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={path} state={{ from: location }} />;
  }

  return children ? children : <Outlet />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Protected routes */}
        <Route element={<ProtectedRoute path="/login" />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Public routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* Unknown routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
