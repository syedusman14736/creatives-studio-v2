
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Projects from './pages/client/portfolio/Projects.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/client/login/Login.jsx';
import Dashboard from './pages/admin/dashboard/Dashboard.jsx';
import ProtectedRoute from './Route/ProtectedRoute.jsx';
import Slider from './pages/admin/slider/Slider.jsx';
import Portfolio from './pages/admin/portfolio/Portfolio.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/auth/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  },
  {
    path: '/admin/slider',
    element: <ProtectedRoute>
      <Slider />
    </ProtectedRoute>
  },
  {
    path: '/admin/portfolio',
    element: <ProtectedRoute>
      <Portfolio />
    </ProtectedRoute>
  },
  {
    path: '*',
    element: <Login />
  }

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
