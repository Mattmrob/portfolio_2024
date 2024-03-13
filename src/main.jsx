import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import Home from './pages/Home';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Home />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/About',
          element: <Home />,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);