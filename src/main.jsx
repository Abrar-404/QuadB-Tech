import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Pages/Home/Home';
import CardsFunc from './Components/Pages/Cards/CardsFunc';
import SummaryCard from './Components/Pages/Summary/SummaryCard';

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
      {
        path: '/summarycard',
        element: <SummaryCard></SummaryCard>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
