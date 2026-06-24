
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Projects from './pages/client/portfolio/Projects.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/projects',
    element: <Projects />
  },

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
