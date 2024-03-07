import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import PortfolioPage from './pages/Portfolio';
import ResumePage from './pages/Resume';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <AboutPage />,
      children: [
        {
          index: true,
          element: <AboutPage />,
        },
        {
          path: '/About',
          element: <AboutPage />,
        },
        {
          path: '/Portfolio',
          element: <PortfolioPage />,
        },
        {
          path: '/Resume',
          element: <ResumePage />,
        },
        {
          path: '/Contact',
          element: <ContactPage />
        }
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);