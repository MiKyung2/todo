import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';

import reportWebVitals from './reportWebVitals';

import WebComponents from './pages/web-components';
import Todo from './pages/todo';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
  {
    path: '/web-components',
    element: <WebComponents />,
  },
  // {
  //   path: '/grpah-test',
  //   element: <Graph />,
  // },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
