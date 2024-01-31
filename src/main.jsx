import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Pages/Home/Home';
import CardsFunc from './Components/Pages/Cards/CardsFunc';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/cardsfunc',
        element: <CardsFunc></CardsFunc>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
